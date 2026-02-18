#!/usr/bin/env python3
"""
Script de anonimização do Caso Igor
Mantém primeiro nome, altera sobrenomes, documentos e endereços
"""
import re
from pathlib import Path

# Mapeamento de nomes completos (ordem importa - mais específico primeiro)
NOMES = {
    # Réus
    'RODRIGO GENEROSO ANDRADE': 'RODRIGO SILVA LIMA',
    'Rodrigo Generoso Andrade': 'Rodrigo Silva Lima',
    'RODRIGO ROCHA ANDRADE': 'RODRIGO SILVA LIMA',
    'Rodrigo Rocha Andrade': 'Rodrigo Silva Lima',
    'IGOR BARCELOS ORTEGA': 'IGOR SANTOS COSTA',
    'Igor Barcelos Ortega': 'Igor Santos Costa',

    # Vítimas
    'JOSE KAUE LEAL AMORIM': 'JOSE OLIVEIRA MARTINS',
    'Jose Kaue Leal Amorim': 'Jose Oliveira Martins',
    'José Kaue Leal Amorim': 'José Oliveira Martins',
    'FELIPE BRUNO DOS SANTOS PIRES': 'FELIPE SOUZA RIBEIRO',
    'Felipe Bruno dos Santos Pires': 'Felipe Souza Ribeiro',
    'J. K. L. A.': 'J. O. M.',
    'F. B. dos S. P.': 'F. S. R.',
    'F. B. dos S.': 'F. S. R.',

    # Policiais / Testemunhas
    'ROBERTO DE ALMEIDA VIANA JUNIOR': 'ROBERTO FERREIRA JUNIOR',
    'Roberto de Almeida Viana Junior': 'Roberto Ferreira Junior',
    'Roberto de Almeida V. Junior': 'Roberto Ferreira Junior',
    'DIOGO PERES FERREIRA': 'DIOGO ALMEIDA CASTRO',
    'Diogo Peres Ferreira': 'Diogo Almeida Castro',
    'Cb Peres': 'Cb Almeida',
    'Cb Viana': 'Cb Ferreira',

    # Autoridades
    'WAGNER MARTIN DE SOUZA': 'WAGNER PEREIRA SANTOS',
    'Wagner Martin de Souza': 'Wagner Pereira Santos',
    'DR. WAGNER MARTIN DE SOUZA': 'DR. WAGNER PEREIRA SANTOS',
    'Dr. Wagner Martin de Souza': 'Dr. Wagner Pereira Santos',
    'RICARDO ALEXANDRE O. RODRIGUES': 'RICARDO GOMES TEIXEIRA',
    'Ricardo Alexandre O. Rodrigues': 'Ricardo Gomes Teixeira',
    'Igor Kozlowski': 'Marcos Carvalho',  # Promotor (nome diferente)
    'Bruno de Almeida Araújo': 'Bruno Moreira Reis',

    # Pais/Familiares
    'ROBERTO DE ALMEIDA VIANA': 'ROBERTO FERREIRA',
    'Roberto de Almeida Viana': 'Roberto Ferreira',
    'MARIA SANTOS VIANA': 'MARIA CARDOSO FERREIRA',
    'Maria Santos Viana': 'Maria Cardoso Ferreira',
    'EDISON FERREIRA': 'EDISON ALMEIDA',
    'Edison Ferreira': 'Edison Almeida',
    'SOLANGE PERES FERREIRA': 'SOLANGE ALMEIDA',
    'Solange Peres Ferreira': 'Solange Almeida',
    'ESPEDITO DE CALDAS AMORIM': 'ESPEDITO OLIVEIRA',
    'Espedito de Caldas Amorim': 'Espedito Oliveira',
    'ANA LUCIA GOMES LEAL': 'ANA LUCIA OLIVEIRA',
    'Ana Lucia Gomes Leal': 'Ana Lucia Oliveira',
    'ANTONIO CARLOS BRUNO PIRES': 'ANTONIO CARLOS SOUZA',
    'Antonio Carlos Bruno Pires': 'Antonio Carlos Souza',
    'NILZA MARIA DOS SANTOS PIRES': 'NILZA MARIA SOUZA',
    'Nilza Maria dos Santos Pires': 'Nilza Maria Souza',

    # Pais dos réus
    'RINGNS GENEROSO ANDRADE': 'REGINA SILVA LIMA',
    'Ringns Generoso Andrade': 'Regina Silva Lima',
    'MAURO ROCHA ANDRADE': 'MARCOS SILVA LIMA',
    'Mauro Rocha Andrade': 'Marcos Silva Lima',
    'FERNANDO TORRES ORTEGA': 'FABIO SANTOS COSTA',
    'Fernando Torres Ortega': 'Fabio Santos Costa',
    'ELISABETH BARCELOS': 'ELIANE SANTOS',
    'Elisabeth Barcelos': 'Eliane Santos',
    'ELISABETH IGOR BARCELOS': 'ELIANE SANTOS',

    # Sobrenomes soltos (para pegar variações)
    'GENEROSO ANDRADE': 'SILVA LIMA',
    'BARCELOS ORTEGA': 'SANTOS COSTA',
    'ROCHA ANDRADE': 'SILVA LIMA',
    'TORRES ORTEGA': 'SANTOS COSTA',

    # Outros
    'Érica Vema': 'Érica Silva',
    'ÉRICA VEMA': 'ÉRICA SILVA',
}

