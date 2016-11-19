const confactory = require('confactory')

const WEBPACK_STANDARDS_TARGETS = [
  'web',
  'webworker',
  'node',
  'async-node',
  'node-webkit',
  'electron'
]

function createWebpackConfigFactory (...extensions) {
  const f = confactory()

  // standards environments
  f.$target('dev', {prod: false})
  f.$target('prod', {prod: true})

  // standards webpack targets
  WEBPACK_STANDARDS_TARGETS
    .forEach((target) => f.$target(target, {target}))

  // standards helpers
  f.$helper('context')
  f.$helper('entry')
  f.$helper('entry.index', true)
  f.$helper('output')
  f.$helper('output.filename')
  f.$helper('output.path')
  f.$helper('output.publicPath')
  f.$helper('output.chunkFilename')
  f.$helper('output.sourceMapFilename')
  f.$helper('output.devtoolModuleFilenameTemplate')
  f.$helper('output.devtoolFallbackModuleFilenameTemplate')
  f.$helper('output.devtoolLineToLine')
  f.$helper('output.hotUpdateChunkFilename')
  f.$helper('output.hotUpdateMainFilename')
  f.$helper('output.jsonpFunction')
  f.$helper('output.hotUpdateFunction')
  f.$helper('output.pathinfo')
  f.$helper('output.library')
  f.$helper('output.libraryTarget')
  f.$helper('output.umdNamedDefine')
  f.$helper('output.sourcePrefix')
  f.$helper('output.crossOriginLoading')
  f.$helper('module')
  f.$helper('module.loaders', true)
  f.$helper('module.preLoaders', true)
  f.$helper('module.postLoaders', true)
  f.$helper('module.rules', true)
  f.$helper('resolve')
  f.$helper('resolve.alias')
  f.$helper('resolve.root', true)
  f.$helper('resolve.modulesDirectories', true)
  f.$helper('resolve.modules', true)
  f.$helper('resolve.fallback', true)
  f.$helper('resolve.extensions', true)
  f.$helper('resolve.packageMains', true)
  f.$helper('resolve.packageAlias')
  f.$helper('resolve.unsafeCache', true)
  f.$helper('resolveLoader')
  f.$helper('resolveLoader.alias')
  f.$helper('resolveLoader.root', true)
  f.$helper('resolveLoader.modulesDirectories', true)
  f.$helper('resolveLoader.modules', true)
  f.$helper('resolveLoader.fallback', true)
  f.$helper('resolveLoader.extensions', true)
  f.$helper('resolveLoader.packageMains', true)
  f.$helper('resolveLoader.packageAlias')
  f.$helper('resolveLoader.unsafeCache', true)
  f.$helper('resolveLoader.moduleTemplates', true)
  f.$helper('externals', true)
  f.$helper('target')
  f.$helper('bail')
  f.$helper('profile')
  f.$helper('cache')
  f.$helper('watch')
  f.$helper('watchOptions')
  f.$helper('watchOptions.aggregateTimeout')
  f.$helper('watchOptions.poll')
  f.$helper('debug')
  f.$helper('devtool')
  f.$helper('devServer')
  // `_node` key is an alias to `webpackConfig.node`
  // cause `node` key is used as a subfactory for `node` target
  f.$helper('node', '_node')
  f.$helper('amd')
  f.$helper('loader')
  f.$helper('recordsPath')
  f.$helper('recordsInputPath')
  f.$helper('recordsOutputPath')
  f.$helper('plugins', true)

  // hook which populates the build target for standard target names only
  f.$hook((config, context, {target}) => {
    if (config && !config.target && ~WEBPACK_STANDARDS_TARGETS.indexOf(target)) {
      config.target = target
    }
  })

  // combine extensions
  extensions.forEach((factory) => f.$combine(factory))

  return f
}

exports = module.exports = createWebpackConfigFactory()
exports.create = createWebpackConfigFactory
