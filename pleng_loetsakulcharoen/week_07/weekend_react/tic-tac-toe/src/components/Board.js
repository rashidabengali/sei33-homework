import React, { Component } from 'react';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null)
    };
  }
  renderSquare(i) {
    return <square value={i}/>
  }
}

export default Board
