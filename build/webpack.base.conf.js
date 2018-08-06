const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry:'./src/main.js',
    output:{
        filename:'bundle.js',
        path:path.resolve('dist')
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:{
                    loader:"vue-loader",
                    options:{
                        loaders:{
                            css:ExtractTextWebpackPlugin.extract({
                                use:'css-loader'
                            }),
                            less: ExtractTextWebpackPlugin.extract({
                                use: ["css-loader", "less-loader"]
                            })
                        }
                    }
                }
            },
            //支持css
            {
                test:/\.css$/,
                use:ExtractTextWebpackPlugin.extract({
                    use:['css-loader?minimize'],//这种方式引入css文件就不需要style-loader了
                })
                //use:['style-loader','css-loader']//从右往左解析
            },
            {
                test:/\.less$/,
                use:ExtractTextWebpackPlugin.extract({
                    use:['css-loader?minimize','less-loader'],
                })
                //use:['style-loader','css-loader','less-loader'],//
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'index.html',
            filename:'index.html',
            hash:true,
            minify:{
                removeAttributeQuotes:true,
            }
        }),
        new ExtractTextWebpackPlugin({
            filename:'css/style.css',
            // Setting the following option to `false` will not extract CSS from codesplit chunks.
            // Their CSS will instead be inserted dynamically with style-loader when the codesplit chunk has been loaded by webpack.
            // It's currently set to `true` because we are seeing that sourcemaps are included in the codesplit bundle as well when it's `false`, 
            // increasing file size: https://github.com/vuejs-templates/webpack/issues/1110
            allChunks: true,
        }),
        new VueLoaderPlugin(),//vue-loaderv15+需要一个VueLoaderPlugin插件 ，参考https://vue-loader.vuejs.org/migrating.html#a-plugin-is-now-required
    ],
}