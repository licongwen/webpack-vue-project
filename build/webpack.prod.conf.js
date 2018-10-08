const merge = require('webpack-merge');
const baseConf = require('./webpack.base.conf');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path')

const prod={
    optimization:{
        // minimizer:[
        //     new UglifyJsPlugin()
        // ],//v4.0以下的混淆配置
        runtimeChunk: {
            name: 'manifest'
        },
        minimize:true,//v4.0+的混淆配置
        splitChunks: {
            minSize:30000,
            chunks:'all',
            cacheGroups: {
                //项目基础包
                vendor: {
                   //test: /[\\/]node_modules[\\/]vue/,
                    //test: /[\\/]node_modules[\\/]vue[\\/]/,
                    test: '../node_modules\/vue',
                    name: 'vendor',
                    chunks: 'all',
                    enforce: true,
                    priority: 2,
                    reuseExistingChunk: true
                },
                //单页面需要引入vue-router,vuex,这里单独分割出来
                spavendor: {
                    test: '/node_modules\/vue-router/g',
                    name: 'spavendor',
                    chunks: 'all',
                    enforce: true,
                    priority: 10,
                    reuseExistingChunk: true
                },
                //剩余的chunks自动分割
                commons: {
                    name: 'commons',
                    minChunks: 5, //引用次数大于5，将被打包进commons包
                    minSize: 3000, //chunk大小大于这个数值，将被打包进commons包
                    chunks: 'all',
                    priority: 1
                }
            },
        }
    },
    plugins: [
        // 打包前先清空
        new CleanWebpackPlugin(
            ['dist'],
            {
                root:path.resolve('./')//需要更改文件夹的根路径
            }
        )  
    ],
    mode:'production'
}

module.exports = merge(baseConf,prod);