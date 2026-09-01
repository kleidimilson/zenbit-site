---
title: "Integração com WhatsApp: o que dá, o que não dá e o que custa"
excerpt: "No Piauí, quase toda venda passa pelo WhatsApp. Integrar o canal ao seu sistema é possível — desde que você saiba a diferença entre a API oficial e as gambiarras."
category: "Integrações"
date: "2026-04-14"
---

Praticamente todo projeto que começa aqui chega no mesmo pedido: "e dá para mandar isso pelo WhatsApp?". Faz sentido — é o canal onde o cliente do Piauí realmente responde. Mas a resposta muda muito conforme o que se quer fazer, e a confusão entre os caminhos gera projeto travado e número bloqueado.

## O que resolve sem integração nenhuma

Boa parte dos casos não precisa de API. Um link direto para conversa, com mensagem já preenchida, resolve o essencial: botão no site, no orçamento, no rodapé do e-mail. Custo zero, funciona hoje.

Se o objetivo é só facilitar o primeiro contato, pare aqui. Muita gente contrata plataforma cara para um problema que um link resolve.

## O que exige a API oficial

Quando a mensagem precisa sair do sistema sozinha — confirmação de pedido, aviso de vencimento, lembrete de agendamento, código de acesso — aí sim é a API oficial do WhatsApp Business.

O que muda:

- **Cobrança por conversa**, com preço diferente conforme o tipo (iniciada pela empresa ou pelo cliente) e faixas de isenção.
- **Modelos de mensagem aprovados previamente.** Mensagem iniciada pela empresa precisa seguir um template submetido à aprovação. Não dá para mandar texto livre para quem não falou com você primeiro.
- **Número dedicado.** O número usado na API não funciona mais no aplicativo comum.

## O que não dá — e por que insistir sai caro

Ferramenta que automatiza o WhatsApp comum, mandando mensagem em massa por um celular ou por navegador, viola os termos de uso. O resultado previsível é bloqueio do número. Perder o número que a base de clientes conhece há anos é um prejuízo bem maior que a economia da solução improvisada.

Disparo em massa para lista comprada, então, junta os dois problemas: bloqueio quase certo e exposição na LGPD.

## Ordem de implantação que recomendamos

1. Link direto com mensagem pronta nos pontos de contato do site.
2. Registro no sistema de toda conversa que virou negócio — sem isso, não há dado para melhorar nada.
3. Só então API oficial, começando por **um** aviso automático de alto valor: confirmação de pedido ou lembrete de agendamento.

Começar pelo item 3 é o erro mais comum. Sem os dois primeiros, sobra custo de plataforma e nenhuma medição de retorno.

**Resumo:** se a dúvida é "vale integrar?", a resposta depende de existir mensagem que hoje alguém digita à mão, todo dia, sempre igual. Se existe, a integração se paga. Se não, o link basta.

Mensagem repetida à mão costuma vir junto de [dado que ainda mora numa planilha](/blog/da-planilha-para-o-sistema-sinais). Quando os dois problemas aparecem juntos, o caminho é [desenvolvimento sob medida](/desenvolvimento-de-software-em/teresina-pi/) resolvendo a origem, não só o envio.
