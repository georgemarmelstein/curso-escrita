# Course Exercises - Practice Cases

**Course:** Writing with LLMs Applied to Law
**Author:** George Marmelstein
**Date:** February 12, 2026

---

## Overview

This directory contains practice cases used in the course exercises, extracted from real court proceedings (anonymized when necessary).

**Important:** The files contain only procedural documents WITHOUT the judgments, for use in analysis exercises and drafting decisions.

---

## Note for English Users

The case files in this directory are **Brazilian legal documents in Portuguese**. They follow Brazilian civil law procedures and reference Brazilian legislation (Civil Code, Criminal Code, Code of Civil Procedure, Code of Criminal Procedure, etc.).

### Why We Don't Translate Legal Cases

Legal documents are jurisdiction-specific. Translating a Brazilian lawsuit into English would:
1. Lose important legal nuances
2. Reference laws that don't apply in common law systems
3. Create confusion about procedural rules

### What You Should Do

The **methodology taught in this course is universal**. The prompts and techniques work with legal documents from any jurisdiction. For the exercises:

1. **Use documents from your own legal system** - Find public court records, sample pleadings, or practice materials from your jurisdiction
2. **Adapt the prompts** - Replace Brazilian legal references with equivalents from your legal system (e.g., "CPP" → "Federal Rules of Criminal Procedure")
3. **Focus on the technique** - The FIRAC+ methodology, prompt engineering principles, and AI analysis techniques apply universally

### Equivalent Document Types

| Brazilian Document | US/UK Equivalent |
|-------------------|------------------|
| Petição Inicial | Complaint / Statement of Claim |
| Contestação | Answer / Defense |
| Réplica | Reply |
| Laudo Pericial | Expert Report / Expert Witness Statement |
| Apelação | Appeal Brief |
| Contrarrazões | Appellee's Brief / Response to Appeal |
| Sentença | Judgment / Court Decision |
| Denúncia | Criminal Complaint / Indictment |
| Embargos de Declaração | Motion for Clarification / Motion to Amend Judgment |

---

## Available Cases (Portuguese)

### 1. Torture Case (Caso Tortura)
Civil action for moral and material damages arising from torture.

| File | Description |
|------|-------------|
| `01-peticao-inicial.txt` | Plaintiff's complaint |
| `02-contestacao.txt` | Defendant's answer |
| `03-replica.txt` | Reply to answer |
| `04-pericia.txt` | Expert report |

**Status:** Anonymized

---

### 2. Papa Djalo Case (Caso Papa Djalo)
Social security action involving a foreigner with chronic kidney failure.

| File | Description |
|------|-------------|
| `01-inicial.txt` | Initial complaint |
| `02-contestacao.txt` | Social Security Administration's answer |
| `03-laudo.txt` | Medical expert report |
| `04-apelacao.txt` | Appeal brief |
| `05-contrarazoes.txt` | Response to appeal |

**Status:** Real data (public case)

---

### 3. Isabela Case (Caso Isabela)
High-profile criminal case.

| File | Description |
|------|-------------|
| `caso-completo.txt` | Case summary |

**Status:** Public data

---

### 4. Hague Convention Case (Caso Convenção de Haia)
Child custody action under the Hague Convention.

| File | Description |
|------|-------------|
| `caso-completo.txt` | Case summary |

**Status:** Anonymized

---

### 5. Igor Case (Caso Igor)
Complex criminal proceeding with extensive evidence.

| File | Description |
|------|-------------|
| `caso-completo.txt` | Complete case summary (~137KB) |

**Status:** Pending anonymization

---

## Exercise Applications

These cases can be used for:

1. **Case analysis** - Identifying relevant facts, legal issues, and disputed points
2. **Report drafting** - Structured case summaries
3. **Evidence analysis** - Evaluating the evidentiary record
4. **Legal reasoning** - Developing legal argumentation
5. **Judgment drafting** - Practice writing court decisions

---

## File Format

- All files are in TXT format (plain text)
- Encoding: UTF-8
- Naming convention: kebab-case

---

## Finding Practice Cases in Your Jurisdiction

### United States
- [PACER](https://pacer.uscourts.gov/) - Federal court records
- [Google Scholar](https://scholar.google.com/) - Case law search
- State court websites for public filings

### United Kingdom
- [BAILII](https://www.bailii.org/) - British and Irish Legal Information Institute
- [Courts and Tribunals Judiciary](https://www.judiciary.uk/)

### European Union
- [EUR-Lex](https://eur-lex.europa.eu/) - EU law and case law
- [HUDOC](https://hudoc.echr.coe.int/) - European Court of Human Rights

### General Resources
- Law school hypothetical cases
- Published case studies
- Model court documents from bar associations
