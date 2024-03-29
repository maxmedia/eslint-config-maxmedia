module.exports = {
  plugins: [ 'react', 'react-hooks', 'jsx-a11y' ],
  extends: [
    './browser.js',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    },
    linkComponents: [
      'Hyperlink', { name: 'Link', linkAttribute: 'to' }
    ]
  },
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-filename-extension': [ 'error', { extensions: [ '.js' ] } ],
    'react/prop-types': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/display-name': 'off',
    'react/jsx-curly-newline': [ 'error', { multiline: 'require', singleline: 'forbid' } ],
    "react/jsx-handler-names": [ 'warn', {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on',
      checkLocalVariables: true,
      checkInlineFunction: true
    } ],
    'react/jsx-indent': [ 'warn', 2, { checkAttributes: true, indentLogicalExpressions: true } ],
    'react/jsx-indent-props': [ 'warn', 2 ],
    'react/jsx-max-depth': [ 'error', { max: 6 } ]
  },
  overrides: [
    {
      files: [ 'api/*' ],
      extends: [ './base.js' ]
    }
  ]
};
