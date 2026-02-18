# 0.2 Configuração de Privacidade

**Módulo:** 0 - Preparação
**Tempo estimado:** 20 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Configurar opt-out de treinamento no Claude
- Aplicar a Resolução 615/2025 do CNJ
- Anonimizar documentos antes de inserir no LLM
- Distinguir "histórico" de "treinamento"

---

## Por que Importa

**Para profissionais do Direito:**
- A Resolução 615/2025 do CNJ **exige** que dados do usuário não sejam usados para treinar modelos
- Documentos sigilosos **não podem** ser inseridos sem anonimização prévia
- Violação pode gerar responsabilização funcional

**Contexto regulatório:**
Esta é a configuração **obrigatória** antes de qualquer uso profissional no Judiciário.

---

## Base Conceitual

### Resolução 615/2025 do CNJ

| Categoria | Regra | Status |
|-----------|-------|--------|
| Treinamento | Dados NÃO podem ser usados para treinar | **OBRIGATÓRIO** |
| Documentos sigilosos | NÃO podem ser inseridos no modelo | **PROIBIDO** |
| Anonimização | Deve ser manual ou com ferramenta local | **OBRIGATÓRIO** |
| Dados sensíveis | Evitar quando possível | RECOMENDADO |

### Conceito Mínimo

Para usar LLMs no Judiciário, você precisa garantir que seus dados **não alimentem versões futuras do modelo**. Isso é chamado de **opt-out de treinamento**.

No Claude, a opção se chama **"Ajudar a melhorar o Claude"** e deve estar **DESATIVADA**.

### Diferença Importante

```
HISTÓRICO ≠ TREINAMENTO

Histórico:     Suas conversas ficam salvas para VOCÊ consultar
               → Isso é normal e útil

Treinamento:   Suas conversas são usadas para TREINAR o modelo
               → Isso é PROIBIDO pela Resolução 615/2025
```

---

## Exercício Prático

### Tarefa
Desativar o uso dos seus dados para treinamento.

### Passo a Passo

**Claude:**
1. Clique no seu perfil (ícone no canto inferior esquerdo)
2. Clique em **"Configurações"** (ou use atalho Ctrl+,)
3. No menu lateral, clique em **"Privacidade"**
4. Role até encontrar **"Ajudar a melhorar o Claude"**
5. Certifique-se de que o toggle está **DESATIVADO** (cinza)
6. Pronto — suas conversas não serão usadas para treinamento

**ChatGPT (se usar):**
1. Settings → Data Controls
2. Localize "Improve the model for everyone"
3. Desative a opção

**Gemini (se usar):**
1. Acesse Configurações de privacidade do Gemini
2. Revise opções de uso de dados
3. Desative o que for relacionado a treinamento

### Checklist de Verificação

```
[ ] Opt-out de treinamento ativo no Claude
[ ] Sei onde fica a configuração de privacidade
[ ] Entendo a diferença entre "histórico" e "treinamento"
[ ] Sei que documentos sigilosos exigem anonimização PRÉVIA
[ ] Sei que NÃO posso usar o LLM para anonimizar documentos sigilosos
```

---

## Exemplo Resolvido

### Situação
Você precisa analisar uma petição inicial de um processo sigiloso.

### ERRADO
```
Você cola o documento completo no Claude:

"AUTOR: João da Silva, CPF 123.456.789-00
Processo nº 0001234-56.2024.4.05.8100
[conteúdo sigiloso]"

→ VIOLA a Resolução 615/2025
```

### CORRETO
```
1. Anonimiza LOCALMENTE (editor de texto, Word, script):

"AUTOR: [AUTOR]
Processo nº [PROCESSO]
[conteúdo com dados pessoais removidos]"

2. Confirma que opt-out está ativo no Claude

3. Só então insere o documento anonimizado
```

**Por que funciona:** O LLM analisa estrutura e argumentos sem precisar de dados reais.

---

## Dicas e Armadilhas

### Dica
> Crie um template de anonimização padrão e salve em local de fácil acesso:
> ```
> Nomes próprios    → [AUTOR], [RÉU], [TESTEMUNHA]
> CPF/CNPJ          → [CPF], [CNPJ]
> Processos         → [PROCESSO]
> Datas específicas → [DATA]
> Valores           → [VALOR]
> Endereços         → [ENDEREÇO]
> ```

### Armadilha
> **"Vou pedir ao Claude para anonimizar o documento antes de analisar."**
>
> **ERRADO.** Ao inserir o documento sigiloso para anonimização, você JÁ violou a regra.
>
> A anonimização deve ser:
> - **Manual** (você mesmo substitui os dados), OU
> - Com ferramenta que rode **LOCALMENTE** no seu computador

---

## Recursos

### Links Oficiais
- [Resolução 615/2025 CNJ](https://atos.cnj.jus.br/atos/detalhar/6001) — Texto completo
- [Privacidade Claude](https://privacy.claude.com/pt/collections/10663362-consumidores) — Central de privacidade
- [Privacidade ChatGPT](https://openai.com/pt-BR/policies/row-privacy-policy/) — Política OpenAI

### Imagens de Referência
- Configuração de privacidade: `site/assets/img/modulo0/claude-privacidade.png`

---

## Conexão

Com a privacidade configurada conforme a Resolução 615/2025, você está autorizado a usar LLMs no trabalho.

→ Próxima: **[0.3 Interface e Navegação](./aula-0.3.md)**
