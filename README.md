# MaxMedia's ESLint Configuration

1. Generate a GitHub Personal Access Token with an expiration date of 1 year and `read:package`
   permissions: https://github.com/settings/tokens
2. Login to npm.  Use your GitHub username, the Personal Access Token as the password, and your
   MaxMedia email address:
```sh
npm login --registry=https://npm.pkg.github.com --scope=@maxmedia
```
3. Install to your package:
```sh
npm install @maxmedia/eslint-config-maxmedia --save-dev
```

## ESLint Configurations

`.eslintrc`:
```json
{ "extends": "@maxmedia/eslint-config-maxmedia" }
```

1. Default: `@maxmedia/eslint-config-maxmedia`
2. Browser: `@maxmedia/eslint-config-maxmedia/browser`
3. React: `@maxmedia/eslint-config-maxmedia/react`
4. Gatsby: `@maxmedia/eslint-config-maxmedia/gatsby`
