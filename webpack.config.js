const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    devServer: {
        static: {
            directory: __dirname + '/dist'
        },
        open: {
            app: {
                name: 'firefox'
            }
        }
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.pug$/i,
                use: ['pug-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpeg|jpg|gif)$/,
                type: "asset/resource"
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: "asset/resource"
            },
            {
                test: /\.html$/i, 
                loader: "html-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: false,
            template: path.resolve(__dirname + '/src/index.html')
        })
    ]
}