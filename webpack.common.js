const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
  entry: './src/js/index.jsx',
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
			{
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react']
        }
      }
		]
  },
	plugins: [
		new HtmlWebpackPlugin({
      template: './src/index.html',
			inlineSource: 'js$'
		}),
		new HtmlWebpackInlineSourcePlugin()
	],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
};
