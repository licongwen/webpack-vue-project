const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

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
                use:['vue-loader']
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
        new VueLoaderPlugin(),//vue-loaderv15+需要一个VueLoaderPlugin插件 ，参考https://vue-loader.vuejs.org/migrating.html#a-plugin-is-now-required
    ],
    mode:"development",//"production"
}