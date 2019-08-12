import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends Component {
    constructor(props) { // WHY USE PROPS as parameters here?
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }
    
    handleClick(i) {
        const squares = this.state.squares.slice(); // WHY use slice()?
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={ () => this.handleClick(i) }
            />
        );
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext? 'X' : 'O');
        }

        return (
            <div>
                <div className="status">{ status }</div>
                <div className="board-row">
                    { this.renderSquare(0) }
                    { this.renderSquare(1) }
                    { this.renderSquare(2) }
                </div>
                <div className="board-row">
                    { this.renderSquare(3) }
                    { this.renderSquare(4) }
                    { this.renderSquare(5) }
                </div>
                <div className="board-row">
                    { this.renderSquare(6) }
                    { this.renderSquare(7) }
                    { this.renderSquare(8) }
                </div>
            </div>
        );
    }
}

class Game extends Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div> { /* status */ } </div>
                    <ol> { /* TODO */ } </ol>
                </div>
            </div>
        );
    }
}

// ======================================
ReactDOM.render(
    <Game />,
    document.getElementById('root')
);


function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    console.log('----------------------');
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        console.log('i:', i, ', lines[i]:', lines[i]);
        console.log('squares[a]:', squares[a], ', a:', a)
        console.log('squares[b]:', squares[b], ', b:', b)
        console.log('squares[c]:', squares[c], ', c:', c)
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            console.log('running squares[a]: ', squares[a], ', a: ', a);
            return squares[a]; // This is run when player triggers winning codition
        }
    }
    return null;
}