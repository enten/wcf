# wcf

> Webpack configuration factory

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Installation

```
npm install wcf --save
```

## Example usage

```js
const Webpack = require('webpack')
const wcf = require('wcf')

const target = process.argv[2] || 'web'
const nodeEnv = process.env.NODE_ENV || 'development'
const nodeEnvStr = JSON.stringify(nodeEnv)
const prod = nodeEnv === 'production'

wcf
  .devtool('source-map')
  .prod.web.devtool('hidden-source-map')
  .web.pluginsWith(() => new Webpack.DefinePlugin({
    'process.env.NODE_ENV': nodeEnvStr
  }))
  .node.pluginsWith(() => new Webpack.DefinePlugin(
    Object.keys(process.env)
      .map((key) => [key, JSON.stringify(process.env[key])])
      .concat([['NODE_ENV', nodeEnvStr]])
      .reduce((acc, [key, val]) => Object.assign(acc, {[key]: val}), {})
  ))

const webpackConfig = wcf.$build({prod, target})

console.dir(webpackConfig, {depth: null})

// $ node example.js web
// { target: 'web',
//   devtool: 'source-map',
//   plugins: [ DefinePlugin { definitions: { 'process.env.NODE_ENV': '"development"' } } ] }

// $ NODE_ENV=production node example.js web
// { target: 'web',
//   devtool: 'hidden-source-map',
//   plugins: [ DefinePlugin { definitions: { 'process.env.NODE_ENV': '"production"' } } ] }

// $ node example.js node
// { target: 'node',
//   devtool: 'source-map',
//   plugins:
//    [ DefinePlugin {
//        definitions:
//         { SHELL: '"/bin/bash"',
//           TERM: '"st-256color"',
//           ... } } ] }
```

## License

MIT
