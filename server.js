const express = require('express'); //import the express

const server = express();  //taking all the express method


const weatherData = require('./data/weather.json');


//local ip address 
//port 


const PORT = 3002;

// http://localhost:3000/
server.get('/', (req,res) => {
    console.log('Home Route');
    res.send('hi from the home route');
})

// http://localhost:3000/test
server.get('/test',(req,res) => {
    console.log("test Route")
    res.send('hi from the test route');
});


// http://localhost:3000/weather
server.get('/weather',(req,res) => {
    // let wData= weatherData.map( item => {
    //     item.city_name, weatherData[0].lat,weatherData[0].lon, weatherData[0].data
        
    //     return item
    // }
    // )
    res.send(weatherData);
})


server.listen(PORT, () => {
    console.log(`hello i am listening on this ${PORT}`);
})

