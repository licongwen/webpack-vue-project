const merge = require('webpack-merge');
const baseConf = require('./webpack.base.conf');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path')

const prod={
    optimization:{
        //v4.0以下的混淆配置
        // minimizer:[
        //     new UglifyJsPlugin(),
        //     // Compress extracted CSS. We are using this plugin so that possible
        //     // duplicated CSS from different components can be deduped.
        //     new OptimizeCSSAssetsPlugin()
        // ],
        // runtimeChunk: {
        //     name: 'runtime'
        // },
        minimize:true,//v4.0+的混淆配置
        splitChunks: {
            // minSize:30000,
            chunks:'all',
            cacheGroups: {
                // 创建vendors chunk，打包所有从node_modules来的依赖
                // vendors:{
                //     name: 'chunk-vendors',
                //     test: /[\\/]node_modules[\\/]/,
                //     chunks: 'initial'
                // },
                libs: {
                    name: 'chunk-libs',
                    test: /[\\/]node_modules[\\/]/,
                    priority: 10,
                    chunks: 'initial' // 只打包初始时依赖的第三方
                },
                // elementUI: {
                //     name: 'chunk-element',
                //     test: /[\\/]node_modules[\\/]element-ui[\\/]/,
                //     priority: 20,
                //     chunks: 'all' // 只打包初始时依赖的第三方
                // },
                echarts: {
                    name: 'chunk-echarts', // 单独将 echarts 拆包
                    priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
                    test: /[\\/]node_modules[\\/]echarts[\\/]/,
                    chunks:'all'
                },
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
        ),
        // new BundleAnalyzerPlugin() //生成打包后的包大小的文件的页面 
    ],
    mode:'production'
}

module.exports = merge(baseConf,prod);