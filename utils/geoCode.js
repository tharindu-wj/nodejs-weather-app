const request = require('request')

const geoCode = (address) => {

    const access_token = 'pk.eyJ1IjoidGhhcmluZHV3IiwiYSI6ImNqeHI5YXdvbjA2ajAzbm9qMnNqeG5xeTgifQ.9cgxeXB9oHLlBkACy75CIQ'
    const encode_address = encodeURIComponent(address)
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encode_address}.json?access_token=${access_token}`


    return new Promise((resolve, reject) => {
        request({
            url,
            json: true
        }, (err, res) => {
            if (err) {
                reject('Unable to connect12')
            } else if (res.body.features == 0) {
                reject('Unable to find location')
            } else {
                const data = res.body.features[0]
                const lat = data.center[0]
                const lon = data.center[1]
                const place = data.place_name
                resolve({
                    lat,
                    lon,
                    place
                })
            }
        })
    })

}

module.exports = geoCode