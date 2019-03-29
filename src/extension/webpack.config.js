/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HTMLPlugin = require("html-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CSSExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");
const { TypedCssModulesPlugin } = require("typed-css-modules-webpack-plugin");

const isDev = process.env.NODE_ENV === "dev";

module.exports = {
  mode: isDev ? "development" : "production",
  devtool: "inline-source-map",
  entry: {
    main: "./index.tsx",
    background: "./background.ts"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../../dist/extension")
  },
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          output: {
            comments: /@license/i
          }
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
          CSSExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[path]__[local]___[hash:base64:5]",
              camelCase: true,
              sourceMap: isDev
            }
          },
          "sass-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".scss"]
  },
  devServer: {
    port: 8080,
    compress: true,
    contentBase: path.resolve(__dirname, "../../dist/extension"),
    writeToDisk: true
  },
  plugins: [
    new HTMLPlugin({
      template: "index.html",
      chunks: ["main"]
    }),
    new CopyPlugin(["manifest.json"]),
    new CSSExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new OptimizeCSSPlugin(),
    new TypedCssModulesPlugin({
      globPattern: "**/*.scss"
    })
  ]
};
