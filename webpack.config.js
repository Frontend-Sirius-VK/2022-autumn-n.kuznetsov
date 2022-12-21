const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: '/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: '/',
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.png$/, type: 'asset/resource' },
            { test: /\.jpeg$/, type: 'asset/resource' },
            { test: /\.jpg$/, type: 'asset/resource' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '/index.html'
        })
    ],
    devServer: {
        proxy: {
            '/api': 'http://127.0.0.1:3000',
        },
        historyApiFallback: true
    }
};