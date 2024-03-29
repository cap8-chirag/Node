//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const request=require('request')

const forecast=(latitude,longitude,callforecast)=>{
    const url='https://api.darksky.net/forecast/5162b1deee266f5f4cbc3588bd7166a9/' + latitude + ',' + longitude + '?units=si'
    request({url,json:true},(error,{ body })=>{
        if(error)
        {
            callforecast('No internet connection',undefined)
        }
        else if(body.error)
        {
            callforecast('No location found',undefined)    
        }
        else
        {
            callforecast(undefined,body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }

    })

}
 
module.exports=forecast



