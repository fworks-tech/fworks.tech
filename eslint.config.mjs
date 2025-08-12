import path from 'path';

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

const isProd = process.env.NODE_ENV === 'production';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname
});

const config = [
  js.configs.recommended,
  ...compat.config({
    extends: [
      'next/core-web-vitals',
      'next/typescript',
      'plugin:prettier/recommended',
      'prettier',
      'plugin:@next/next/recommended',
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended'
    ]
  }),
  {
    rules: {
      'no-console': [isProd ? 'error' : 'warn', { allow: ['warn', 'error'] }],
      'no-debugger': isProd ? 'error' : 'off',
      'react/jsx-key': 'warn',
      'react/react-in-jsx-scope': 'off', // Next.js não precisa
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          pathGroups: [{ pattern: '@/**', group: 'internal' }],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: { order: 'asc', caseInsensitive: true },
          'newlines-between': 'always'
        }
      ]
    }
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: path.resolve()
      }
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/consistent-type-imports': ['error']
    }
  },
  {
    ignores: ['.next/**/*', 'node_modules/**/*', 'dist/**/*', 'build/**/*']
  }
];

export default config;
