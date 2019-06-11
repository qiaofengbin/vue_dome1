'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')


const express = require('express')
const app = express() //请求server
    // 第一种

var appData = require('../data/userList.json') //加载本地数据文件
var school = appData.school //获取对应的本地数据
var apiRoutes = express.Router()
app.use('/api', apiRoutes)

// 第二种
var glob = require('glob');
// const express = require('express')
// const app = express()
var apiRoutes = express.Router()
var appData = require('../data/index/config')
var getApi = appData['get']; //所有的get请求
var postApi = appData['post']; //所有的post请求

//查找所有的json文件
var entryJS = {};
entryJS = glob.sync('./data/**/*.json').reduce(function(prev, curr) {
    prev[curr.slice(7)] = '.' + curr;
    return prev;
}, {});

//合并所有的json文件到一个json中
let jsonData = {};
for (var i in entryJS) {
    let data = require(entryJS[i]);
    jsonData = Object.assign(jsonData, data);
}

app.use('/', apiRoutes)

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
    },
    // cheap-module-eval-source-map is faster for development
    devtool: config.dev.devtool,

    // these devServer options should be customized in /config/index.js
    devServer: {
        //在这里添加，记得前面加上逗号不然会报错   	
        before(app) {
            // 第二种
            //get
            for (var i = 0; i < getApi.length; i++) {
                var getData = jsonData[getApi[i].key];
                app.get(getApi[i].url, function(req, res) {
                    res.json(getData);
                });
            }
            //post
            for (var i = 0; i < postApi.length; i++) {
                var postData = jsonData[postApi[i].key];
                app.post(postApi[i].url, function(req, res) {
                    res.json(postData);
                });
            }
            // 第一种
            app.get('/api/userList', (req, res) => {
                res.json({
                        errno: 0,
                        data: school
                    }) //接口返回json数据，上面配置的数据seller就赋值给data请求后调用
            })
        },
        clientLogLevel: 'warning',
        historyApiFallback: {
            rewrites: [
                { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
            ],
        },
        hot: true,
        contentBase: false, // since we use CopyWebpackPlugin.
        compress: true,
        host: HOST || config.dev.host,
        port: PORT || config.dev.port,
        open: config.dev.autoOpenBrowser,
        overlay: config.dev.errorOverlay ? { warnings: false, errors: true } : false,
        publicPath: config.dev.assetsPublicPath,
        proxy: config.dev.proxyTable,
        quiet: true, // necessary for FriendlyErrorsPlugin
        watchOptions: {
            poll: config.dev.poll,
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('../config/dev.env')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
        new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            favicon: 'favicon.ico',
            inject: true
        }),
        // copy custom static assets
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../static'),
            to: config.dev.assetsSubDirectory,
            ignore: ['.*']
        }])
    ]
})

module.exports = new Promise((resolve, reject) => {
    portfinder.basePort = process.env.PORT || config.dev.port
    portfinder.getPort((err, port) => {
        if (err) {
            reject(err)
        } else {
            // publish the new Port, necessary for e2e tests
            process.env.PORT = port
                // add port to devServer config
            devWebpackConfig.devServer.port = port

            // Add FriendlyErrorsPlugin
            devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
                compilationSuccessInfo: {
                    messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
                },
                onErrors: config.dev.notifyOnErrors ?
                    utils.createNotifierCallback() : undefined
            }))

            resolve(devWebpackConfig)
        }
    })
})