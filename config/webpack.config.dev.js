const webpack = require("webpack");
const merge = require("webpack-merge");
const webpackConfig = require("./webpack.config.base");

module.exports = merge(webpackConfig, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  module: {
    rules: []
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    })
  ]
});
