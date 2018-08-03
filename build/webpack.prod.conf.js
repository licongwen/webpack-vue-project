const merge = require('webpack-merge');
const baseConf = require('./webpack.base.conf');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const prod={
    opimization:{
        minimizer:[
            new UglifyJsPlugin()
        ]
    },
    mode:'production'
}

module.exports = merge(baseConf,prod);