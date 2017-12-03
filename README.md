# @kamataryo/eslint-config-standard

[![npm (scoped)](https://img.shields.io/npm/v/@kamataryo/eslint-config-standard.svg)](https://www.npmjs.com/package/@kamataryo/eslint-config-standard)
[![downloads](https://img.shields.io/npm/dt/@kamataryo/eslint-config-standard.svg?style=flat)](https://david-dm.org/@kamataryo/eslint-config-standard#info=devDependencies)

[![Dependency Status](https://img.shields.io/david/kamataryo/eslint-config-standard.svg?style=flat)](https://david-dm.org/@kamataryo/eslint-config-standard)
[![devDependency Status](https://img.shields.io/david/dev/kamataryo/eslint-config-standard.svg?style=flat)](https://david-dm.org/kamataryo/eslint-config-standard#info=devDependencies)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


My ESLint configuration for Node.js project.

## stacks

- ESNext syntax with babel
- Testing with mocha and chai
- `NODE_PATH` to `/src`

## install

```shell
$ npm install @kamataryo/eslint-config-standard --save-dev
```

## usage

```javascript
// .eslintrc.js
module.exports = {
  extends: ['@kamataryo/eslint-config-standard']
}
```

## deployment (for commiters)

```shell
$ npm version patch -m "some patch"
$ npm version minor -m "some minor update"
$ npm version major -m "some major update"
```
