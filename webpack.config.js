const path = require("path");
const NodemonPlugin = require("nodemon-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  target: "node",
  devtool: "inline-source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  plugins: [
    new NodemonPlugin(), // Dong
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          cache: true
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { modules: false }]],
            cacheDirectory: true
          }
        }
      }
    ]
  }
};
