const express = require('express'); //import the express
const cors = require('cors');
const server = express();  //taking all the express method
const weatherData = require('./data/weather.json');
server.use(cors()); //tp make server open for any request

//local ip address 
//port 


const PORT = 3020; //process.env.PORT;

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


// http://localhost:3000/allWeather
server.get('/allWeather',(req,res) => {
    // let wData= weatherData.map( item => {
    //     item.city_name, weatherData[0].lat,weatherData[0].lon, weatherData[0].data
        
    //     return item
    // }
    // )
    res.send(weatherData);
})

// http://localhost:3000/weather?name=cityName&&lat=latitude&&lon=longitude`;
server.get('/weather',(req,res) => {
    console.log(req.query);
    console.log(req.query.name);

    const result = weatherData.find( (item) => {
        if(item.city_name === req.query.name){  //&& item.lat === req.query.lat && item.lon === req.query.lon
            return item;
        }
    })

    console.log(result) //to show in the server in the termenal

    res.send(result); //to show in the web as a console in the browser
})

server.get('*',(req,res) => {
    res.send('"404  error": "Something went wrong."');
})


server.listen(PORT, () => {
    console.log(`hello i am listening on this ${PORT}`);
})

