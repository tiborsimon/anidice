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
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
			{
				test: /\.css$/,
				use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
			}
		]
  },
	plugins: [
		new HtmlWebpackPlugin({
      template: './src/index.html',
			inlineSource: '.(js|css)$'
		}),
		new HtmlWebpackInlineSourcePlugin()
	],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
