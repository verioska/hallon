module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'standard-with-typescript'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    project: './tsconfig.json'
  },
  plugins: ['react'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: { attributes: false } }
    ],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-empty-interface': 'off'
  }
}
