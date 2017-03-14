import React, { Component } from 'react';
import './App.css';


class Square extends React.Component {

    render() {
        console.log(this.props.data.key);
        return (
            <button key={this.props.data.key} className="square">
                {/* TODO */}
            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        var data = {key : i};
        return <Square data={data} />;
    }
    render() {
        return (
            <div>
                
                {(()=>{
                    let container =[];
                    var j = 0;

                    for (var i = 0; i < 8; i++) {

                        container.push(<div key={"_"+i} className="board-row">
                            {this.renderSquare(j++)}
                            {this.renderSquare(j++)}
                            {this.renderSquare(j++)}
                            {this.renderSquare(j++)}
                            {this.renderSquare(j++)}
                        </div>);

                    };
                    return container;
                })()}

            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

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
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default Game;
