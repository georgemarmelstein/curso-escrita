#!/usr/bin/env python3
"""
Script para processar arquivos PPTX e gerar transcrições Markdown
"""
import subprocess
import sys
from pathlib import Path

# Configuração
SOURCE_DIR = Path(r"C:\Users\georg\Dropbox\1 PROJETOS\CHATGPT\Slides")
DEST_DIR = Path(r"C:\Users\georg\Dropbox\1 PROJETOS\CHATGPT\site\transcricoes\slides")

FILES = [
    "Como escrever um prompt [Salvo automaticamente].pptx",
    "Como escrever um prompt.pptx",
    "COMO USAR A IA NO DIREITO - PALESTRA.pptx",
    "Como usar a IAGen no Direito com Segurança.pptx",
    "Copys.pptx",
    "Curso de escrita jurídica versão junho 2024.pptx",
    "EMENTA CNJ.pptx",
    "Escolhendo o modelo.pptx",
    "ESCREVA PARA O CÉREBRO.pptx",
    "ESCRITA JURÍDICA COM IA APRESENTAÇÃO.pptx",
    "EXERCÍCIOS - TRE.pptx",
    "Exercícios CNJ.pptx",
    "Exercícios Raciocínio Probatório.pptx",
    "Exercícios.pptx",
    "Expojud.pptx",
    "Inteligência Artificial no Judiciário.pptx",
    "INTERFACE.pptx",
    "INTRODUÇÃO AO CURSO CONVERSANDO COM MÁQUINAS.pptx",
    "INTRODUÇÃO AOS GPTS CUSTOMIZADOS.pptx",
    "live.pptx",
    "LIVRO ORGANIZADO.pptx",
    "LIVRO.pptx",
    "MASTERCLASS - COMO FAZER UM PROMPT PODEROSO.pptx",
    "MASTERCLASS - COMO USAR AS SKILSS DO CLAUDE.pptx",
]

def to_kebab_case(text):
    """Converte texto para kebab-case"""
    # Remove extensão
    text = text.replace('.pptx', '')
    # Remove [Salvo automaticamente] e similares
    text = text.replace('[Salvo automaticamente]', '').strip()
    # Substitui espaços e caracteres especiais
    text = text.lower()
    text = text.replace(' ', '-')
    text = text.replace('---', '-')
    text = text.replace('--', '-')
    # Remove caracteres especiais
    allowed = 'abcdefghijklmnopqrstuvwxyz0123456789-'
    text = ''.join(c for c in text if c in allowed)
    return text.strip('-')

def process_file(pptx_file):
    """Processa um arquivo PPTX"""
    source_path = SOURCE_DIR / pptx_file

    if not source_path.exists():
        return False, f"Arquivo não encontrado: {pptx_file}"

    try:
        # Executa markitdown
        result = subprocess.run(
            ["python", "-m", "markitdown", str(source_path)],
            capture_output=True,
            timeout=60
        )

        if result.returncode != 0:
            stderr_text = result.stderr.decode('utf-8', errors='replace')
            return False, f"Erro ao processar: {stderr_text[:100]}"

        # Tenta decodificar stdout com diferentes encodings
        try:
            stdout_text = result.stdout.decode('utf-8')
        except UnicodeDecodeError:
            try:
                stdout_text = result.stdout.decode('cp1252')
            except UnicodeDecodeError:
                stdout_text = result.stdout.decode('latin1', errors='replace')

        # Gera nome do arquivo de saída em kebab-case
        output_name = to_kebab_case(pptx_file) + '.md'
        output_path = DEST_DIR / output_name

        # Prepara conteúdo com cabeçalho
        title = pptx_file.replace('.pptx', '')
        content = f"# {title}\n\n**Arquivo:** {pptx_file}\n\n---\n\n{stdout_text}"

        # Cria diretório de destino se não existir
        DEST_DIR.mkdir(parents=True, exist_ok=True)

        # Salva arquivo
        output_path.write_text(content, encoding='utf-8')

        return True, output_name

    except subprocess.TimeoutExpired:
        return False, "Timeout ao processar"
    except Exception as e:
        return False, str(e)[:100]

def main():
    print(f"[INICIO] {len(FILES)} arquivos -> {DEST_DIR}")

    success_count = 0
    failed_count = 0

    for pptx_file in FILES:
        success, result = process_file(pptx_file)

        if success:
            print(f"[OK] {result}")
            success_count += 1
        else:
            print(f"[ERRO] {pptx_file}: {result}")
            failed_count += 1

    print(f"[FIM] {success_count}/{len(FILES)} OK, {failed_count} erros")
    return 0 if failed_count == 0 else 1

if __name__ == "__main__":
    sys.exit(main())
