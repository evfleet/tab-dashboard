/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const HTMLPlugin = require("html-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CSSExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');


const isDev = process.env.NODE_ENV === "dev";

module.exports = {
  mode: isDev ? "development" : "production",
  devtool: "inline-source-map",
  entry: "./index.tsx",
  output: {
    filename: isDev ? "[name].js" : "[name].[hash].js",
    path: path.resolve(__dirname, "../../dist/extension")
  },
  optimization: {
    minimizer: [
      new UglifyJSPlugin({ 
        uglifyOptions: {
          output: {
            comments: /@license/i,
          },
        },
        extractComments: true
      })
    ]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.scss$/,
        loader: [
          isDev ? "style-loader" : CSSExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              modules: true,
              localIdentName: "[name]__[local]___[hash:base64:5]",
              camelCase: true,
              sourceMap: isDev
            }
          }
        ]
      }
    ]
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js", ".scss"]
  },
  devServer: {
    hot: true,
    port: 8080,
    compress: true,
    contentBase: path.resolve(__dirname, "../../dist/extension")
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLPlugin({
      template: "index.html"
    }),
    new CopyPlugin(["manifest.json"]),
    new CSSExtractPlugin({
      filename: isDev ? "[name].css" : "[name].[hash].css",
      chunkFilename: isDev ? "[id].css" : "[id].[hash].css"
    }),
    new OptimizeCSSPlugin()
  ]
};
