// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
// extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
//   rules: {
//     'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
//     'prettier/prettier': [
//       'error',
//       {
//         singleQuote: true,
//       },
//     ],
//     'react/function-component-definition': [
//       'error',
//       {
//         namedComponents: ['function-declaration', 'arrow-function'],
//         unnamedComponents: 'arrow-function',
//       },
//     ],
//     'import/no-extraneous-dependencies': [
//       'error',
//       {
//         devDependencies: ['**/*.js', '**/*.jsx'],
//       },
//     ],
//   },
//   globals: {
//     PUBLIC_URL: true,
//   },
// };
module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    // 'eslint:recommended',
    // 'plugin:react/recommended',
    // 'plugin:react/jsx-runtime',
    // 'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['function-declaration', 'arrow-function'],
        unnamedComponents: 'arrow-function',
      },
    ],
  },
};
