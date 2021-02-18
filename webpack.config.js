const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",  //вход
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index-bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["awesome-typescript-loader"] //typescript loader
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"] // Добавить разрешения '.ts' и '.tsx' к обрабатываемым
  },
};