module.exports = {
  extends: [ 'eslint:recommended' ],
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    node: true,
    es2020: true
  },
  ignorePatterns: [
    'log/*',
    'node_modules/*',
    'public/*',
    'static/*',
    'tmp/*'
  ],
  rules: {
    'array-bracket-spacing': [ 'warn', 'always' ],
    'block-spacing': [ 'warn', 'always' ],
    'brace-style': [ 'warn', '1tbs', { allowSingleLine: true } ],
    'comma-dangle': [ 'warn', 'never' ],
    'comma-spacing': [ 'warn', { before: false, after: true } ],
    'comma-style': [ 'warn', 'last' ],
    'curly': [ 'error', 'multi-line', 'consistent' ],
    'default-case': 'error',
    'dot-location': [ 'error', 'property' ],
    'eol-last': 'warn',
    'eqeqeq': [ 'warn', 'smart' ],
    'func-names': 'warn',
    'global-require': 'error',
    'handle-callback-err': 'error',
    'indent': [ 'warn', 2, {
      'SwitchCase': 1,
      'VariableDeclarator': { 'var': 2, 'let': 2, 'const': 3 }
    } ],
    'key-spacing': [ 'warn', { beforeColon: false, afterColon: true } ],
    'keyword-spacing': 'warn',
    'linebreak-style': [ 'error', 'unix' ],
    'lines-between-class-members': 'warn',
    'max-len': [ 'warn', 100, 4, {
      ignoreComments: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreTrailingComments: true,
      ignoreUrls: true
    } ],
    'no-catch-shadow': 'error',
    'no-console': 'off',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-else-return': 'warn',
    'no-empty': 'error',
    'no-eq-null': 'warn',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-semi': 'warn',
    'no-func-assign': 'warn',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'warn',
    'no-multiple-empty-lines': [ 'warn', { max: 1 } ],
    'no-redeclare': 'error',
    'no-regex-spaces': 'warn',
    'no-sequences': 'error',
    'no-shadow': [ 'error', {
      builtinGlobals: true,
      hoist: 'all',
      allow: [ 'context', 'err' ]
    } ],
    'no-spaced-func': 'error',
    'no-tabs': 'warn',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'warn',
    'no-undef': 'error',
    'no-unreachable': 'error',
    'no-unused-expressions': 'error',
    'no-unused-vars': 'warn',
    'no-use-before-define': 'error',
    'no-useless-concat': 'warn',
    'no-useless-constructor': 'warn',
    'object-curly-spacing': [ 'warn', 'always' ],
    'padded-blocks': [ 'warn', 'never' ],
    'padding-line-between-statements': [ 'warn',
      { blankLine: 'always', next: 'class', prev: '*' },
      { blankLine: 'always', next: 'for', prev: '*' },
      { blankLine: 'always', next: 'function', prev: '*' },
      { blankLine: 'always', next: 'if', prev: '*' },
      { blankLine: 'any', next: 'if', prev: [ 'function', 'if' ] },
      { blankLine: 'always', next: 'export', prev: 'block-like' },
      { blankLine: 'always', next: 'multiline-block-like', prev: '*' },
      { blankLine: 'always', next: 'return', prev: 'block-like' },
      { blankLine: 'any', next: '*', prev: 'singleline-let' }
    ],
    'semi-spacing': [ 'error', { before: false, after: true } ],
    'semi': 'warn',
    'space-before-blocks': [ 'error', 'always' ],
    'space-before-function-paren': [ 'warn', 'always' ],
    'use-isnan': 'error',
    'valid-jsdoc': [ 'warn', {
      requireReturn: false,
      requireParamDescription: false
    } ],
    'valid-typeof': 'error',
    'vars-on-top': 'error'
  }
};
