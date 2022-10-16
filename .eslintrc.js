module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': ['eslint:recommended', 'plugin:react/recommended'],
  'overrides': [
    {
      'files': ['*.ts', '*.tsx'],
      'rules': {
        'no-undef': 'off'
      }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'project': './tsconfig.json',
  },
  'plugins': ['react'],
  'rules': {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'no-unused-vars': 'off',
  },
  'settings': {
    'react': {
      'version': 'detect'
    }
  }
}
