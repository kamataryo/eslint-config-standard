module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    mocha: true,
    node: true
  },
  globals: {
    __NODE_ENV__: false
  },
  plugins: ['babel', 'import', 'chai-expected', 'mocha'],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:eslint-comments/recommended'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    'quote-props': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline'
      }
    ],
    eqeqeq: ['error', 'always'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'jsx-quotes': ['error', 'prefer-double'],
    'valid-jsdoc': ['off'],
    'key-spacing': ['off'],
    'keyword-spacing': ['error'],
    'linebreak-style': ['error', 'unix'],
    'no-dupe-args': ['error'],
    'no-console': ['warn'],
    'no-const-assign': ['error'],
    'no-irregular-whitespace': [
      'error',
      {
        skipStrings: true,
        skipComments: true,
        skipRegExps: true,
        skipTemplates: true
      }
    ],
    'no-unused-vars': ['error'],
    'no-undefined': ['error'],
    'no-var': ['error'],
    'no-multiple-empty-lines': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'require-jsdoc': [
      'off',
      {
        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          FunctionDeclaration: true,
          MethodDefinition: true
        }
      }
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: ['-', '+']
        },
        block: {
          markers: ['!'],
          exceptions: ['*'],
          balanced: true
        }
      }
    ],
    'space-before-blocks': [
      'error',
      { functions: 'always', keywords: 'always', classes: 'always' }
    ],
    'space-unary-ops': ['error'],
    'space-infix-ops': ['error', { int32Hint: false }],
    'sort-imports': ['off'],
    'babel/new-cap': ['off'],
    'babel/object-curly-spacing': ['error', 'always'],
    'babel/no-invalid-this': ['off'],
    'babel/semi': ['error', 'never'],
    'chai-expect/no-inner-compare': ['error'],
    'chai-expect/missing-assertion': ['error'],
    'chai-expect/terminating-properties': ['error'],
    'mocha/no-exclusive-tests': ['error'],
    'mocha/no-skipped-tests': ['warn'],
    'mocha/no-pending-tests': ['warn'],
    'mocha/handle-done-callback': ['error'],
    'mocha/no-global-tests': ['error'],
    'mocha/no-return-and-callback': ['error'],
    'mocha/no-sibling-hooks': ['error'],
    'mocha/no-hooks-for-single-case': ['warn'],
    'mocha/no-top-level-hooks': ['error'],
    'mocha/no-identical-title': ['error'],
    'mocha/no-nested-tests': ['error']
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src', 'test'],
        extensions: ['.js', '.jsx', '.scss']
      }
    }
  }
}