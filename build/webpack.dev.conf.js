const baseConf = require('./webpack.base.conf');

const merge = require('webpack-merge');

const path = require('path');

const webpack = require('webpack');

const dev = {
    devServer:{
        contentBase:path.resolve(__dirname,'./dist'),
        port:8070,
        host: 'localhost',//设置为localhost时只能在本机访问。可改为0.0.0.0
        overlay: true,
        compress: true,
        open:true,
        hot: true,
        inline: true,
        progress: true,
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
    devtool:'inline-source-map',
    mode:'development'
}

module.exports = merge(baseConf,dev);