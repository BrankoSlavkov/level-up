/* eslint-disable no-undef */
'use strict';

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    quotes: ['error', 'single'],
    semi: 2,
    'no-shadow': 1,
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': WARNING,
    'react/react-in-jsx-scope': OFF,
    'react/boolean-prop-naming': [
      'error',
      {
        rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
        validateNested: true,
        propTypeNames: ['bool'],
      },
    ],
    'react/prop-types': OFF,
    'react/no-multi-comp': ERROR,
    'react/button-has-type': ['error'],
    'react/no-typos': ['error'],
    'react/no-unused-prop-types': ['error'],
    'react/no-unused-state': ['error'],
    'react/prefer-read-only-props': ['error'],
    'react/self-closing-comp': ['error'],
    'react/jsx-boolean-value': ERROR,
    'react/jsx-filename-extension': [WARNING, { extensions: ['.tsx'] }],
    'react/jsx-key': ERROR,
    'react/jsx-no-duplicate-props': ERROR,
    'react/jsx-no-useless-fragment': ERROR,
    'react/jsx-pascal-case': ERROR,
    'react/jsx-tag-spacing': ERROR,
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never' },
    ],
    'react/jsx-equals-spacing': [2, 'never'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
