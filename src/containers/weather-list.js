import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


export class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humiditys = cityData.list.map(weather => weather.main.humidity);
        const {lat, lon} = cityData.city.coord; 
        
        console.log(cityData.city.coord);

        return (
            <tr key={cityData.city.name} >
                <td><GoogleMap long={lon} lat={lat} /></td> 
                <td>
                    <Chart data={temps} color="orange" />
                </td>
                <td>
                    <Chart data={pressures} color="green" />
                </td>
                <td>
                    <Chart data={humiditys} color="black" />
                </td>
            </tr>
        );
    }


    render() {
        return (
            <table className="table table-hover" >
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);