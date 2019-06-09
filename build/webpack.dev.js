const path = require('path');
const webpack = require('webpack');
const merge =require('webpack-merge');
const commonConfig=require('./webpack.common.js')
//开发环境
//plugin 可以在webpack运行到某个时刻的时候，帮助我做一些事情
const devConfig = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    //打包入口
    
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        open: true,
        port: 9000,
        hot: true,
        //浏览器手动刷新
        // hotOnly: true
    },
   
    plugins: [
        //热加载，不刷新浏览器就可以更新页面
        new webpack.HotModuleReplacementPlugin()
    ],
    //development 配置tres shaking 时使用
    optimization:{
        usedExports:true
    }
  
}

module.exports= merge (devConfig,commonConfig);