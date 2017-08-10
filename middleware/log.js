/**
 * log middleware
 * Created by Session on 16/6/21.
 */
var log4js = require('log4js');


/**
 * log4js configure
 * @type {{appenders: *[], levels: {}}}
 */
var logConfigure = {
    appenders: [
        {
            type: 'dateFile',
            filename: 'src/logger/common.log',
            pattern: "-yyyy-MM-dd",
            category: ['common', 'request'],
            alwaysIncludePattern: true,
        }, {
            type: 'dateFile',
            filename: 'src/logger/errorDetail.log',
            pattern: "-yyyy-MM-dd",
            category: 'error',
            alwaysIncludePattern: true,
        }
    ],
    levels: {}
};
["common", "request", "client", "error", "weixinClientPayResult"].forEach(function (category) {
    var level = process.env['LOG_LEVEL_' + category];
    if (!level) {
        level = process.env.LOG_LEVEL;
    }
    logConfigure.levels[category] = level;
});

log4js.configure(logConfigure);

/**
 * default set common logger to req
 * @param req
 * @param res
 * @param next
 */
module.exports = function (req, res, next) {
    req.logger = log4js;
    // req.logger.generateLogID();
    next();
};
