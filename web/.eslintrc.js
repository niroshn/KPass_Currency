module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier', 'react', 'import'],
  rules: {
    'no-bitwise': ['error', { allow: ['~'] }],
    'react/jsx-filename-extension': 0,
    'react/require-default-props': 0,
    'react/forbid-prop-types': 0,
    'react/prop-types': 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 120
      }
    ]
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true
    }
  }
};
