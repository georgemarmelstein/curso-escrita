#!/usr/bin/env python3
"""
Script para processar arquivos PPTX e gerar transcrições em Markdown
usando markitdown.
"""

import subprocess
import os
import re
from pathlib import Path

SOURCE_DIR = r"C:\Users\georg\Dropbox\1 PROJETOS\CHATGPT\Slides"
DEST_DIR = r"C:\Users\georg\Dropbox\1 PROJETOS\CHATGPT\site\transcricoes\slides"

FILES_TO_PROCESS = [
    "Modelos 2025.pptx",
    "O Novo Direito TJDF.pptx",
    "O novo renascimento 2.pptx",
    "O Novo Renascimento.pptx",
    "O USO DA IA NO DIREITO - PALESTRA ANMPT.pptx",
    "O USO DA IA NO DIREITO - PALESTRA.pptx",
    "O Uso da Inteligência Artificial no Direito.pptx",
    "Oficina de escrita - aula 1.pptx",
    "Oficina de escrita - aula 2.pptx",
    "Oficina de escrita - aula 3.pptx",
    "Palestra - ChatGPT 1 ano depois.pptx",
    "Palestra - Julgando com máquinas.pptx",
    "Palestra - O futuro da justiça é agora.pptx",
    "Palestra - O Poder do Chat-GPT no Direito.pptx",
    "Palestra - Os Sete Pecados (modelo super) versão 2.pptx",
    "Palestra - Os Sete Pecados (modelo super).pptx",
    "Palestra a Era dos SuperJuristas stf.pptx",
    "Palestra a Era dos SuperJuristas.pptx",
    "PALESTRA MP A ERA DOS SUPERJURISTAS.pptx",
    "Palestra Uso da IA em Demandas de Saúde.pptx",
    "Pesquisa Jurídica com IA ESA.pptx",
    "Pesquisa jurídica com IA.pptx",
]

def to_kebab_case(text):
    """Converte texto para kebab-case."""
    text = text.replace('.pptx', '')
    text = text.lower()
    text = re.sub(r'[àáâãäå]', 'a', text)
    text = re.sub(r'[èéêë]', 'e', text)
    text = re.sub(r'[ìíîï]', 'i', text)
    text = re.sub(r'[òóôõö]', 'o', text)
    text = re.sub(r'[ùúûü]', 'u', text)
    text = re.sub(r'[ç]', 'c', text)
    text = re.sub(r'[^a-z0-9]+', '-', text)
    text = re.sub(r'-+', '-', text)
    text = text.strip('-')
    return text

def process_file(filename):
    """Processa um arquivo PPTX e gera o Markdown."""
    source_path = os.path.join(SOURCE_DIR, filename)

    if not os.path.exists(source_path):
        return False, f"Arquivo não encontrado: {filename}"

    try:
        # Executar markitdown
        result = subprocess.run(
            ["python", "-m", "markitdown", source_path],
            capture_output=True,
            text=True,
            timeout=60
        )

        if result.returncode != 0:
            return False, f"Erro ao processar: {result.stderr}"

        content = result.stdout

        # Extrair título (primeira linha com #)
        title = filename.replace('.pptx', '')
        for line in content.split('\n'):
            if line.strip().startswith('#'):
                title = line.strip().lstrip('#').strip()
                break

        # Gerar nome do arquivo de destino em kebab-case
        output_filename = to_kebab_case(filename) + '.md'
        output_path = os.path.join(DEST_DIR, output_filename)

        # Criar conteúdo formatado
        formatted_content = f"# {title}\n\n**Arquivo:** {filename}\n\n---\n\n{content}"

        # Salvar arquivo
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(formatted_content)

        return True, output_filename

    except subprocess.TimeoutExpired:
        return False, "Timeout ao processar arquivo"
    except Exception as e:
        return False, str(e)

def main():
    print(f"[INICIO] {len(FILES_TO_PROCESS)} arquivos -> {DEST_DIR}")

    success_count = 0
    failed_files = []

    for filename in FILES_TO_PROCESS:
        success, result = process_file(filename)
        if success:
            print(f"[OK] {filename}: {result}")
            success_count += 1
        else:
            print(f"[ERRO] {filename}: {result}")
            failed_files.append(filename)

    print(f"\n[FIM] {success_count}/{len(FILES_TO_PROCESS)} OK")

    if failed_files:
        print("\nArquivos com erro:")
        for f in failed_files:
            print(f"  - {f}")

if __name__ == "__main__":
    main()
