import React from 'react';

class Header extends React.Component {
  render() {
    const { scorePlayerX, scorePlayerO } = this.props;
    return (
      <header>
        <h1 class="game-title">Tic Tac Toe</h1>
        <div class="score-result">
          <h2 id="scoreX">Player X = {scorePlayerX}</h2>
          <h2 id="scoreO">Player O = {scorePlayerO}</h2>
        </div>

      </header>

    )
  }
}

export default Header;