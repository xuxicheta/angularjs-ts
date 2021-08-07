const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const devMode = process.env.NODE_ENV !== 'production'

const config = {
	mode: devMode ? 'development' : 'production',
	entry: {
		'vendor': './src/vendor.module.js',
		'app': './src/app.module.js'
	},
	devtool: devMode ? 'source-map': false,
	output: {
		filename: 'libs/[name].bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [path.resolve(__dirname, 'src')],
				use: [ { loader: 'babel-loader'} ]
			},
			{

				test: /\.(scss)$/,
				use: [
					devMode ? { loader: "style-loader" } : MiniCssExtractPlugin.loader,
					{ loader: "css-loader" },
					{ loader: "sass-loader" }
				]
			},
			// for fixing of loading bootstrap icon files
			{
				test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/i,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 10000,
						outputPath: 'fonts/',
                        publicPath: '../fonts/',
						esModule: false,
					}
				}],
			},
			{
				test: /\.(eot|ttf)$/,
				use: [{
					loader: 'file-loader',
					options: {
						outputPath: 'fonts/',
                        publicPath: '../fonts/',
						esModule: false,
					}
				}],
			},
			{ test: /\.html$/, loader: 'html-loader' }
		]
	},
	optimization: {
		minimize: !devMode,
		minimizer: [
			new TerserPlugin(),
			new CssMinimizerPlugin()
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPugPlugin({
			filename: 'index.pug',
			minify: false
		}),
		new HtmlWebpackPlugin({ template: './src/index.pug' }),

		new webpack.ProvidePlugin({
			jQuery: 'jquery',
			$: 'jquery',
			jquery: 'jquery'
		}),
		new MiniCssExtractPlugin({
			filename: "[name].[fullhash].css",
			chunkFilename: "[id].[fullhash].css"
		})
	],
	devServer: {
		port: 3000,
		contentBase: './src/',
		historyApiFallback: true
	},
};

module.exports = config;
