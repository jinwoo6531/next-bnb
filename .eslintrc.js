module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    quotes: ['react', '@typescript-eslint'],
    '@typescript-eslint/quotes': ['error', 'double'], //더블 쿼터 사용
    'no-unused-vars': 'off', //사용 안한 변수 경고 중복
    '@typescript-eslint/no-unused-vars': 'warn', //사용 안한 변수는 경고
    'jsx-a11y/control-has-associated-label': 'off', //상호 작용하는 엘리먼트에 label을 넣는다.
    'react/no-array-index-key': 'off', //key값으로 index를 사용할 수 있다.
    'comma-dangle': 'off', //마지막에 ,를 넣지 않는다.
    'arrow-body-style': 'off', //화살표 함수 안에 return을 사용할 수 있다.
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'object-curly-newline': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-shadow': 'off',
    'operator-linebreak': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'global-require': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
};
