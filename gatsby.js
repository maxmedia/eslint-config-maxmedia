module.exports = {
  extends: [
    './react.js'
  ],
  overrides: [
    {
      files: [ 'gatsby-*.js', 'src/api/*' ],
      extends: [ './base.js' ]
    }
  ]
};
