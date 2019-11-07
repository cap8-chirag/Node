/* setTimeout(() => {
    console.log('wait for 2 seconds')
}, 2000); */

const geoloc=(address,dataLatLong)=>{

     setTimeout(()=>{
        const data={
            latitude:0,
            longitude:0
        }
        dataLatLong(data)
    },2000)
    
    
}
geoloc('new york',(response)=>{
    console.log(response)
})

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add=(add1,add2,sumdata)=>{
    setTimeout(()=>{
        const data=add1+add2
        sumdata(data)    
    },2000)
    
}

add(3, 4, (sum) => {
    console.log(sum) // Should print: 5
})

