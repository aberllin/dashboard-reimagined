import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    languageOptions: {
      globals: { ...globals.browser, process: 'readonly' },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'no-console': ['error'],
      semi: ['error', 'always'],
      'prefer-const': [
        'error',
        {
          destructuring: 'all',
        },
      ],

      'react/display-name': 'off',
      'react/self-closing-comp': [
        'error',
        {
          component: true,
          html: true,
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'off',
      'no-undef': 'error',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/prefer-includes': 1,
      '@typescript-eslint/prefer-string-starts-ends-with': 1,
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/no-floating-promises': 2,
      '@typescript-eslint/camelcase': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/ban-ts-ignore': 'off',
      '@typescript-eslint/class-name-casing': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-any': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          ignoreRestSiblings: false,
        },
      ],
      '@typescript-eslint/array-type': ['error', { default: 'generic' }],
      'arrow-body-style': ['error', 'as-needed'],
      'react/prop-types': 'off',
    },
  },
];
