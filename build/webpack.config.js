const webpack = require('webpack');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

const sourcePath = path.resolve(__dirname, 'src');

const replacementPlugin = devMode
  ? new webpack.NormalModuleReplacementPlugin(
    /\/environments\/environment\.ts/, `${sourcePath}/environments/environment.ts`,
  ) : new webpack.NormalModuleReplacementPlugin(
    /\/environments\/environment\.ts/, `${sourcePath}/environments/environment.prod.ts`,
  );

const config = {
  resolve: {
    alias: {
      src: path.resolve(__dirname, '..', 'src'),
    },
    extensions: ['.js', '.sass', '.ts'],
  },
  mode: devMode ? 'development' : 'production',

  entry: {
    'vendor': './src/vendor.ts',
    'app': './src/app.ts',
  },
  devtool: devMode
    ? 'source-map'
    : false,
  output: {
    filename: '[name]-bundle.js?[chunkhash]',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.(s([ac])ss)$/,
        use: [
          {loader: MiniCssExtractPlugin.loader},
          {loader: 'css-loader'},
          {loader: 'sass-loader'},
        ],
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
            name: '[name].[ext]',
          },
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
          },
        }],
      },
      {
        test: /\.pug/,
        use: [{
          loader: 'html-loader',
          options: {
            esModule: false,
          },
        }, 'pug-html-loader'],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          esModule: false,
        },
      },
    ],
  },
  optimization: {
    minimize: !devMode,
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    replacementPlugin,
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[fullhash].css',
      chunkFilename: '[id].[fullhash].css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '..', 'src', 'assets'),
          to: "assets"
        },
      ],
    }),
  ],
  devServer: {
    port: 3000,
    contentBase: './src/',
    historyApiFallback: true,
  },
};

module.exports = config;
