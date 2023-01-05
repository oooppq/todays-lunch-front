const path = require('path');
const webpack = require('webpack');
const childProcess = require('child_process');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

const isDev = (process.env.NODE_ENV || 'development') === 'development';

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve('./build'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        dependency: { not: ['url'] },
        loader: 'url-loader',
        options: {
          name: '[name].[ext]?[hash]',
          limit: 5000,
          fallback: 'file-loader', // 명시하지 않아도, 자동으로 file-loader로 인식
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,

        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  esmodules: true,
                  //   browsers: ["last 2 versions"],
                },
                useBuiltIns: 'usage',
                corejs: 3,
              },
            ],
            [
              '@babel/preset-react',
              {
                runtime: 'automatic',
              },
            ],
          ],
          plugins: [isDev && 'react-refresh/babel'].filter(Boolean),
        },
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `
      Commit Version: ${childProcess.execSync('git rev-parse --short HEAD')}
      Author: ${childProcess.execSync('git config user.name')}
      Build Time: ${new Date().toLocaleString()}
      `,
    }),
    new webpack.DefinePlugin({
      'api.domain': JSON.stringify('http:dev.api.domain.com/'),
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    isDev && new ReactRefreshWebpackPlugin(),
    new ESLintWebpackPlugin(),
  ].filter(Boolean),
  devServer: {
    static: './build',
    client: {
      overlay: true,
    },
    port: 3000,
    open: true,
    hot: true,
  },
  stats: 'errors-only',
  // devtool: isDev ? 'inline-source-map' : false,
};
