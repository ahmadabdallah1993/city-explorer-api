import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

class Weather extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            discription1: "",
            date2: "",
            discription2: "",
            date3: "",
            discription3: "",
            date1: "",
            err: false,
            name: '',
            lat: '',
            lon: '',
            error: 'sorry something went wrong!!!',
            errorFlag: false,
            openMap: false
        }
    }
        

    getData = async (event) => {
        event.preventDefault();
        const city = event.target.cityName.value;
        // const lat = event.target.lat.value;
        // const lon = event.target.lon.value;

        const c = city.toLowerCase();
        const key = 'pk.d63f789567346be0d16e65b136ea44aa';
        const url1 = `https://us1.locationiq.com/v1/search?key=${key}&q=${c}&format=json`
        const responceReselt = await axios.get(url1);

        

        try{
            this.setState({
                name: city,
                lat: responceReselt.data[0].lat,
                lon: responceReselt.data[0].lon,
                openMap: true
            })
    
    
    
    
            const url = `http://localhost:3020/weather?name=${city}&&lat=${this.state.lat}&&lon=${this.state.lon}`;
            
    
            const result = await axios.get(url);
           
            const r2 = JSON.stringify(result.data.data[0])
            const r3 = JSON.stringify(result.data.data[0].valid_date)

            const rr = JSON.stringify(result.data.data[1])
            const rr2 = JSON.stringify(result.data.data[1].valid_date)

            const rrr = JSON.stringify(result.data.data[2])
            const rr2r = JSON.stringify(result.data.data[2].valid_date)
           
            console.log(r2);
    
            this.setState({
                discription1: r2,
                date1: r3,
                discription2: rr,
                date2: rr2,
                discription3: rrr,
                date3: rr2r,
            })

        }
        catch
        {
            this.setState({
                errorFlag: true 
            })
        }
    
        
    }




    render(){
        return(

<>
      <Form onSubmit={this.getData}>

      <Form.Group className="mb-3" controlId="formBasicCityName">
        <Form.Label>City Name</Form.Label>
        <Form.Control  type="text" name='cityName' placeholder='enter city name ...' />
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="formBasicLat">
        <Form.Label>latitude</Form.Label>
        <Form.Control type='text' name='lat' placeholder='enter the latitude ...' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLon">
        <Form.Label>longitude</Form.Label>
        <Form.Control type='text' name='lon' placeholder='enter the longitude ...'/>
      </Form.Group> */}

      <Button variant="primary" type="submit">
        Forcast
      </Button>

      <br></br>
    </Form>

            <h3>Name: {this.state.name}</h3>
            <br></br>
             <h4>Lat: {this.state.lat}</h4>
             <h4>Lon: {this.state.lon}</h4>
             {this.state.errorFlag && <h4>ERROR: {this.state.error} </h4>}
             {this.state.openMap && <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.d63f789567346be0d16e65b136ea44aa&center=${this.state.lat},${this.state.lon}&zoom=1-18&size=<width>x<height>&format=<format>&maptype=<MapType>&markers=icon:<icon>|${this.state.lat},${this.state.lon}&markers=icon:<icon>|${this.state.lat},${this.state.lon}`} alt={this.state.name}></img>}
<br></br>
    <p>Day 1 Description: {this.state.discription1}</p>
    <p>Day 1 Date: {this.state.date1}</p>
    <br></br>
    <p>Day 2 Description: {this.state.discription2}</p>
    <p>Day 2 Date: {this.state.date2}</p>
    <br></br>
    <p>Day 3 Description: {this.state.discription3}</p>
    <p>Day 3 Date: {this.state.date3}</p>
    {this.state.err && <p>"error": "Something went wrong."</p>}

    </>

        )
    }
}
export default Weather;