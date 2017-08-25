const request = require('request')
const { getData }  = require('../../../modules/cheerio')
const User = require('../../../models/Users')

module.exports = (req, res) => {
    getData()
    .then( _res => {
        //设置延迟时间 方便查看前端状态变化
        res.json({
            result: _res
        })
    }, err => {

    })
    .catch(e => {
        console.log(e.message)
    })

    
    // var t = new test({title: 'hahah'})
    // console.log(t)
    // t.findTitle((err, docs) => {
    //     console.log(docs)
    // })

    // var data = {
    //     title: '1'
    // }
    // var t1 = new test(data)
    // t1.addTitle((err, docs) => {
    //     if (err) {
    //         console.log(err)
    //     }
    //     console.log(docs)
    // })
}