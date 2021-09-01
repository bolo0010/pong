const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: {
		main: './src/js/index.js',
	},
	output: {
		filename: '[name]-[contenthash].js',
		path: path.join(__dirname, '../', 'dist'),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html',
			filename: '[name]-[contenthash].html',
		}),
		new MiniCssExtractPlugin({
			filename: '[name]-[contenthash].css',
		}),
		new CleanWebpackPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
};
