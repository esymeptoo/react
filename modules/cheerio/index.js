const request = require('request')
const promise = require('promise')
const cheerio = require('cheerio')
exports.getData = function() {
    return new promise((resolve, reject) => {
        request.get('https://movie.douban.com/', (err, res, body) => {
            if (err) {
                reject(err)
            }
            const $ = cheerio.load(body.toString())
            let filmList = [];
            $('ul li.poster').each(function() {
                filmList.push($(this).find('img').attr('src'))
            })
            resolve(filmList)
        })
    })
}