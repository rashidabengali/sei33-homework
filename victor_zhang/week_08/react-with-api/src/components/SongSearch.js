import React, { Component } from 'react';
import _ from 'underscore';
import axios from 'axios';
axios.defaults.headers.common['Guitarparty-Api-Key'] = '54e80a31a3197536fc6cfa1b61cd65f8ed39f4ab';


class SongSearch extends Component {
  constructor() {
    super();
    this.state = {
      songData: null,
    }
    this.fetchSongs = this.fetchSongs.bind( this );
  }

  fetchSongs(q) {

    const guitarPartyURL = 'http://api.guitarparty.com/v2/songs/';
    const SongName = {
      query: q,
    }

    axios.get(guitarPartyURL, {params: SongName})
    // axios.get('http://api.guitarparty.com/v2/songs/?query=Uptown Girl')
    // axios.get('http://api.guitarparty.com/v2/songs/?query=Jolene')
    .then((response) => {
      console.log(response.data);
      this.setState({songData: response.data.objects[0] });
      // this.setState({title: })
    }, () => {
      this.setState({songData: null})
    })
    .catch(error => {
      console.log(error);
    });

  }

  render() {
    return (
      <div>
        <h1>Search Song Chords</h1>
        <SearchForm onSubmit={ this.fetchSongs }/>
        <Chords data={ this.state.songData }/>
      </div>
     
      // <h1>{ this.fetchSongs('hello') }</h1>
    );
  }
}

class SearchForm extends Component {
  constructor() {
    super();
    this.state = { query: '' };
    this._handleInput = this._handleInput.bind( this );
    this._handleSubmit = this._handleSubmit.bind( this );
  }

  _handleInput(event) {
    this.setState({query: event.target.value})
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit( this.state.query );
  }

  render() {
    return(
      <form onSubmit={ this._handleSubmit }>
        <input
          type="search"
          placeholder="Uptown Girl"
          required
          onInput={ this._handleInput }
        />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

const Image = (props) => <img src={ props.url } width="150" height="150" alt={ props.url }/>


const Chords = (props) => {
  if (props && props.data === null) {
    return '';
  } else {
    console.log(props.data.title);
    return(
      <div>
        <h2>Title: {props.data.title}</h2>
        <h3>Chords: </h3>
        { _(props.data.chords).pluck('image_url').map( (url) => <Image url={url} key={url} /> ) }
        <h4>Lyrics: {props.data.body}</h4>
      </div>
    );
  }
}
// _.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
// => [3, 6, 9]

// const WeatherInfo = (props) => {
//   // Conditional rendering: we only show results once they're available.
//   if (props && props.data === null) {
//     return '';
//   } else {
//     return (
//       <div>
//         <h2>Weather for { props.data.name }</h2>
//         <h3>Currently { props.data.main.temp }&deg;C</h3>
//         <img src={`http://openweathermap.org/img/w/${ props.data.weather[0].icon }.png` } alt={props.data.weather[0].description} />
//         <h4>{props.data.weather[0].main}: {props.data.weather[0].description}</h4>
//       </div>
//     );
//   }
// }

export default SongSearch;