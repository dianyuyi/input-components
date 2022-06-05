module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    "plugin:@typescript-eslint/eslint-recommended",
    'plugin:@typescript-eslint/recommended',
    'google',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-explicit-any': ['off'],
    'indent': [2, 'tab', {SwitchCase: 1, VariableDeclarator: 1}],
    'no-tabs': 0,
    'react/prop-types': 0,
    'react/jsx-indent': [2, 'tab'],
    'react/jsx-indent-props': [2, 'tab'],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"]
  },
};
