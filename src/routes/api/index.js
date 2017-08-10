module.exports = (req, res) => {
    const { logger } = req;
    logger.getLogger('common').error('haha:', 'jajaj')
    res.send('1')
}