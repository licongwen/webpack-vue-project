const merge = require('webpack-merge');
const baseConf = require('./webpack.base.conf');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const prod={
    opimization:{
        minimizer:[
            new UglifyJsPlugin()
        ]
    },
    plugins: [
        // 打包前先清空
        new CleanWebpackPlugin('dist')  
    ],
    mode:'production'
}

module.exports = merge(baseConf,prod);