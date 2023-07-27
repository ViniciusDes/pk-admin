module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'object-curly-newline': 'off',
    'arrow-body-style': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 'off',
    'linebreak-style': 0,
    'implicit-arrow-linebreak': 'off',
    'object-curly-spacing': 'off',
    'operator-linebreak': 'off',
    'no-confusing-arrow': 'off',
    'indent': 'off',
    'quote-props': 'off',
    'no-restricted-syntax': 'off',
    'react/require-default-props': 'off',
    'radix': 'off',
    'no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: ['_', '@'],
      },
    ],
    'class-methods-use-this': 'off',
    'no-promise-executor-return': 'off',
    'no-param-reassign': 'off',
    'function-paren-newline': 'off',
    'no-plusplus': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
