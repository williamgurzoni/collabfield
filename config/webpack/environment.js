const { environment } = require('@rails/webpacker')

// begin For bootstrap
const webpack = require("webpack")
environment.plugins.append("Provide", new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  Popper: ['popper.js', 'default']
}))
// end For bootstrap

module.exports = environment
