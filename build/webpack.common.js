const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
module.exports={
    //打包入口
    // entry: './src/index.js',
    entry:{
        main:'./src/index.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                // options:{
                //     "presets": ["@babel/preset-env"],
                //     "plugins": [
                //         [
                //           "@babel/plugin-transform-runtime",
                //           {
                //             "absoluteRuntime": false,
                //             "corejs": 2,
                //             "helpers": true,
                //             "regenerator": true,
                //             "useESModules": false
                //           }
                //         ]
                //       ]
                // }
            },
            {
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
            default: ['../dist/*']
        }),
    ],
    //代码分割和webpack无关
    //webpack中实现代码分割，两种方式
    //1.同步代码，只需要在webpack.common.js中做optimization的配置
    //2.异步代码(import):异步代码，无需做任何配置，会自动进行代码分割
    optimization:{
        splitChunks: {
            //async异步 initial同步 all均可
            chunks: "all",
            //引入包大于30kb，作代码分割
            minSize: 30000,
            //包使用多少次，才作代码分割
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
            default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
     //打包输出
     output: {
        //占位符
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist')
    }
}