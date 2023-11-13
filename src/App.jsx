import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import {WINNING_COMBINATIONS} from "./data/WINNING_COMBINATIONS";
import { useState } from 'react';
import Log from "./components/Log";


const defaultGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function deriveActivePlayer(gameTurns) {
    let currentPlayer = 'X';
    // The condition checks the last player in the gameTurn state
    // If gameTurn link is greater than zero data is present
    // Each Turn is added to the beginning of the array using the spread operator
    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O';
    }
    return currentPlayer;
}


function App() {
    const [gameTurns, setGameTurns] = useState([])
    // const [activePlayer, setActivePlayer] = useState('X');

    const activePlayer = deriveActivePlayer(gameTurns);

    let gameBoard = defaultGameBoard;

    for (const turn of gameTurns) {
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }

    let winner;

    for (const combination of WINNING_COMBINATIONS) {
        const squareOne = gameBoard[combination[0].row][combination[0].column];
        const squareTwo = gameBoard[combination[1].row][combination[1].column];
        const squareThree = gameBoard[combination[2].row][combination[2].column];
        if (squareOne !== null && squareOne === squareTwo && squareOne === squareThree) {
            winner = <p>Winner is {activePlayer}</p>
        }
    }

    function activePlayerHandler(row, col) {
        // setActivePlayer(prev => prev === 'X' ? 'O' : 'X');
        setGameTurns(prevTurns => {
            // let currentPlayer = 'X';
            // // The condition checks the last player in the gameTurn state
            // // If gameTurn link is greater than zero data is present
            // // Each Turn is added to the beginning of the array using the spread operator
            // if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
            //     currentPlayer = 'O';
            // }

            const currentPlayer = deriveActivePlayer(prevTurns);

            const updateTurns = [
                {
                    square: {
                        row,
                        col
                        },
                    player: currentPlayer
                },
                ...prevTurns
            ];
            return updateTurns;
        })
    }

    return (
        <main>
        <div id="game-container">
            <ol id="players" className="highlight-player">
                <Player isActive={activePlayer === 'X'} defaultName="Player 1" symbol="X" />
                <Player isActive={activePlayer === 'O'} defaultName="Player 2" symbol="O" />
            </ol>
            {winner && winner}
            <GameBoard
                onActivePlayer={activePlayerHandler}
                board={gameBoard}
            />
        </div>
        <Log turns={gameTurns} />
    </main>
    );
}

export default App
