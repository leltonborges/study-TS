const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'production', //developement
    entry: './src/main.ts',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        port: 9000,
        compress: true
    },
    output: {
        filename: 'app.mim.js',
        path: path.join(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /mode_modules/
        }]
    },
    plugins: [
        new CopyPlugin({
            patterns: [{
                from: 'public'
            }]
        })
    ]
}