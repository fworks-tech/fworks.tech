# FWORKS.tech – Portfólio de Desenvolvedor Sênior

FWORKS.tech é o meu canto na internet — um lugar onde minha marca, ideias e projetos se unem para
inspirar, conectar e moldar como a tecnologia impacta o dia a dia.

## 🚀 Tecnologias Utilizadas

- Next.js (TypeScript)
- TailwindCSS
- React Icons
- Framer Motion
- ESLint (Flat Config + regras profissionais)
- Prettier (com plugin Tailwind)
- i18n (next-i18next)
- Husky + lint-staged (proteção em pré-commit)
- Prisma + PostgreSQL (futuro backend)
- Docker + AWS (planejado)
- Jest/Cypress (testes planejados)

## 🧱 Estrutura de Pastas

- `src/pages`: páginas da aplicação (Next.js)
- `src/components`: componentes reutilizáveis
- `src/features`: páginas funcionais
- `src/lib`: funções auxiliares, hooks, configs de i18n
- `src/styles`: globals e temas
- `src/types`: tipos compartilhados

## ✨ Funcionalidades

- Dark mode com toggle
- SEO dinâmico e elaborado em todos os idiomas suportados
- Integração com Open Graph e Twitter Cards
- Design responsivo com Tailwind + animações com Framer Motion
- Suporte a múltiplos idiomas

## 💡 Scripts disponíveis

```bash
yarn dev           # inicia em desenvolvimento
yarn build         # build de produção
yarn start         # inicia em produção
yarn lint          # roda o ESLint com regras estritas
yarn lint:fix      # aplica correções automáticas com ESLint
yarn lint:report   # gera relatório HTML do lint
yarn format        # aplica o Prettier nos arquivos .ts/.tsx
yarn format:check  # verifica formatação sem alterar arquivos
yarn fix           # corrige lint + formata o projeto
```

## ✅ Boas práticas aplicadas

- Tipagem forte com TypeScript
- `PropsWithChildren` e `React.FC` evitam o uso de `any`
- Uso consistente de `import type { ... }` para evitar importações de runtime
- Ordenação automática de imports (`eslint-plugin-import`)
- Acessibilidade com `eslint-plugin-jsx-a11y`
- Regras modernas de `react-hooks`, `tailwindcss`, `prettier`, etc.

---

Desenvolvido por [fworks.tech](https://fworks.tech) ✨
