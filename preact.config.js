const { resolve }       = require('path')
const { writeFileSync } = require('fs')
const preactCliFlow     = require('preact-cli-plugin-flow');
const Dotenv            = require('dotenv-webpack')
require('dotenv').config()

const DEBUG_WEBPACK = process.env.DEBUG_WEBPACK === 'true' ? true : false

export default function (config, env, helpers) {
  if (DEBUG_WEBPACK) {
    console.info('fog-tools-preact-cli-app', 'dumping webpack config and env to disk')
    writeFileSync('__webpack_config', JSON.stringify(config, null, 2), 'utf8')
    writeFileSync('__webpack_env', JSON.stringify(env, null, 2), 'utf8')
  }

  if (process.env.DEV_PROXY_TO && config.devServer) {
    // https://webpack.js.org/configuration/dev-server/#devserver-proxy
    config.devServer.proxy = { '/api': process.env.DEV_PROXY_TO }
  }
  // expose process.env to client code in dev
  config.node.process = 'mock'

  // https://github.com/mrsteele/dotenv-webpack
  const dotenv = new Dotenv({
    // specify alternative path to env file
    path: './.env',

    // attempt to load .env.example
    safe: false,

    // load all the predefined 'process.env' variables which will trump
    // anything local per dotenv specs.
    systemvars: false,

    // hides errors
    silent: false
  })

  console.info('fog-tools-preact-cli-app', 'dumping .env file vars', dotenv.definitions)

  config.plugins.push(dotenv)

  // babel plugins section
  let { rule } = helpers.getLoadersByName(config, 'babel-loader')[0];
  let babelConfig = rule.options;

  babelConfig.plugins.push('babel-plugin-styled-components')

  // babelConfig.env = {
    // // ...some settings...
  // }

  preactCliFlow(config);

  return config
}
