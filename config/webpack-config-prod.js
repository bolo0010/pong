const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "production",
    entry: {
        main: './src/js/index.js'
    },
    output: {
        filename: '[name]-[contenthash].js',
        path: path.join(__dirname, '../', 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            filename: '[name]-[contenthash].html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name]-[contenthash].css'
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
};