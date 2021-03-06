const path = require('path');
const webpack = require('webpack');
const express = require('express');
const appConfig = require('../config/appConfig');
var routerFs = require('../modules/fs');
const logger = require('morgan')
const log4js = require('log4js')
// require('../modules/mongo')


const app = express()
app.use(logger('dev'));
app.use(require('../middleware/requestLogger'));
app.use(require('../middleware/log'));
// app.use(require('../middleware/domain'))

//webpack中间件配置，包括hotReplace
if(!appConfig.isProduction){
  const wpConfig = require('../config/webpack.dev.js');
  const compiler = webpack(wpConfig)

  const webpackMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware =require('webpack-hot-middleware');

  app.use(webpackMiddleware(compiler,{
    publicPath:wpConfig.output.publicPath,
    noInfo:true,
    stats:{colors:true}
  }))
  app.use(webpackHotMiddleware(compiler))
}

//注册路由
const dirTree = routerFs.readDirDeepSync(path.resolve(__dirname, 'routes'));

routerFs.genRouteByDirTree(dirTree).forEach((route) => {
  console.log(route)
  app.use(route.route, require(route.path));
});

//静态文件服务
app.use(express.static(path.join(__dirname,'../public')))

app.use('*',(req,res) =>{
  res.sendFile(path.join(__dirname,'../public/index.html'))
})

if (appConfig.port){
  app.listen(appConfig.port,appConfig.host,(err) =>{
    if (err){
      console.log(err)
    }else{
      console.info('server is running at %d',appConfig.port)
    }
  })
}else{
  console.error('No port is set')
}