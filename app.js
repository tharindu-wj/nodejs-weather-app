const geoCode = require('./utils/geoCode')
const weather = require('./utils/weather')

const location = process.argv.slice(2);

//promise example
// geoCode(location).then(({lat, lon, place})=>{
//     weather({lat, lon, place}).then((current_weather)=>{
//         console.log(place)
//         console.log(current_weather)
//     }).catch((err)=>{
//         console.log(err)
//     })
// }).catch((err)=>{
//     console.log(err)
// })


//async await example
 async function init(){
    const {lat, lon, place} = await geoCode(location)
    const current_weather =  await weather({lat, lon, place})
    console.log(place)
    console.log(current_weather)
 }

 init()