# Mapeamento de documentos
DOCUMENTOS = {
    # RGs (com e sem formatação)
    '38512934': '12345678',
    '38.512.934': '12.345.678',
    '38512934-8': '12345678-9',
    '38.512.934-8': '12.345.678-9',

    '36494898': '23456789',
    '36.494.898': '23.456.789',
    '36494898-X': '23456789-0',
    '36.494.898-X': '23.456.789-0',

    '22828223': '34567890',
    '22.828.223': '34.567.890',

    '32512365': '45678901',
    '32.512.365': '45.678.901',

    '9368037': '56789012',
    '9.368.037': '5.678.901',

    '34795165': '67890123',
    '34.795.165': '67.890.123',

    '3694898': '23456789',

    # CPFs
    '29574856801': '11122233344',
    '295.748.568-01': '111.222.333-44',
    '35879931811': '22233344455',
    '358.799.318-11': '222.333.444-55',
    '42390517897': '33344455566',
    '423.905.178-97': '333.444.555-66',
    '48240791875': '44455566677',
    '482.407.918-75': '444.555.666-77',
}

# Número do processo
PROCESSO = {
    '0001804-91.2016.8.26.0535': '0009999-00.2016.8.26.0535',
}

# Boletim de Ocorrência
BO = {
    '7003/2016': '9999/2016',
    'B.O. 7003': 'B.O. 9999',
    'RDO No.: 7003': 'RDO No.: 9999',
}

# Placas de veículos
PLACAS = {
    'CNO-8913': 'ABC-1234',
    'CNO8913': 'ABC1234',
    'DTD-3976': 'XYZ-5678',
    'DTD3976': 'XYZ5678',
}

# Telefones
TELEFONES = {
    '(11) 2404-1679': '(11) 9999-1111',
    '(11) 3377-3388': '(11) 9999-2222',
    '(11) 3931-2687': '(11) 9999-3333',
    '2404-1679': '9999-1111',
    '3377-3388': '9999-2222',
    '3931-2687': '9999-3333',
}

