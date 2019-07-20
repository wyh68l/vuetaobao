const path = require('path')
// 启用热更新的 第2步
const webpack = require('webpack')
// 导入在内存中生成 HTML 页面的 插件
// 只要是插件，都一定要 放到 plugins 节点中去
// 这个插件的两个作用：
//  1. 自动在内存中根据指定页面生成一个内存的页面
//  2. 自动，把打包好的 bundle.js 追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


// 这个配置文件，起始就是一个 JS 文件，通过 Node 中的模块操作，向外暴露了一个 配置对象
module.exports = {
    entry: path.join(__dirname, './src/main.js'),// 入口，表示，要使用 webpack 打包哪个文件
    output: { // 输出文件相关的配置
        path: path.join(__dirname, './dist'), // 指定 打包好的文件，输出到哪个目录中去
        filename: 'bundle.js' // 这是指定 输出的文件的名称
    },
    plugins: [ // 配置插件的节点
        //new webpack.HotModuleReplacementPlugin(), // new 一个热更新的 模块对象， 这是 启用热更新的第 3 步
        new htmlWebpackPlugin({ // 创建一个 在内存中 生成 HTML  页面的插件
            template: path.join(__dirname, './src/index.html'), // 指定 模板页面，将来会根据指定的页面路径，去生成内存中的 页面
            filename: 'index.html' // 指定生成的页面的名称
        }),
        new VueLoaderPlugin()
    ],
    module: { // 这个节点，用于配置 所有 第三方模块 加载器
        rules: [ // 所有第三方模块的 匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, //  配置处理 .css 文件的第三方loader 规则
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, //配置处理 .less 文件的第三方 loader 规则
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },// 配置处理 .scss 文件的 第三方 loader 规则
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader' },
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},//配置bael转换高级的es6语法,
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // 处理 字体文件的 loader
            { test: /\.vue$/, use: 'vue-loader' } // 处理 .vue 文件的 loader
        ]
    },
    node: {
        net: 'empty',
        tls: 'empty',
        fs: 'empty'
    },
    resolve:{
        alias:{
            /*修改vue导入包时的路径*/
            "vue$":"vue/dist/vue.js",
            "vue-router$":"vue-router/dist/vue-router.js"
        }
    }

}
