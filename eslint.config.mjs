import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import nx from '@nx/eslint-plugin';
import globals from 'globals';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import nextPlugin from '@next/eslint-plugin-next';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    ignores: [
      '**/node_modules',
      '**/next',
      '**/.next',
      '**/next-env.d.ts',
      '**/**.config.js',
      '**/**.config.mjs',
      '**/**.spec.ts',
      '**/**.spec.tsx',
    ],
  },
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: ['tsconfig.*?.json'],
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        globalThis: 'readonly',
        NodeJS: 'readonly',
      },
    },
    plugins: {
      '@nx': nx,
      react: reactPlugin,
      prettier: prettierPlugin,
      '@typescript-eslint': tsPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
      '@next/next': nextPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...prettierPlugin.configs.recommended.rules,
      '@next/next/no-html-link-for-pages': 'off',
      'react-hooks/exhaustive-deps': 'error',
      'no-redeclare': 'off',
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allowCircularSelfDependency: true,
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