# Endereços
ENDERECOS = {
    'Rua Monsenhor Paulo': 'Rua das Flores',
    'RUA MONSENHOR PAULO': 'RUA DAS FLORES',
    'rua Monsenhor Paulo': 'rua das Flores',

    'Rua Pedro de Toledo': 'Rua São Paulo',
    'RUA PEDRO DE TOLEDO': 'RUA SÃO PAULO',
    'rua Pedro de Toledo': 'rua São Paulo',

    'RUA CARLOS PEDRO FIRMO': 'RUA BRASIL',
    'Rua Carlos Pedro Firmo': 'Rua Brasil',

    'RUA CONCEIÇÃO DO RIO VERDE': 'RUA MINAS GERAIS',
    'Rua Conceição do Rio Verde': 'Rua Minas Gerais',

    'RUA DEPUTADO ULISSES GUIMARÃES': 'RUA BAHIA',
    'Rua Deputado Ulisses Guimarães': 'Rua Bahia',

    'rua dos Estagiários': 'rua dos Estudantes',
    'RUA DOS ESTAGIÁRIOS': 'RUA DOS ESTUDANTES',

    'AV SEBASTIÃO HENRIQUES': 'AV SANTOS DUMONT',
    'Av Sebastião Henriques': 'Av Santos Dumont',

    'Jardim Marilena': 'Jardim Primavera',
    'JARDIM MARILENA': 'JARDIM PRIMAVERA',
    'Jd. Marilena': 'Jd. Primavera',
    'JD. MARILENA': 'JD. PRIMAVERA',

    'SÍTIO DOS MORROS': 'VILA NOVA',
    'Sítio dos Morros': 'Vila Nova',

    'PQ SANTO AGOSTINHO': 'JD ESPERANÇA',
    'Pq Santo Agostinho': 'Jd Esperança',

    'BAIRRO DO LIMÃO': 'CENTRO',
    'Bairro do Limão': 'Centro',

    'TABOÃO': 'JARDIM EUROPA',
    'Taboão': 'Jardim Europa',

    'CEP: 07142-410': 'CEP: 00000-000',
    'CEP 07142-410': 'CEP 00000-000',
}


def anonimizar(texto):
    """Aplica todas as substituições de anonimização"""

    # 1. Nomes (mais específicos primeiro)
    for original, anonimo in NOMES.items():
        texto = texto.replace(original, anonimo)

    # 2. Documentos
    for original, anonimo in DOCUMENTOS.items():
        texto = texto.replace(original, anonimo)

    # 3. Processo
    for original, anonimo in PROCESSO.items():
        texto = texto.replace(original, anonimo)

    # 4. B.O.
    for original, anonimo in BO.items():
        texto = texto.replace(original, anonimo)

    # 5. Placas
    for original, anonimo in PLACAS.items():
        texto = texto.replace(original, anonimo)

    # 6. Telefones
    for original, anonimo in TELEFONES.items():
        texto = texto.replace(original, anonimo)

    # 7. Endereços
    for original, anonimo in ENDERECOS.items():
        texto = texto.replace(original, anonimo)

    return texto


def main():
    input_file = Path('C:/Users/georg/curso-escrita/docs/exercicios/caso-igor/caso-igor-completo.txt')
    output_file = Path('C:/Users/georg/curso-escrita/docs/exercicios/caso-igor/caso-igor-anonimizado.txt')

    print(f'[INICIO] Lendo {input_file.name}...')
    texto = input_file.read_text(encoding='utf-8', errors='ignore')

    print(f'[INFO] Tamanho original: {len(texto):,} caracteres')

    print('[INFO] Aplicando anonimização...')
    texto_anonimizado = anonimizar(texto)

    # Adicionar header de anonimização
    header = '''================================================================================
CASO IGOR - PROCESSO CRIMINAL
VERSÃO ANONIMIZADA
================================================================================

AVISO: Este documento foi anonimizado para fins didáticos.
Sobrenomes, documentos, endereços e placas foram alterados.
Os primeiros nomes foram mantidos para preservar a legibilidade.

================================================================================

'''

    texto_final = header + texto_anonimizado

    print(f'[INFO] Salvando em {output_file.name}...')
    output_file.write_text(texto_final, encoding='utf-8')

    print(f'[FIM] Anonimização concluída!')
    print(f'[INFO] Tamanho final: {len(texto_final):,} caracteres')


if __name__ == '__main__':
    main()
