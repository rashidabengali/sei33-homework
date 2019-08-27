import React from 'react';
import ReactDom from 'react-dom';
import'./index.css';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

class Square extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        value:null,
      };
  }
  render() {
    return (
      <button
        className="square"
        onClick={() => this.state({value: 'X'})}
      >
        {this.props.value}
      </button>
    );
  }
}
