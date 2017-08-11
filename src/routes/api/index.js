const request = require('request')
const { getData }  = require('../../../modules/cheerio')
module.exports = (req, res) => {
    getData()
    .then( _res => {
        res.json({
            result: _res
        })
    }, err => {

    })
    .catch(e => {
        console.log(e.message)
    })
}