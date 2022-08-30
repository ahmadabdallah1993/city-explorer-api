import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

class Weather extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            discription: "",
            date: "",
            err: false
        }
    }


    getData = async (event) => {
        event.preventDefault();
        const city = event.target.cityName.value;
        const lat = event.target.lat.value;
        const lon = event.target.lon.value;

        const url = `http://localhost:3015/weather?name=${city}&&lat=${lat}&&lon=${lon}`;
        // const url = `http://localhost:3015/weather`;

        // const result = await axios.get(url);
        // console.log(result);
    
    try
    {
        const result = await axios.get(url);
        // const r2 = JSON.stringify(result)
        const r2 = JSON.stringify(result.data.data[0])
        const r3 = JSON.stringify(result.data.data[0].valid_date)
       
        console.log(r2);

        this.setState({
            discription: r2,
            date: r3,
            err:false
        })
        
    }
    catch
    {
        this.setState({
            err:true
        })
    }
    
    
    
    
    }




    render(){
        return(

<>
      <Form onSubmit={this.getData}>

      <Form.Group className="mb-3" controlId="formBasicCityName">
        <Form.Label>City Name</Form.Label>
        <Form.Control type="text" name='cityName' placeholder='enter city name ...' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLat">
        <Form.Label>latitude</Form.Label>
        <Form.Control type='text' name='lat' placeholder='enter the latitude ...' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLon">
        <Form.Label>longitude</Form.Label>
        <Form.Control type='text' name='lon' placeholder='enter the longitude ...'/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Forcast
      </Button>

      <br></br>
    </Form>
    <p>Description: {this.state.discription}</p>
    <p>Date: {this.state.date}</p>
    {this.state.err && <p>"error": "Something went wrong."</p>}
    </>

        )
    }
}
export default Weather;