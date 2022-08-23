const { environment } = require('@rails/webpacker')

// jQueryとBootstapのJSを使えるようにする
const webpack = require('webpack')
environment.plugins.prepend(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    Popper: 'popper.js'
  })
)
// ここまで

module.exports = environment
