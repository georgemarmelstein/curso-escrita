#!/usr/bin/env python3
"""
Extrai o objeto 'lessons' do caderno-v2.html e converte para JSON.
Uso: python extract-lessons.py
"""

import re
import json
import os

def extract_lessons_from_html(html_path):
    """Extrai o objeto lessons do HTML e retorna como dicionário Python."""

    with open(html_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Encontrar o início do objeto lessons
    match = re.search(r'const lessons = \{', content)
    if not match:
        raise ValueError("Objeto 'lessons' não encontrado no HTML")

    start_idx = match.start() + len('const lessons = ')

    # Encontrar o final do objeto (contando chaves)
    brace_count = 0
    in_string = False
    escape_next = False
    in_template = False
    end_idx = start_idx

    for i, char in enumerate(content[start_idx:], start_idx):
        if escape_next:
            escape_next = False
            continue

        if char == '\\':
            escape_next = True
            continue

        if char == '`':
            in_template = not in_template
            continue

        if in_template:
            continue

        if char == '"' or char == "'":
            # Simplificação: assumir que strings são bem formadas
            pass

        if char == '{':
            brace_count += 1
        elif char == '}':
            brace_count -= 1
            if brace_count == 0:
                end_idx = i + 1
                break

    js_object = content[start_idx:end_idx]

    return js_object, content

def js_to_json(js_obj):
    """Converte objeto JavaScript para JSON válido."""

    # Substituir template literals por strings
    # Padrão: content: `...` -> content: "..."
    result = js_obj

    # Processar template literals (backticks)
    # Esta é uma abordagem simplificada
    in_template = False
    output = []
    i = 0

    while i < len(result):
        char = result[i]

        if char == '`':
            if not in_template:
                in_template = True
                output.append('"')
            else:
                in_template = False
                output.append('"')
            i += 1
            continue

        if in_template:
            # Escapar caracteres especiais dentro de template literals
            if char == '"':
                output.append('\\"')
            elif char == '\n':
                output.append('\\n')
            elif char == '\r':
                output.append('')
            elif char == '\t':
                output.append('\\t')
            elif char == '\\' and i + 1 < len(result) and result[i + 1] == '`':
                # \` dentro de template -> "
                output.append('`')
                i += 2
                continue
            else:
                output.append(char)
        else:
            output.append(char)

        i += 1

    result = ''.join(output)

    # Remover trailing commas antes de } ou ]
    result = re.sub(r',(\s*[}\]])', r'\1', result)

    # Adicionar aspas em chaves não-quoted (ex: number: -> "number":)
    result = re.sub(r'(\s)([a-zA-Z_][a-zA-Z0-9_]*)(\s*:)', r'\1"\2"\3', result)

    return result

def extract_ui_strings(html_content):
    """Extrai strings de UI do HTML."""
    ui = {
        "meta": {
            "lang": "pt-BR",
            "title": "Formação em IA Aplicada ao Direito",
            "subtitle": "Caderno de Exercícios",
            "author": "George Marmelstein",
            "version": "1.0.0"
        },
        "ui": {
            "sidebar_title": "IA Aplicada ao Direito",
            "sidebar_subtitle": "Caderno de Exercícios",
            "theme_light": "Modo claro",
            "theme_dark": "Modo escuro",
            "prev_lesson": "Lição anterior",
            "next_lesson": "Próxima lição",
            "exercise": "Exercício",
            "tip": "Dica Prática",
            "warning": "Armadilha Comum",
            "checklist": "Checklist de Verificação",
            "copy": "Copiar",
            "copied": "Copiado!",
            "progress": "Progresso",
            "search_placeholder": "Buscar...",
            "no_results": "Nenhum resultado encontrado"
        },
        "modules": {
            "modulo0": "Módulo 0 — Preparação",
            "modulo1": "Módulo 1 — Fundamentos",
            "modulo2": "Módulo 2 — Engenharia de Prompt",
            "modulo3": "Módulo 3 — Técnicas Avançadas"
        }
    }
    return ui

def main():
    # Paths
    script_dir = os.path.dirname(os.path.abspath(__file__))
    site_dir = os.path.dirname(script_dir)
    html_path = os.path.join(site_dir, 'caderno-v2.html')
    output_dir = os.path.join(site_dir, 'i18n', 'caderno')

    # Criar diretório de saída
    os.makedirs(output_dir, exist_ok=True)

    print(f"[INICIO] Extraindo lições de {html_path}")

    try:
        # Extrair objeto lessons
        js_lessons, html_content = extract_lessons_from_html(html_path)
        print(f"[OK] Objeto lessons extraído ({len(js_lessons)} caracteres)")

        # Converter para JSON
        json_str = js_to_json(js_lessons)

        # Validar JSON
        try:
            lessons_dict = json.loads(json_str)
            print(f"[OK] JSON válido ({len(lessons_dict)} lições)")
        except json.JSONDecodeError as e:
            # Salvar para debug
            debug_path = os.path.join(output_dir, 'debug_lessons.txt')
            with open(debug_path, 'w', encoding='utf-8') as f:
                f.write(json_str)
            print(f"[ERRO] JSON inválido: {e}")
            print(f"[INFO] Arquivo de debug salvo em {debug_path}")
            return

        # Extrair UI strings
        ui_strings = extract_ui_strings(html_content)

        # Combinar em estrutura final
        output = {
            **ui_strings,
            "lessons": lessons_dict
        }

        # Salvar pt.json
        pt_path = os.path.join(output_dir, 'pt.json')
        with open(pt_path, 'w', encoding='utf-8') as f:
            json.dump(output, f, ensure_ascii=False, indent=2)

        file_size = os.path.getsize(pt_path) / 1024
        print(f"[OK] {pt_path} ({file_size:.1f} KB)")

        # Criar esqueleto para en.json e es.json
        for lang in ['en', 'es']:
            lang_path = os.path.join(output_dir, f'{lang}.json')
            if not os.path.exists(lang_path):
                skeleton = {
                    "meta": {
                        "lang": "en-US" if lang == 'en' else "es-ES",
                        "title": "AI Training Applied to Law" if lang == 'en' else "Formación en IA Aplicada al Derecho",
                        "subtitle": "Exercise Notebook" if lang == 'en' else "Cuaderno de Ejercicios",
                        "author": "George Marmelstein",
                        "version": "1.0.0",
                        "status": "pending_translation"
                    },
                    "ui": {},
                    "modules": {},
                    "lessons": {}
                }
                with open(lang_path, 'w', encoding='utf-8') as f:
                    json.dump(skeleton, f, ensure_ascii=False, indent=2)
                print(f"[OK] {lang_path} (esqueleto criado)")

        print(f"[FIM] Extração concluída")

    except Exception as e:
        print(f"[ERRO] {e}")
        raise

if __name__ == '__main__':
    main()
