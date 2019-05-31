const path =require('path');
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
        },{
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
    //打包输出
    output:{
        filename: 'bundle.js',
        path:path.resolve(__dirname,'dist')
    }
}