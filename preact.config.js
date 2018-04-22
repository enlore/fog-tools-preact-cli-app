const { resolve }       = require('path')
const { writeFileSync } = require('fs')
const preactCliFlow     = require('preact-cli-plugin-flow');

export default function (config, env, helpers) {
  writeFileSync('__webpack_config', JSON.stringify(config, null, 2), 'utf8')
  writeFileSync('__webpack_env', JSON.stringify(env, null, 2), 'utf8')

  // let sass = helpers.getLoadersByName(config, 'proxy-loader')[1]

  // sass.loader.options.options.includePaths = [
    // resolve(__dirname, 'node_modules'),
    // resolve(__dirname, 'src/style')
  // ]

  // writeFileSync('__webpack_sass_loader_config', JSON.stringify(sass, null, 2), 'utf8')

  preactCliFlow(config);
}
