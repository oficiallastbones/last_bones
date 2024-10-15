# Lastbones Website

Este é o repositório do website oficial da banda **Lastbones**, desenvolvido com **Next.js** e **React**. O site apresenta seções como Agenda, Produtos, Sobre a banda e muito mais. O projeto é estruturado de forma modular, utilizando componentes reutilizáveis para facilitar a manutenção e expansão.

Instagram oficial: [officiallastbones](https://www.instagram.com/officiallastbones/)

## Estrutura de Pastas

Abaixo está uma visão geral das principais pastas e arquivos do projeto:
```markdown
.
├── public/
│   ├── fonts/          # Fontes personalizadas
│   ├── icons/          # Ícones estáticos
├── images/
│   ├── banda/          # Imagens relacionadas à banda
│   ├── produtos/       # Imagens dos produtos
├── src/
│   ├── components/     # Componentes React
│   │   ├── atoms/      # Menores componentes reutilizáveis
│   │   ├── molecules/  # Componentes compostos
│   │   ├── sections/   # Seções maiores da página (Banner, Contato, Footer)
│   ├── pages/          # Páginas do Next.js
│   │   ├── api/        # Rotas da API
│   │   ├── index.js    # Página inicial
│   │   ├── agenda.js   # Página da agenda de eventos
│   │   ├── contato.js  # Página de contato
│   │   ├── produtos.js # Página de produtos
│   │   ├── sobre.js    # Página sobre a banda
├── styles/             # Arquivos de estilo global e módulos CSS
│   ├── globals.css     # Estilos globais aplicados em todo o site
│   ├── Home.module.css # Estilos específicos para a página inicial
└── .next/              # Arquivos de build gerados pelo Next.js
```

## Instalação

1. Clone o repositório:
   ```bash
   git clone git@github.com:arturvidalkrause/Website-LastBones.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd lastbones-website
   ```
3. Instale as dependências:
   ```bash
   npm install
	# ou
	yarn install
   ```
4. Execute o servidor de desenvolvimento::
   ```bash
   npm run dev
   ```
5.	O projeto estará disponível em http://localhost:3000.

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento em modo local.
- `npm run build`: Cria o build de produção otimizado.
- `npm run start`: Inicia o servidor em produção após o build.
- `npm run lint`: Executa o linter para verificar problemas no código.

## Tecnologias Usadas

- **Next.js**: Framework React para renderização no lado do servidor e geração de páginas estáticas.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Icons**: Biblioteca de ícones para React.
