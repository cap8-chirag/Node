const request=require('request')
/* console.log('starting print')

setTimeout(()=>{
    console.log('printing after 2 sec')
},2000)
setTimeout(()=>{

    console.log('printing after 0 sec')
},0)


console.log('stopping print') */
/* 
const geolocurl='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles1.json?access_token=pk.eyJ1IjoiY2hpcmFnMSIsImEiOiJjazJraXgwNGQxMTB4M2xva2lqMzQ5eTI3In0.u42qdYFwVJ633mgqUoXnuA'
request({url:geolocurl,json:true},(error, response)=>{
    if(error) 
    {
        console.log('Problem with internet')
    }
    else if(response.body.features.length===0)
    {
        console.log('unable to find the location')
    }
    else
    {
        console.log('Longitude: '+ response.body.features[0].center[0])
        console.log('Latitude: '+ response.body.features[0].center[1])
    }
}) */


