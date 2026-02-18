#!/usr/bin/env python3
"""
Extrator de conteúdo XMind para Markdown
"""
import zipfile
import json
import os
import sys
import re
from pathlib import Path


def sanitize_filename(name):
    """Converte nome para kebab-case"""
    name = name.lower()
    name = re.sub(r'[áàãâä]', 'a', name)
    name = re.sub(r'[éèêë]', 'e', name)
    name = re.sub(r'[íìîï]', 'i', name)
    name = re.sub(r'[óòõôö]', 'o', name)
    name = re.sub(r'[úùûü]', 'u', name)
    name = re.sub(r'[ç]', 'c', name)
    name = re.sub(r'[^a-z0-9\s-]', '', name)
    name = re.sub(r'[\s_]+', '-', name)
    name = re.sub(r'-+', '-', name)
    name = name.strip('-')
    return name


def extract_topic(topic, level=0):
    """Extrai recursivamente um tópico e seus filhos"""
    lines = []
    title = topic.get('title', '').strip()

    if not title:
        title = "(sem título)"

    # Determina o prefixo baseado no nível
    if level == 0:
        lines.append(f"# {title}\n")
    elif level == 1:
        lines.append(f"\n## {title}\n")
    elif level == 2:
        lines.append(f"\n### {title}\n")
    elif level == 3:
        lines.append(f"- **{title}**")
    else:
        indent = "  " * (level - 3)
        lines.append(f"{indent}- {title}")

    # Extrai notas se existirem
    notes = topic.get('notes', {})
    if notes:
        plain = notes.get('plain', {}).get('content', '')
        if plain:
            lines.append(f"\n> {plain}\n")

    # Processa filhos
    children = topic.get('children', {})
    attached = children.get('attached', [])

    for child in attached:
        lines.extend(extract_topic(child, level + 1))

    # Processa tópicos flutuantes (detached)
    detached = children.get('detached', [])
    if detached:
        lines.append("\n---\n### Notas Adicionais\n")
        for child in detached:
            lines.extend(extract_topic(child, level + 1))

    return lines


def extract_xmind(xmind_path):
    """Extrai conteúdo de um arquivo XMind"""
    try:
        with zipfile.ZipFile(xmind_path, 'r') as z:
            # Tenta content.json primeiro (formato novo)
            if 'content.json' in z.namelist():
                content = json.loads(z.read('content.json').decode('utf-8'))
            else:
                return None, "Formato XMind antigo (XML) não suportado"

        all_lines = []
        filename = Path(xmind_path).stem
        all_lines.append(f"<!-- Fonte: {filename}.xmind -->\n")

        # Processa cada sheet (canvas)
        for sheet in content:
            sheet_title = sheet.get('title', 'Mapa')
            root = sheet.get('rootTopic', {})

            if len(content) > 1:
                all_lines.append(f"\n---\n## Canvas: {sheet_title}\n")

            all_lines.extend(extract_topic(root))

        return '\n'.join(all_lines), None

    except zipfile.BadZipFile:
        return None, "Arquivo corrompido ou não é um XMind válido"
    except json.JSONDecodeError:
        return None, "Erro ao decodificar JSON"
    except Exception as e:
        return None, str(e)


def process_directory(input_dir, output_dir):
    """Processa todos os arquivos XMind de um diretório"""
    input_path = Path(input_dir)
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)

    xmind_files = list(input_path.glob('*.xmind'))

    print(f"[INICIO] {len(xmind_files)} arquivos -> {output_dir}")

    success = 0
    errors = 0

    for xmind_file in sorted(xmind_files):
        filename = sanitize_filename(xmind_file.stem)
        output_file = output_path / f"{filename}.md"

        content, error = extract_xmind(xmind_file)

        if error:
            print(f"[ERRO] {xmind_file.name}: {error}")
            errors += 1
        else:
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"[OK] {xmind_file.name}")
            success += 1

    print(f"[FIM] {success}/{len(xmind_files)} OK, {errors} erros")
    return success, errors


if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Uso: python extract_xmind.py <pasta_entrada> <pasta_saida>")
        sys.exit(1)

    input_dir = sys.argv[1]
    output_dir = sys.argv[2]

    process_directory(input_dir, output_dir)
