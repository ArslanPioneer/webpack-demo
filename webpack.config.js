const path =require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

//plugin 可以在webpack运行到某个时刻的时候，帮助我做一些事情
module.exports ={
    mode:'development',
    //打包入口
    entry:'./src/index.js',
    module:{
        rules:[{
           test:/\.(jpg|png|gif)$/,
           use:{
               loader:'url-loader',
               options:{
                   name:'[name].[ext]',
                   outputPath:'img/',
                   limit:1024
               }
           }
        },
        {
            test:/\.(eot|ttf|svg|woff)$/,
            use:{
                loader:'file-loader',
            }
        },
        {
            test:/\.scss$/,
            use:['style-loader',
                {
                    loader:'css-loader',
                    options:{
                        importLoaders:2,
                        modules:true
                    }
                }
            ,'sass-loader','postcss-loader']
        }]
    },
    
    plugins:[
        //打包生成index.html文件
      new HtmlWebpackPlugin({template:'src/index.html'}),
      //清除index文件
    //   new CleanWebpackPlugin(['dist'], { 
    //     root: path.resolve(__dirname, '..'),
    //     dry: false // 启用删除文件
    //   }),
      new CleanWebpackPlugin()
    ],
    //打包输出
    output:{
        filename: 'dist.js',
        path:path.resolve(__dirname,'dist')
    }
}