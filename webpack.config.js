var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        appStyles: [
            './src/content/sass/Exercise01.scss',
            './src/content/sass/Exercise02Base.scss',
            './src/content/css/Exercise02_theme01.css', // Theme 1 for exercise 02.
            //'./src/content/css/Exercise02_theme02.css', // Theme 2 for exercise 02.
            './src/content/css/Exercise03.css',
            './src/content/sass/Exercise04.scss',
        ]
    },
    output: {
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    }
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ]
            }
        ]
    },
    plugins:
    [
        new HtmlWebpackPlugin({
            filename: 'Exercise01.html',
            template: 'src/pages/Exercise01.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'Exercise02.html',
            template: 'src/pages/Exercise02.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'Exercise03.html',
            template: 'src/pages/Exercise03.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'Exercise04.html',
            template: 'src/pages/Exercise04.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        })
    ]
}