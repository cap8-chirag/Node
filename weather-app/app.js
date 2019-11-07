const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

//const request=require('request')
/* const url = 'https://api.darksky.net/forecast/5162b1deee266f5f4cbc3588bd7166a9/37.8267,-122.4233?units=si'
request({uri:url, json:true},( error,response) => {
    //console.log(response.body)
    //JSON.parse is not required now as added options object with parameter json:true
    //const weatherdata=JSON.parse(response.body)
    const weatherdata=response.body
    //console.log(weatherdata.currently)
    //challenge to print current temperature and the chances for rain
    const curtemp=weatherdata.currently.temperature
    const currain=weatherdata.currently.precipProbability
    console.log(weatherdata.daily.data[0].summary + ' It is currently ' + curtemp + ' degrees out. There is a ' + currain + '% chance of rain.')
}) */
const yargs=require('yargs')
const address=yargs.argv.address
geocode(address,(error,{latitude,longitude,placeName})=>{
    if (error){
        console.log(error)
    }
    else
    {
        console.log(placeName)
        forecast(latitude,longitude, (error, data) => {
            if(error){
                console.log(error)
            }
            else
            {
                console.log(data)
            }    
          })
    }
    
})

console.log('End')