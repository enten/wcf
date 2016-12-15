const confactory = require('confactory')

// Webpack targets
// https://goo.gl/UThwc8
const WEBPACK_TARGETS = [
  'web',
  'webworker',
  'node',
  'async-node',
  'node-webkit',
  'atom',
  'electron',
  'electron-main',
  'electron-renderer'
]

const f = confactory()

// Standards environments
f.$target('dev', {prod: false})
f.$target('prod', {prod: true})

// Standards webpack targets
WEBPACK_TARGETS
  .forEach((target) => f.$target(target, {target}))

// Custom webpack targets
f.$target('server', {target: 'node', server: true})

// Entry and Context helpers
// https://webpack.js.org/configuration/entry-context/
f.$helper('context')
f.$helper('entry')
f.$helper('entry.index', true)

// Output helpers
// https://webpack.js.org/configuration/output/
f.$helper('output')
f.$helper('output.auxiliaryComment')
f.$helper('output.chunkFilename')
f.$helper('output.crossOriginLoading')
f.$helper('output.devtoolFallbackModuleFilenameTemplate')
f.$helper('output.devtoolLineToLine')
f.$helper('output.devtoolModuleFilenameTemplate')
f.$helper('output.filename')
f.$helper('output.hashDigest')
f.$helper('output.hashDigestLength')
f.$helper('output.hashFunction')
f.$helper('output.hotUpdateChunkFilename')
f.$helper('output.hotUpdateFunction')
f.$helper('output.hotUpdateMainFilename')
f.$helper('output.jsonpFunction')
f.$helper('output.library')
f.$helper('output.libraryTarget')
f.$helper('output.path')
f.$helper('output.pathinfo')
f.$helper('output.publicPath')
f.$helper('output.sourceMapFilename')
f.$helper('output.sourcePrefix')
f.$helper('output.strictModuleExceptionHandling')
f.$helper('output.umdNamedDefine')

// Module helpers
// https://webpack.js.org/configuration/module/
f.$helper('module')
f.$helper('module.loaders', true)
f.$helper('module.noParse', true)
f.$helper('module.postLoaders', true)
f.$helper('module.preLoaders', true)
f.$helper('module.rules', true)
f.$helper('module.unsafeCache')
// Module v1 helpers
// http://webpack.github.io/docs/configuration.html#module
f.$helper('module.exprContextCritical')
f.$helper('module.exprContextRecursive')
f.$helper('module.exprContextRegExp')
f.$helper('module.exprContextRequest')
f.$helper('module.unknownContextCritical')
f.$helper('module.unknownContextRecursive')
f.$helper('module.unknownContextRegExp')
f.$helper('module.unknownContextRequest')
f.$helper('module.wrappedContextCritical')
f.$helper('module.wrappedContextRecursive')
f.$helper('module.wrappedContextRegExp')

// Resolve helpers
// https://webpack.js.org/configuration/resolve/
f.$helper('resolve')
f.$helper('resolve.alias')
f.$helper('resolve.aliasFields', true)
f.$helper('resolve.cachePredicate')
f.$helper('resolve.descriptionFiles', true)
f.$helper('resolve.enforceExtension')
f.$helper('resolve.enforceModuleExtension')
f.$helper('resolve.extensions', true)
f.$helper('resolve.mainFields', true)
f.$helper('resolve.mainFiles', true)
f.$helper('resolve.moduleExtensions', true)
f.$helper('resolve.modules', true)
f.$helper('resolve.plugins', true)
f.$helper('resolve.resolveToContext')
f.$helper('resolve.symlinks')
f.$helper('resolve.unsafeCache')
f.$helper('resolve.useSyncFileSystemCalls')
f.$helper('resolveLoader')
f.$helper('resolveLoader.alias')
f.$helper('resolveLoader.aliasFields', true)
f.$helper('resolveLoader.cachePredicate')
f.$helper('resolveLoader.descriptionFiles', true)
f.$helper('resolveLoader.enforceExtension')
f.$helper('resolveLoader.enforceModuleExtension')
f.$helper('resolveLoader.extensions', true)
f.$helper('resolveLoader.mainFields', true)
f.$helper('resolveLoader.mainFiles', true)
f.$helper('resolveLoader.moduleExtensions', true)
f.$helper('resolveLoader.modules', true)
f.$helper('resolveLoader.resolveToContext')
f.$helper('resolveLoader.symlinks')
f.$helper('resolveLoader.unsafeCache', true)
f.$helper('resolveLoader.useSyncFileSystemCalls')
// Resolve v1 helpers
// http://webpack.github.io/docs/configuration.html#resolve
f.$helper('resolve.fallback', true)
f.$helper('resolve.modulesDirectories', true)
f.$helper('resolve.packageAlias')
f.$helper('resolve.packageMains', true)
f.$helper('resolve.root', true)
f.$helper('resolveLoader.fallback', true)
f.$helper('resolveLoader.modulesDirectories', true)
f.$helper('resolveLoader.moduleTemplates', true)
f.$helper('resolveLoader.packageAlias')
f.$helper('resolveLoader.packageMains', true)
f.$helper('resolveLoader.root', true)

