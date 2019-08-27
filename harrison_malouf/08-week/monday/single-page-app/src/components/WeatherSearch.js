import React, { Component } from 'react';
import axios from 'axios'

class WeatherSeach extends Component {
  constructor() {
    super();
    this.state = {
      weather: ""
    };
    this.getWeather = this.getWeather.bind(this);
  }

fetchWeather(w) {
  const weatherURL = 'api.openweathermap.org/data/2.5/weather?q='
  const flickrParams = {
    city_name: '',
  };

  const generateURL = (p) => {
    return [
      `${}`,
      p.city_name,
    ]
  }

}

}
