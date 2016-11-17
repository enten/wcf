const confactory = require('confactory')

function createWebpackConfigFactory (f) {
  return (f || confactory())
    // standards environments
    .$target('dev', {prod: false})
    .$target('prod', {prod: true})
    // standards webpack targets
    .$target('web', {target: 'web'})
    .$target('webworker', {target: 'webworker'})
    .$target('node', {target: 'node'})
    .$target('async-node', {target: 'async-node'})
    .$target('node-webkit', {target: 'node-webkit'})
    .$target('electron', {target: 'electron'})
    // standards helpers
    .$helper('context')
    .$helper('entry')
    .$helper('entry.index', true)
    .$helper('output')
    .$helper('output.filename')
    .$helper('output.path')
    .$helper('output.publicPath')
    .$helper('output.chunkFilename')
    .$helper('output.sourceMapFilename')
    .$helper('output.devtoolModuleFilenameTemplate')
    .$helper('output.devtoolFallbackModuleFilenameTemplate')
    .$helper('output.devtoolLineToLine')
    .$helper('output.hotUpdateChunkFilename')
    .$helper('output.hotUpdateMainFilename')
    .$helper('output.jsonpFunction')
    .$helper('output.hotUpdateFunction')
    .$helper('output.pathinfo')
    .$helper('output.library')
    .$helper('output.libraryTarget')
    .$helper('output.umdNamedDefine')
    .$helper('output.sourcePrefix')
    .$helper('output.crossOriginLoading')
    .$helper('module')
    .$helper('module.loaders', true)
    .$helper('module.preLoaders', true)
    .$helper('module.postLoaders', true)
    .$helper('module.rules', true)
    .$helper('resolve')
    .$helper('resolve.alias')
    .$helper('resolve.root', true)
    .$helper('resolve.modulesDirectories', true)
    .$helper('resolve.modules', true)
    .$helper('resolve.fallback', true)
    .$helper('resolve.extensions', true)
    .$helper('resolve.packageMains', true)
    .$helper('resolve.packageAlias')
    .$helper('resolve.unsafeCache', true)
    .$helper('resolveLoader')
    .$helper('resolveLoader.alias')
    .$helper('resolveLoader.root', true)
    .$helper('resolveLoader.modulesDirectories', true)
    .$helper('resolveLoader.modules', true)
    .$helper('resolveLoader.fallback', true)
    .$helper('resolveLoader.extensions', true)
    .$helper('resolveLoader.packageMains', true)
    .$helper('resolveLoader.packageAlias')
    .$helper('resolveLoader.unsafeCache', true)
    .$helper('resolveLoader.moduleTemplates', true)
    .$helper('externals', true)
    .$helper('target')
    .$helper('bail')
    .$helper('profile')
    .$helper('cache')
    .$helper('watch')
    .$helper('watchOptions')
    .$helper('watchOptions.aggregateTimeout')
    .$helper('watchOptions.poll')
    .$helper('debug')
    .$helper('devtool')
    .$helper('devServer')
    // `_node` key is an alias to `webpackConfig.node`
    // cause `node` key is used as a subfactory for `node` target
    .$helper('node', '_node')
    .$helper('amd')
    .$helper('loader')
    .$helper('recordsPath')
    .$helper('recordsInputPath')
    .$helper('recordsOutputPath')
    .$helper('plugins', true)
    // hook which populates the build target name
    .$setWith('target', (config, context, {target}) => target)
}

exports = module.exports = createWebpackConfigFactory()
exports.create = createWebpackConfigFactory
