const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
module.exports={
    //打包入口
    // entry: './src/index.js',
    entry:{
        lodash:'./src/lodash.js',
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
     //打包输出
     output: {
        //占位符
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist')
    }
}