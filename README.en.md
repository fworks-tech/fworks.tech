# FWORKS.tech – Senior Developer Portfolio

This project is a personal portfolio built with the most in-demand modern technologies in the international market, focused on performance, scalability, and clean design.

## 🚀 Technologies Used

- Next.js (TypeScript)
- TailwindCSS
- React Icons
- Framer Motion
- ESLint (Flat Config + professional rules)
- Prettier (with Tailwind plugin)
- i18n (next-i18next)
- Husky + lint-staged (pre-commit protection)
- Prisma + PostgreSQL (future backend)
- Docker + AWS (planned)
- Jest/Cypress (planned for testing)

## 🧱 Folder Structure

- `src/pages`: application pages (Next.js)
- `src/components`: reusable components
- `src/features`: functional pages
- `src/lib`: helper functions, hooks, i18n configs
- `src/styles`: global styles and themes
- `src/types`: shared types

## ✨ Features

- Dark mode toggle
- Dynamic and multilingual SEO
- Open Graph and Twitter Card integration
- Responsive design with Tailwind + Framer Motion animations
- Multi-language support

## 💡 Available Scripts

```bash
yarn dev           # start development server
yarn build         # production build
yarn start         # start in production
yarn lint          # run ESLint with strict rules
yarn lint:fix      # auto-fix lint issues
yarn lint:report   # generate HTML lint report
yarn format        # apply Prettier formatting
yarn format:check  # check formatting without changing files
yarn fix           # lint fix + format code
```

## ✅ Best Practices Applied

- Strong typing with TypeScript
- `PropsWithChildren` and `React.FC` avoid `any`
- Consistent use of `import type { ... }` to reduce runtime overhead
- Automatic import ordering (`eslint-plugin-import`)
- Accessibility with `eslint-plugin-jsx-a11y`
- Modern rules for `react-hooks`, `tailwindcss`, `prettier`, and more

---

Developed by [fworks.tech](https://fworks.tech) ✨