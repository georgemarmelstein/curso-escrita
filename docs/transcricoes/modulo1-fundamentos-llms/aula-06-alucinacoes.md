# Aula 6 - Alucinações

**Módulo:** 1 - Fundamentos dos LLMs
**Autor:** George Marmelstein
**Total de slides:** 8

---

## Slide 1 - Capa

**ALUCINAÇÕES DOS LLMS**

George Marmelstein

---

## Slide 2 - Imagem Visual

*(Slide visual/imagem)*

---

## Slide 3 - Conceito

**CONCEITO**
*Uma máquina de palpites probabilísticos*

- A alucinação ocorre quando o modelo produz respostas desconectadas com a realidade, muitas vezes com confiança e aparência de veracidade. Não é alucinação, mas confabulação.

- O LLM não possui intenção de mentir ou senso de realidade – ele simplesmente não tem um mecanismo intrínseco para distinguir fato de ficção em sua saída.

- Isso não é um bug temporário, mas uma característica matematicamente inevitável, típica de um modelo que preenche lacunas com palpites estatísticos. E pode ser bom em alguns casos!

*Nota: preenchimento criativo de lacunas sem mecanismos de rastreamento da verdade*

---

## Slide 4 - Por que os LLMs Alucinam

**PORQUE OS LLMS ALUCINAM**
*Metáfora do concurseiro*

### Problema dos dados usados no treinamento

**Lacunas de conhecimento:**
- Dados ausentes ou raros
- Corte temporal
- Nichos não-representados

**Dados problemáticos:**
- Dados incorretos ou enviesados
- Conflitos de informação
- Ambiguidades

### Problemas do feedback humano no fine-tuning

- Incentivo perverso do RLHF
- Penalização da abstinência
- Recompensa por confiança
- Recompensa por verbosidade
- Imitação de padrões de resposta
- Modelo mimetiza estilos
- No afã de ser útil, inventa
- Cria dados por semelhança

---

## Slide 5 - Sonhando Padrões

**SONHANDO PADRÕES**
*Treinando o assistente*

*(Slide visual/imagem com ícones)*

---

## Slide 6 - Taxinomia

**TAXINOMIA**
*Tipos mais frequentes de alucinações*

1. **FALHAS DE DIRIGIBILIDADE** (desobediência ao prompt)
2. **RESPOSTA NON SENSE** (quebra de coerência)
3. **FALHAS DE FACTUALIDADE** (confabulações)
4. **MISTURAS LINGUÍSTICAS INESPERADAS**
5. **FALHAS MATEMÁTICAS E LÓGICAS**
6. **FALHAS DE ATIVAÇÃO DE FERRAMENTAS**

---

## Slide 7 - Exemplos

**EXEMPLOS**
*Máquinas nem tão inteligentes assim*

*(Slide com exemplos práticos de alucinações)*

---

## Slide 8 - Síntese

### SÍNTESE

**CONCEITO**
- Alucinações são respostas desalinhadas com a realidade ou com a solicitação do usuário. Muitas vezes, os LLMs produzem saídas plausíveis, coerentes e convincentes, mas totalmente fictícias.

**ALUCINAÇÕES SÃO INERENTES AOS LLMS**
- As alucinações não são falhas do modelo, mas uma condição essencial para a sua eficiência. É ela que torna os LLMs ferramentas poderosas de solução de problemas novos.

**IMPLICAÇÕES**
- TODAS as respostas factuais extraídas do conhecimento parametrizado são "palpites" probabilísticos. Parta do pressuposto que são falsos, até prova em contrário.
