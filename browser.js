module.exports = {
  extends: [ './.base.js' ],
  env: {
    node: false,
    browser: true
  },
  rules: {
    'no-console': [ 'warn', { allow: [ 'debug', 'info', 'warn', 'error', 'trace' ] } ]
  }
};
