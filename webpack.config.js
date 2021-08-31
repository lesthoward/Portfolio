const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizePlugin = require('css-minimizer-webpack-plugin') 
const HhtmlMinifyPlugin = require('html-minimizer-webpack-plugin')

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
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            new HhtmlMinifyPlugin({
                test: /\.foo\.html/i
            }),
            new CssMinimizePlugin()
        ]
    },
    module: {
        rules: [
            {
                test: /\.pug$/i,
                use: ['pug-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
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
                exclude: /node_modules/,
                loader: "html-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: true,
            template: path.resolve(__dirname + '/src/index.html'),
            inject: 'body',
            scriptLoading: 'blocking'
        }),
        new MiniCssExtractPlugin({
            chunkFilename: 'chunkFilename.css'
        })
    ]
}