const webpack = require('webpack')
const merge = require('webpack-merge');
const baseConf = require('./webpack.base.conf');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const path = require('path')
const seen = new Set()
const nameLength = 4

const prod={
    mode:'production',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'static/js/[name].[chunkhash:8].js',
        chunkFilename: ('static/js/[name].[chunkhash:8].js')
    },
    optimization:{
        //v4.0以下的混淆配置
        // minimizer:[
        //     new UglifyJsPlugin(),
        //     // Compress extracted CSS. We are using this plugin so that possible
        //     // duplicated CSS from different components can be deduped.
        //     new OptimizeCSSAssetsPlugin()
        // ],
        // runtimeChunk: {
        //     name: 'runtime-chunk'
        // },
        // minimize:true,//v4.0+的混淆配置
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
                elementUI: {
                    name: 'chunk-elementUI', // 单独将 elementUI 拆包
                    priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
                    test: /[\\/]node_modules[\\/]element-ui[\\/]/
                },
                lodashlib: {
                    name: 'chunk-lodash',
                    test: /[\\/]node_modules[\\/]lodash[\\/]/,
                    priority: 20,
                    // chunks: 'all' //
                },
                // axioslib: {
                //     name: 'li-axios', // 单独将 axios 拆包
                //     priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
                //     test: /[\\/]node_modules[\\/]axios[\\/]/,
                //     chunks:'all'
                // },
            },
        },
        runtimeChunk: 'single',
        minimizer: [
        new UglifyJsPlugin({
            uglifyOptions: {
                mangle: {
                    safari10: true
                }
            },
            sourceMap: false,
            cache: true,
            parallel: true
        }),
        // Compress extracted CSS. We are using this plugin so that possible
        // duplicated CSS from different components can be deduped.
        new OptimizeCSSAssetsPlugin()
        ]
    },
    plugins: [
        // 打包前先清空
        new CleanWebpackPlugin(
            ['dist'],
            {
                root:path.resolve('./')//需要更改文件夹的根路径
            }
        ),
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[contenthash:8].css',
            chunkFilename: 'static/css/[name].[contenthash:8].css'
        }),
        new ScriptExtHtmlWebpackPlugin({
            //`runtime` must same as runtimeChunk name. default is `runtime`
            inline: /runtime\..*\.js$/
        }),
        // keep chunk.id stable when chunk has no name
        new webpack.NamedChunksPlugin(chunk => {
            if (chunk.name) {
              return chunk.name
            }
            const modules = Array.from(chunk.modulesIterable)
            if (modules.length > 1) {
              const hash = require('hash-sum')
              const joinedHash = hash(modules.map(m => m.id).join('_'))
              let len = nameLength
              while (seen.has(joinedHash.substr(0, len))) len++
              seen.add(joinedHash.substr(0, len))
              return `chunk-${joinedHash.substr(0, len)}`
            } else {
              return modules[0].id
            }
        }),
        // keep module.id stable when vender modules does not change
        new webpack.HashedModuleIdsPlugin(),
        // new BundleAnalyzerPlugin() //生成打包后的包大小的文件的页面 
    ],
    
}

module.exports = merge(baseConf,prod);