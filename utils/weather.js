const request = require('request')

const weather = (geo, callback) => {
    
    const access_token = 'e94d53f87f73f37914d52dd4db7afd6a'
    const url = `https://api.darksky.net/forecast/${access_token}/${geo.lat},${geo.lon}`

    return new Promise((resolve, reject) => {
        request({
            url,
            json: true
        }, (err, res) => {
            if (err) {
                reject('Unable to connect')
            } else if (res.body.error) {
                reject(res.body.error)
            } else {
                const data = res.body
                resolve(data.currently)
            }
        })
    })

    
}

module.exports = weather