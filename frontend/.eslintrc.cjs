odule.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-unused-vars': 'error',
    'no-console': 'warn',
    'quotes': ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-double'],
    'indent': ['warn', 2],
    'max-len': ['error', {'code': 120}],
    'comma-dangle': ['error', 'always-multiline'],
    'semi': ['warn', 'always'],
    "prettier/prettier": "error"

  },
}