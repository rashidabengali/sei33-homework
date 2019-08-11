import React from 'react';
import Game from './components/game/Game';
import './App.css';

class App extends React.Component {
  restartGame() {
    alert('Restart');
  }

  render() {
    return (
      <div className="App">

        <Game />

      </div>
    );

  }

}

export default App;
