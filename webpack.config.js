var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  devtool: debug ? 'inline-sourcemap' : null,
  entry: './index.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules(?!\/react-redux-firebase)/,
        loader: 'babel-loader',
        // query: {
        //   presets: ['react', 'es2015', 'stage-0'],
        //   plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        // }
        query: {
          "presets": ["react-hmre"],
          "plugins": [
           ["react-transform", {
             "transforms": [{
               "transform": "react-transform-hmr",
               "imports": ["react"],
               "locals": ["module"]
             }]
           }]
          ]
        }
      },
      {
        test: /\.scss$/,
        exclude: "/node_modules/",
        loaders: ["style", "css?sourceMap", "sass?sourceMap"]
      },
      { test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=.]+)?$/, loader: 'url-loader?limit=100000' }
    ]
  },
  output: {
    path: __dirname + '/src/',
    filename: 'bundle.js'
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
  ],
};
