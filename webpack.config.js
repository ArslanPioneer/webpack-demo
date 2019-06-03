const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const webpack =require('webpack');

//plugin 可以在webpack运行到某个时刻的时候，帮助我做一些事情
module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    //production devtool:'cheap-module-source-map'
    //打包入口
    entry: './src/index.js',
    module: {
        rules: [{
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/',
                        limit: 1024
                    }
                }
            },
            {
                test: /\.(eot|ttf|svg|woff)$/,
                use: {
                    loader: 'file-loader',
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            modules: true
                        }
                    }, 'sass-loader', 'postcss-loader'
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader',
                    {
                        loader: 'css-loader',
                    }, 'sass-loader', 'postcss-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        open: true,
        port: 9000,
        hot:true,
        hotOnly:true
    },
    plugins: [
        //打包生成index.html文件
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        //By default, this plugin will remove all files inside webpack's output.path directory, as well as all unused webpack assets after every successful rebuild
        new CleanWebpackPlugin({
            // Simulate the removal of files
            verbose: true,
            // Write Logs to Console
            dry: false,
            default: ['dist/*']
        }),
        //热加载，不刷新浏览器就可以更新页面
        new webpack.HotModuleReplacementPlugin()
    ],
    //打包输出
    output: {
        //占位符
        filename: 'dist.js',
        path: path.resolve(__dirname, 'dist')
    }
}