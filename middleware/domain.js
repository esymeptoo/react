var domain = require('domain');

module.exports = function (req, res, next) {
    var reqDomain = domain.create();
    reqDomain.on('error', function (err) {
        try {
            // 强制退出机制
            var killTimer = setTimeout(function () {
                process.exit(1);
            }, 30000);
            killTimer.unref();

            req.logger.push('error', err).error('occur error catch by domain');
            res.render('error', {
                message: err.message,
                error: {}
            });
            req.app.get('server').close();
        } catch (e) {
            req.logger.push('error', err).push('occur error when exist');
        }
    });

    reqDomain.run(next);
};

