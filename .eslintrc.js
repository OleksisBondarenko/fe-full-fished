module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'jsx-a11y', 'react', 'react-hooks'],
  extends: [
    'airbnb-typescript',
    'prettier', // Add 'prettier' to extends
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    // Add or override specific rules here
  },
};