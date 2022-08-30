import React from 'react';
import axios from 'axios';


class Weather extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            discription: "",
            date: ""
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
            date: r3
        })
    }
    catch
    {

    }
    
    
    
    
    }




    render(){
        return(
            <div>
            <h1>Welcome to forcast website</h1>

            <form onSubmit={this.getData}>
                <input type='text' name='cityName' placeholder='enter city name ...'/>
                <input type='text' name='lat' placeholder='enter the latitude ...'/>
                <input type='text' name='lon' placeholder='enter the longitude ...'/>
                <button type='submit'>Get Data</button>
            </form>
            <p>Description:{this.state.discription}</p>
            <p>Valid date: {this.state.date}</p>
            </div>
        )
    }
}
export default Weather;