const path = require('path');
const webpack = require('webpack');
// const childProcess = require('child_process');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const apiMocker = require('connect-api-mocker');

const isDev = (process.env.NODE_ENV || 'development') === 'development';

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: {
    main: './src/index.js',
  },
  output: {
    publicPath: '/',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
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
      // Commit Version: ${childProcess.execSync('git rev-parse --short HEAD')}
      // Author: ${childProcess.execSync('git config user.name')}
      banner: `
      Build Time: ${new Date().toLocaleString()}
      `,
    }),
    new webpack.DefinePlugin({
      PUBLIC_URL: JSON.stringify(path.resolve('./public')),
      'api.domain': JSON.stringify('http:dev.api.domain.com/'),
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    isDev && new ReactRefreshWebpackPlugin(),
    new ESLintWebpackPlugin(),
  ].filter(Boolean),
  devServer: {
    static: '/build',
    client: {
      overlay: true,
    },
    port: 3000,
    // open: true,
    hot: true,
    historyApiFallback: { disableDotRule: true },
    onBeforeSetupMiddleware(devServer) {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }
      devServer.app.use(apiMocker('/api', '/server/api'));
    },
  },
  stats: 'errors-only',
  // devtool: isDev ? 'inline-source-map' : false,
};
