/**
 * Created by Session on 16/6/22.
 */
var log4js = require('log4js');
var moment = require('moment');
var requestLogger = log4js.getLogger('request');

module.exports = function (req, res, next) {
    var requestStart = moment().toISOString();
    var logger = log4js.connectLogger(requestLogger, {
        level: 'auto',
        format: function (req, res, format) {
            var line = format(JSON.stringify({
                logId: req.logID,
                responseId: req.responseId,
                browser: req.browser,
                page: req.baseUrl + (req.route && req.route.path || ''),
                ips: ":remote-addr",
                verb: ":method",
                url: ":url",
                httpVersion: ":http-version",
                status: ":status",
                contentLength: ":content-length",
                referrer: ":referrer",
                UA: ":user-agent",
                spendTime: ":response-time",
                requestStart: requestStart
            }));
            line = JSON.parse(line);
            line.spendTime = parseInt(line.spendTime);
            line.contentLength = line.contentLength == '-' ? 0 : parseInt(line.contentLength);
            return line;
        }
    });

    logger(req, res, next);
};
