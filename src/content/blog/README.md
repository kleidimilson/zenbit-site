# Como publicar um post novo

1. Copie um dos arquivos `.md` desta pasta.
2. Renomeie o arquivo — o nome do arquivo vira a URL do post (`/blog/nome-do-arquivo`). Use apenas letras minúsculas, números e hífen.
3. Preencha o frontmatter no topo:

```md
---
title: "Título do post"
excerpt: "Resumo de 1-2 frases, aparece na listagem do blog."
category: "Arquitetura" # ou Processo, Carreira, Produto, etc.
date: "2026-08-31" # formato AAAA-MM-DD
---
```

4. Escreva o corpo do post em Markdown normal abaixo do frontmatter (`##` para subtítulos, `**negrito**`, listas com `-`, etc.).
5. Rode `npm run dev` para conferir localmente, depois `git commit` + deploy — o post entra automaticamente na listagem `/blog`, na home e no `sitemap.xml`. Não precisa editar nenhum outro arquivo.
