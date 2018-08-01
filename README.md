# webpack-vue-proj

## 什么是webpack？
webpack可以看作是一个模块打包器，webpack会从一个入口文件分析你的项目的依赖，处理你的依赖，转换为浏览器可运行的代码。

### webpack是基于node的
在项目的根目录下创建webpack.config.js的文件，执行webpack命令时会默认读取这个配置文件。
```js
//webpack.config.js
module.exports = {
    entry:'',//入口文件(可配置多入口文件)
    output:{},//出口文件
    module:{},//处理相应的模块
    plugins:[],//插件模块
    devserver:{},//服务器配置模块
    mode:"development",//打包模式(development or production)
}
```
