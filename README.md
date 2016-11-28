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
const prod = nodeEnv === 'production'

const f = wcf()
  .devtool('source-map')
  .prod.web.devtool('hidden-source-map')
  .web.pluginsWith(() => new Webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(nodeEnv)
  }))
  .node.pluginsWith(({secret}) => new Webpack.DefinePlugin(
    Object.keys(process.env)
      .map((key) => [key, process.env[key]])
      .concat([['NODE_ENV', nodeEnv]])
      .concat([['SECRET', secret]])
      .map(([key, val]) => [key, JSON.stringify(val)])
      .reduce((acc, [key, val]) => Object.assign(acc, {[`process.env.${key}`]: val}), {})
  ))

const webpackConfig = f.$build({secret: 'supersecret'}, {prod, target})

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
//         { ...
//           process.env.NODE_ENV: '"development"',
//           process.env.SECRET: '"supersecret"' } } ] }
```

## License

MIT
