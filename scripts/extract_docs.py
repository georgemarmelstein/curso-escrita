#!/usr/bin/env python3
"""
Extrator de texto de DOCX, DOC e PDF para TXT
"""
import sys
from pathlib import Path


def extract_docx(filepath):
    """Extrai texto de arquivo DOCX"""
    from docx import Document
    doc = Document(filepath)
    paragraphs = []
    for para in doc.paragraphs:
        text = para.text.strip()
        if text:
            paragraphs.append(text)
    return '\n\n'.join(paragraphs)


def extract_doc(filepath):
    """Extrai texto de arquivo DOC usando antiword ou textract"""
    import subprocess
    try:
        # Tenta antiword primeiro
        result = subprocess.run(['antiword', str(filepath)],
                              capture_output=True, text=True, timeout=60)
        if result.returncode == 0:
            return result.stdout
    except:
        pass

    # Fallback: converte para txt via libreoffice
    try:
        import tempfile
        import os
        with tempfile.TemporaryDirectory() as tmpdir:
            subprocess.run([
                'soffice', '--headless', '--convert-to', 'txt:Text',
                '--outdir', tmpdir, str(filepath)
            ], capture_output=True, timeout=120)
            txt_file = Path(tmpdir) / (Path(filepath).stem + '.txt')
            if txt_file.exists():
                return txt_file.read_text(encoding='utf-8', errors='ignore')
    except:
        pass

    return None


def extract_pdf(filepath):
    """Extrai texto de arquivo PDF"""
    import pdfplumber
    text_parts = []
    with pdfplumber.open(filepath) as pdf:
        for page in pdf.pages:
            text = page.extract_text()
            if text:
                text_parts.append(text)
    return '\n\n'.join(text_parts)


def extract_file(filepath):
    """Extrai texto de qualquer formato suportado"""
    filepath = Path(filepath)
    suffix = filepath.suffix.lower()

    if suffix == '.docx':
        return extract_docx(filepath)
    elif suffix == '.doc':
        return extract_doc(filepath)
    elif suffix == '.pdf':
        return extract_pdf(filepath)
    elif suffix == '.txt':
        return filepath.read_text(encoding='utf-8', errors='ignore')
    else:
        return None


def main():
    if len(sys.argv) < 3:
        print("Uso: python extract_docs.py <arquivo_entrada> <arquivo_saida>")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2]

    try:
        text = extract_file(input_file)
        if text:
            Path(output_file).write_text(text, encoding='utf-8')
            print(f"[OK] {Path(input_file).name}")
        else:
            print(f"[ERRO] {Path(input_file).name}: formato não suportado")
            sys.exit(1)
    except Exception as e:
        print(f"[ERRO] {Path(input_file).name}: {e}")
        sys.exit(1)


if __name__ == '__main__':
    main()
