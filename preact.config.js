const { resolve }       = require('path')
const { writeFileSync } = require('fs')
const preactCliFlow     = require('preact-cli-plugin-flow');
const Dotenv            = require('dotenv-webpack')
require('dotenv').config()

const DEBUG_WEBPACK = process.env.DEBUG_WEBPACK === "true" ? true : false

export default function (config, env, helpers) {
  if (DEBUG_WEBPACK) {
    console.info('fog-tools-preact-cli-app', 'dumping webpack config and env to disk')
    writeFileSync('__webpack_config', JSON.stringify(config, null, 2), 'utf8')
    writeFileSync('__webpack_env', JSON.stringify(env, null, 2), 'utf8')
  }

  // let sass = helpers.getLoadersByName(config, 'proxy-loader')[1]

  // sass.loader.options.options.includePaths = [
    // resolve(__dirname, 'node_modules'),
    // resolve(__dirname, 'src/style')
  // ]

  // writeFileSync('__webpack_sass_loader_config', JSON.stringify(sass, null, 2), 'utf8')

  // expose process.env to client code in dev
  config.node.process = 'mock'

  // https://github.com/mrsteele/dotenv-webpack
  const dotenv = new Dotenv({
    path: './.env',           // load this now instead of the ones in '.env'
    safe: false,              // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
    systemvars: false,        // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
    silent: false             // hide any errors
  })

  console.info('fog-tools-preact-cli-app', 'dumping .env file vars', dotenv.definitions)

  config.plugins.push(dotenv)

  preactCliFlow(config);

  return config
}