// Performance helpers
// https://goo.gl/9U9CTg
f.$helper('performance')
f.$helper('performance.assetFilter')
f.$helper('performance.hints')
f.$helper('performance.maxEntrypointSize')
f.$helper('performance.maxAssetSize')

// Plugins helper
// https://webpack.js.org/configuration/plugins/
f.$helper('plugins', true)

// DevServer helpers
// https://webpack.js.org/configuration/dev-server/
f.$helper('devServer')
f.$helper('devServer.clientLogLevel')
f.$helper('devServer.compress')
f.$helper('devServer.contentBase', true)
f.$helper('devServer.filename')
f.$helper('devServer.headers')
f.$helper('devServer.historyApiFallback')
f.$helper('devServer.host')
f.$helper('devServer.hot')
f.$helper('devServer.https')
f.$helper('devServer.inline')
f.$helper('devServer.lazy')
f.$helper('devServer.noInfo')
f.$helper('devServer.port')
f.$helper('devServer.proxy')
f.$helper('devServer.public')
f.$helper('devServer.publicPath')
f.$helper('devServer.quiet')
f.$helper('devServer.staticOptions')
f.$helper('devServer.stats')
f.$helper('devServer.watchContentBase')
f.$helper('devServer.watchOptions')
f.$helper('devServer.watchOptions.aggregateTimeout')
f.$helper('devServer.watchOptions.ignored')
f.$helper('devServer.watchOptions.poll')

// Devtool helper
// https://webpack.js.org/configuration/devtool/
f.$helper('devtool')

// Target helper
// https://webpack.js.org/configuration/target/
f.$helper('target')

// Watch and WatchOptions helpers
// https://webpack.js.org/configuration/watch/
f.$helper('watch')
f.$helper('watchOptions')
f.$helper('watchOptions.aggregateTimeout')
f.$helper('watchOptions.ignored')
f.$helper('watchOptions.poll')

// Externals helper
// https://webpack.js.org/configuration/externals/
f.$helper('externals', true)

// Node helpers
// https://webpack.js.org/configuration/node/
//
// Note:
// `_node` key is an alias to `webpackConfig.node`
// cause `node` key is used as a subfactory for `node` target
f.$helper('node', '_node')
f.$helper('node.console', '_node.console')
f.$helper('node.global', '_node.global')
f.$helper('node.process', '_node.process')
f.$helper('node.Buffer', '_node.Buffer')
f.$helper('node.__filename', '_node.__filename')
f.$helper('node.__dirname', '_node.__dirname')
f.$helper('node.setImmediate', '_node.setImmediate')

// Stats helpers
// https://webpack.js.org/configuration/stats/
f.$helper('stats')
f.$helper('stats.assets')
f.$helper('stats.assetsSort')
f.$helper('stats.cached')
f.$helper('stats.children')
f.$helper('stats.chunks')
f.$helper('stats.chunkModules')
f.$helper('stats.chunkOrigins')
f.$helper('stats.chunksSort')
f.$helper('stats.context')
f.$helper('stats.errors')
f.$helper('stats.errorDetails')
f.$helper('stats.hash')
f.$helper('stats.modules')
f.$helper('stats.modulesSort')
f.$helper('stats.publicPath')
f.$helper('stats.reasons')
f.$helper('stats.source')
f.$helper('stats.timings')
f.$helper('stats.version')
f.$helper('stats.warnings')

// Other Options helpers
// https://webpack.js.org/configuration/other-options/
f.$helper('amd')
f.$helper('bail')
f.$helper('cache')
f.$helper('debug')
f.$helper('loader')
f.$helper('profile')
f.$helper('recordsPath')
f.$helper('recordsInputPath')
f.$helper('recordsOutputPath')

// Hook which populates the build target for standard target names only
f.$hook((context, {target}, config) => {
  if (config && !config.target && ~WEBPACK_TARGETS.indexOf(target)) {
    config.target = target
  }
})

function wcf () {
  return f.$clone.apply(arguments)
}

module.exports = wcf
