# Salgados Dona Nina — Site oficial

Site da Salgados Dona Nina (unidades **Itaquera** e **Guaianases**): cardápio com filtros por categoria, carrinho de compras e finalização do pedido pelo **WhatsApp** ou pelo **iFood** de cada unidade.

É um **site estático** (HTML, CSS e JavaScript puros). Não tem build, não tem dependências e **não usa variáveis de ambiente**.

## Estrutura

```
dona-nina-site/
├── index.html                  Página única do site
├── css/styles.css              Todos os estilos (cores no topo, em :root)
├── js/
│   ├── cardapio-carrinho.js    Produtos, filtros do cardápio e carrinho
│   └── unidades-pedido.js      Janela "Faça seu pedido" e dados das unidades
├── assets/
│   ├── icons/favicon.svg
│   └── img/
│       ├── logo/logo-dona-nina.png
│       └── produtos/<categoria>/<produto>.jpg
├── vercel.json                 Cache dos arquivos de /assets
├── package.json                Atalhos para rodar localmente
└── .gitignore
```

## Como rodar no computador

Com Node.js instalado:

```bash
npm run dev
```

Ou, com Python instalado:

```bash
python3 -m http.server 3000
```

Depois abra http://localhost:3000.

## Como editar

- **Produtos, preços e descrições:** lista `P` em `js/cardapio-carrinho.js`.
- **Fotos dos produtos:** troque o arquivo em `assets/img/produtos/<categoria>/` mantendo o mesmo nome. Para um produto novo, adicione o arquivo e a linha correspondente em `IM` e `M` no mesmo `.js`.
- **WhatsApp e iFood das unidades:** objeto `U` em `js/unidades-pedido.js` e os botões da seção "Escolha sua unidade favorita" em `index.html`. Os números usam o formato internacional `https://wa.me/55DDDNÚMERO`.
- **Endereço de Guaianases:** em `index.html`, procure `id="end-guaianases"` (hoje está "Endereço em breve").
- **Cores e fontes:** variáveis no início de `css/styles.css`. As fontes (Cormorant Garamond e DM Sans) vêm do Google Fonts.

## Como funciona o pedido

O cliente monta o carrinho no site (guardado no navegador, via `localStorage`), escolhe a unidade e finaliza:

- **WhatsApp:** abre a conversa com o número da unidade e a mensagem do pedido já preenchida.
- **iFood:** abre a loja da unidade. O carrinho do site **não** é transferido para o iFood; o cliente adiciona os itens de novo por lá.

Não existe pagamento nem taxa de entrega no site.

## Publicação na Vercel

Importe o repositório na Vercel com **Framework Preset: Other**, e deixe **Build Command** e **Output Directory** em branco. Não há variáveis de ambiente.
