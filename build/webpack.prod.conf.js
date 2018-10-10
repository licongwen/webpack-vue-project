const merge = require('webpack-merge');
const baseConf = require('./webpack.base.conf');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path')

const prod={
    optimization:{
        // minimizer:[
        //     new UglifyJsPlugin()
        // ],//v4.0以下的混淆配置
        runtimeChunk: {
            name: 'runtime'
        },
        minimize:true,//v4.0+的混淆配置
        splitChunks: {
            minSize:30000,
            chunks:'all',
            cacheGroups: {
                //项目基础包
                // vendor: {
                //    //test: /[\\/]node_modules[\\/]vue/,
                //     //test: /[\\/]node_modules[\\/]vue[\\/]/,
                //     test: '../node_modules\/vue',
                //     name: 'vendor',
                //     chunks: 'all',
                //     enforce: true,
                //     priority: 2,
                //     reuseExistingChunk: true
                // },
                libs: {
                    name: 'chunk-libs',
                    test: /[\\/]node_modules[\\/]/,
                    priority: 10,
                    chunks: 'initial' // 只打包初始时依赖的第三方
                  },
                elementUI: {
                    name: 'chunk-elementUI', // 单独将 elementUI 拆包
                    priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
                    test: /[\\/]node_modules[\\/]element-ui[\\/]/
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