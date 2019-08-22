import React, { Component } from 'react';
import axios from 'axios';

class CocktailSearch extends Component {
  constructor() {
    super();
    this.state = {
        data: []
    };
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(query){
    console.log(query);
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php";

    axios.get(url,{
        params: {
            s: query.toLowerCase()
        }
    }).then((response)=>{
        this.setState({data: response.data.drinks});
    });
  }

  render() {
    return (
      <div>
        <h1>Search Cocktail</h1>
        <SearchCocktailForm onSubmit={this.fetchData} />
        <CocktailInfo info={this.state.data} />
      </div>
    );
  }
}

class SearchCocktailForm extends Component {
    constructor() {
        super();
        this.state = {
            query: ''
        };
        this._handleInput = this._handleInput.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }
    _handleInput(event){
        this.setState({query:event.target.value});
    }

    _handleSubmit(event){
        event.preventDefault();
        this.props.onSubmit(this.state.query);
    }

    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <input type="text" placeholder="Margarita" onInput={this._handleInput} required />
                <input type="submit" value="search" />
            </form>
        );
    }
}

const Image = (props) =>{
    return <img src={props.url} width="150px" height="150px" alt="A piccy from flickr"/>
}

const CocktailInfo = (props)=>{
    return (
        <div>
            {props.info.map((drink)=> {
                    return (
                        <div key={drink.idDrink}>
                            <Image url={drink.strDrinkThumb}  />
                            <h4>{drink.strDrink}</h4>
                            <p>{drink.strInstructions}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}
export default CocktailSearch;