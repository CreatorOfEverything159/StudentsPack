const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: "./index.js",
    output: {
        filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html"
        }),
        new CleanWebpackPlugin()
    ]
}