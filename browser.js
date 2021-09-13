module.exports = {
  extends: [ './base.js' ],
  env: {
    node: false,
    browser: true
  },
  overrides: [
    {
      files: [ '.eslintrc*.js', 'script/*' ],
      extends: [ './base.js' ]
    }
  ],
  rules: {
    'no-console': [ 'warn', { allow: [ 'debug', 'info', 'warn', 'error', 'trace' ] } ]
  }
};
