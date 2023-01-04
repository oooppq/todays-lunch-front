const path = require("path");
const webpack = require("webpack");
const childProcess = require("child_process");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");

const isDev = (process.env.NODE_ENV || "development") === "development";

module.exports = {
  mode: isDev ? "development" : "production",
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve("./build"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: "url-loader",
        options: {
          name: "[name].[ext]?[hash]",
          limit: 5000,
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  esmodules: true,
                  //   browsers: ["last 2 versions"],
                },
              },
            ],
            ["@babel/preset-react"],
          ],
          plugins: [isDev && "react-refresh/babel"].filter(Boolean),
        },
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `
      Commit Version: ${childProcess.execSync("git rev-parse --short HEAD")}
      Author: ${childProcess.execSync("git config user.name")}
      Build Time: ${new Date().toLocaleString()}
      `,
    }),
    new webpack.DefinePlugin({
      "api.domain": JSON.stringify("http:dev.api.domain.com/"),
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ReactRefreshWebpackPlugin(),
    new ESLintWebpackPlugin(),
  ],
  devServer: {
    static: {
      directory: path.resolve("./public"),
    },
    client: {
      overlay: true,
    },
    port: 3000,
    open: true,
    hot: true,
  },
  stats: "errors-only",
};
