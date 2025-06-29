# 🛒 Shop - E-commerce Study Case

Este projeto foi desenvolvido como estudo de caso para Trabalho de Conclusão de Curso (TCC), com o objetivo de analisar e demonstrar as funcionalidades do **React/Next.js** em uma aplicação de e-commerce moderna.

## 📋 Sobre o Projeto

O **Shop** é uma aplicação de e-commerce completa que demonstra as principais funcionalidades de uma loja virtual, incluindo:

- ✅ Listagem de produtos
- ✅ Visualização detalhada de produtos
- ✅ Sistema de carrinho de compras
- ✅ Avaliações e ratings
- ✅ Interface responsiva
- ✅ Gerenciamento de estado global
- ✅ Integração com API externa

## 🚀 Tecnologias Utilizadas

### Frontend
- **[Next.js 15.2.1](https://nextjs.org/)** - Framework React com SSR/SSG
- **[React 19](https://react.dev/)** - Biblioteca para construção de interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utilitário

### Gerenciamento de Estado e Dados
- **[TanStack React Query](https://tanstack.com/query)** - Gerenciamento de estado servidor
- **[Context API](https://react.dev/reference/react/useContext)** - Gerenciamento de estado global (Carrinho)
- **[Axios](https://axios-http.com/)** - Cliente HTTP para requisições

### UI/UX
- **[Lucide React](https://lucide.dev/)** - Ícones modernos
- **[React Icons](https://react-icons.github.io/react-icons/)** - Biblioteca de ícones
- **[React Hot Toast](https://react-hot-toast.com/)** - Notificações elegantes

### Qualidade de Código
- **[ESLint](https://eslint.org/)** - Linter para JavaScript/TypeScript
- **[@rocketseat/eslint-config](https://github.com/rocketseat-education/eslint-config-rocketseat)** - Configuração de ESLint

## 📁 Estrutura do Projeto

```
src/
├── @types/           # Definições de tipos TypeScript
├── app/              # App Router do Next.js 13+
│   ├── carrinho/     # Página do carrinho
│   ├── produto/      # Páginas dinâmicas de produtos
│   └── globals.css   # Estilos globais
├── components/       # Componentes reutilizáveis
│   ├── Cart/         # Componentes do carrinho
│   ├── Header/       # Cabeçalho da aplicação
│   ├── Loader/       # Componente de loading
│   ├── Products/     # Componentes de produtos
│   ├── providers/    # Providers de contexto
│   └── Rating/       # Sistema de avaliações
├── context/          # Contextos React
├── hook/             # Custom hooks
└── service/          # Serviços e APIs
```

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm, yarn ou pnpm

### Passos para execução

1. **Clone o repositório**
```bash
git clone https://github.com/Vinif43/FakeStoreNextjs.git
cd shop
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Execute o projeto em modo de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. **Acesse a aplicação**
```
http://localhost:3000
```

## 📦 Scripts Disponíveis

- `npm run dev` - Executa a aplicação em modo desenvolvimento com Turbopack
- `npm run build` - Gera build de produção
- `npm run start` - Inicia servidor de produção
- `npm run lint` - Executa verificação de código com ESLint

## 🏗️ Arquitetura e Funcionalidades

### 1. **App Router (Next.js 13+)**
Utilização do novo App Router do Next.js para roteamento baseado em arquivos com:
- Server Components por padrão
- Layouts aninhados
- Rotas dinâmicas para produtos

### 2. **Gerenciamento de Estado**
- **React Query**: Cache e sincronização de dados do servidor
- **Context API**: Gerenciamento do estado do carrinho de compras
- **Custom Hooks**: Abstração da lógica de negócio

### 3. **Performance**
- **Server-Side Rendering (SSR)**
- **Lazy Loading** de componentes
- **Otimização de imagens** com Next.js Image
- **Turbopack** para desenvolvimento mais rápido

### 4. **Responsividade**
- Design mobile-first
- Grid responsivo com Tailwind CSS
- Componentes adaptativos

## 🎯 Objetivos do Estudo de Caso

Este projeto visa demonstrar:

1. **Arquitetura Moderna**: Uso de padrões atuais do React/Next.js
2. **Gerenciamento de Estado**: Comparação entre diferentes abordagens
3. **Performance**: Técnicas de otimização em aplicações React
4. **TypeScript**: Benefícios da tipagem estática
5. **Boas Práticas**: Estruturação e organização de código

## 📊 Análise Técnica para TCC

### Vantagens Observadas:
- **Developer Experience**: Excelente experiência de desenvolvimento
- **Ecosystem**: Rico ecossistema de bibliotecas
- **Performance**: Otimizações automáticas do Next.js
- **Flexibilidade**: Múltiplas formas de renderização (SSR, SSG, CSR)
- **Community**: Grande comunidade e documentação

### Pontos de Atenção:
- **Bundle Size**: Necessidade de otimização cuidadosa
- **Learning Curve**: Curva de aprendizado para conceitos avançados
- **State Management**: Múltiplas opções podem gerar confusão

## 🔄 API Utilizada

O projeto utiliza a [Fake Store API](https://fakestoreapi.com/) para simular dados de produtos reais, incluindo:
- Lista de produtos
- Detalhes do produto
- Categorias
- Avaliações

## 🤝 Contribuições

Este é um projeto acadêmico para fins de estudo. Sugestões e melhorias são bem-vindas!

## 📝 Licença

Este projeto é parte de um trabalho acadêmico e está disponível para fins educacionais.

---

**Desenvolvido como estudo de caso para TCC - Análise de Frameworks Frontend Modernos**