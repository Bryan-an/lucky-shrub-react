import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettierPlugin from 'eslint-plugin-prettier'

export default tseslint.config(
  { ignores: ['dist', 'node_modules', '.git', '.husky', 'eslint.config.js'] },
  // JavaScript config (applies to all JS/TS files)
  {
    extends: [js.configs.recommended],
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.browser,
        ...globals.node,
        React: 'readonly',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'prettier': prettierPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'warn',
    },
  },
  // TypeScript-specific config
  {
    extends: [...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'], // Only apply to TypeScript files
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.app.json', './tsconfig.node.json'],
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',
    },
  },
)
