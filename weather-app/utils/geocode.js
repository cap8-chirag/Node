
const request=require('request')
const geocode=(address,callback)=>{

    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiY2hpcmFnMSIsImEiOiJjazJraXgwNGQxMTB4M2xva2lqMzQ5eTI3In0.u42qdYFwVJ633mgqUoXnuA'
    request({url,json:true},(error,{body})=>{
        if(error)
        {
            callback('No internet connection',undefined)
        }
        else if(body.features.length===0){
            callback('No location found',undefined)
        }    
        else
        {
            callback(undefined,{
                latitude:body.features[0].center[1],
                longitude:body.features[0].center[0],
                placeName:body.features[0].place_name
            })
        }
    })
}

module.exports=geocode

