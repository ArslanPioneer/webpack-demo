const merge =require('webpack-merge');
const commonConfig=require('./webpack.common.js')
//生产环境
//plugin 可以在webpack运行到某个时刻的时候，帮助我做一些事情
const prodConfig = {
    mode: 'production',
    devtool: 'cheap-module-source-map'
}

module.exports =merge(prodConfig,commonConfig)