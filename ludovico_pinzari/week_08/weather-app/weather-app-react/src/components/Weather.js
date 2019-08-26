import React, { Component } from 'react';
import Form from './form';
import axios from 'axios';

class Weather extends Component {
  constructor(){
    super();
    this.state = {
      temperature: undefined,
      humidity: undefined,
      description: undefined
    };
    this.getWeather = this.getWeather.bind(this);
  };
  getWeather(city) {
    console.log('Searching Weather for',city);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ city}&appid=0c2a56d4371875d123d9a01e7cc0c5b3&units=metric`
    axios.get(url)
      .then((results) => {
        this.setState({temperature: results.data.main.temp});
        this.setState({humidity: results.data.main.humidity});
        this.setState({description: results.data.weather[0].description});
      });
  }

  render () {
    return(
      <div>
        <h1>Weather Search </h1>
        <Form onSubmit={ this.getWeather }/>
        {this.state.temperature && <p>Temperature: {this.state.temperature} &deg; </p>}
        {this.state.humidity && <p>Humidity: {this.state.humidity} </p>}
        {this.state.description && <p>Description: {this.state.description} </p>}
      </div>
    );
  }

}


export default Weather;
