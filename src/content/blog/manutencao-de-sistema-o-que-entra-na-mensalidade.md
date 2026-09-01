---
title: "Manutenção de sistema: o que deveria estar na mensalidade (e o que não está)"
excerpt: "Contrato de manutenção é a parte menos discutida e a que mais gera atrito depois. O que cabe dentro, o que é projeto novo e quanto isso costuma custar."
category: "Processo"
date: "2026-02-25"
---

Sistema entregue não é sistema pronto. Dependência desatualiza, regra de negócio muda, integração externa altera o formato de resposta, e o servidor precisa de alguém olhando. A discussão sobre manutenção quase sempre acontece tarde — depois do lançamento, com o sistema já no ar e sem acordo sobre quem faz o quê.

## O que deveria estar incluído

- **Correção de defeito.** Se o sistema não faz o que foi combinado, arrumar é obrigação, não serviço extra. Vale definir prazo de resposta por gravidade.
- **Atualização de segurança.** Biblioteca com falha conhecida precisa ser atualizada mesmo que nada tenha quebrado. É o item que mais gente esquece de contratar e mais causa problema grave.
- **Monitoramento e backup testado.** Backup que ninguém nunca restaurou é uma suposição, não uma garantia. Restauração de teste deve ser periódica.
- **Ajuste pequeno de conteúdo e parâmetro.** Trocar um texto, mudar uma alíquota, incluir um item numa lista. Coisas de minutos que não deveriam virar orçamento.

## O que é projeto novo, mesmo com contrato ativo

- Tela nova, relatório novo, integração nova.
- Mudança de regra que altera o modelo de dados.
- Redesenho de fluxo existente.

A linha que usamos é simples: se a mudança exige decidir algo de negócio que ninguém tinha decidido antes, é escopo novo. Se é fazer funcionar o que já foi decidido, é manutenção.

## Faixas de preço praticadas

Manutenção mensal costuma ficar entre **10% e 20% do valor do desenvolvimento, ao ano** — o que dá, para um sistema de R$ 40.000, algo entre R$ 330 e R$ 660 por mês. Sistemas críticos, com atendimento fora do horário comercial, custam mais.

Cobrar por hora avulsa também funciona, e é honesto para sistemas estáveis. O risco é o incentivo errado: sem contrato, ninguém olha o sistema até algo quebrar — e aí a correção é mais cara.

## A pergunta que evita a maior parte do atrito

Antes de assinar, peça para o fornecedor descrever um exemplo concreto de cada lado: um pedido que estaria coberto pela mensalidade e um que geraria orçamento. Se ele não consegue dar os dois exemplos rapidamente, o contrato ainda não está claro para nenhum dos dois.

**Regra prática:** contrato de manutenção sem monitoramento e sem backup testado não é manutenção, é atendimento sob demanda com nome bonito.
