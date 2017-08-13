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
                filmList.push({
                    img: $(this).find('img').attr('src'),
                    title: $(this).next().find('a').text(),
                    link: $(this).find('a').attr('href')
                })
            })
            console.log(filmList)
            resolve(filmList)
        })
    })
}