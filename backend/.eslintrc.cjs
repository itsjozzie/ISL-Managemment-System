module.exports = {
    root: true,
    env: {
      node: true,
      es2020: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:import/recommended',
    ],
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.mjs'],
        },
      },
    },
    rules: {
      'no-console': 'warn',
      'import/no-unresolved': 'error',
      'no-unused-vars': 'warn',
      'no-undef': 'error', 
    },
    ignorePatterns: ['node_modules', 'dist'], 
  };
  