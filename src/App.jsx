import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from 'react';
import Log from "./components/Log";

function App() {
    const [gameTurns, setGameTurns] = useState([])
    const [activePlayer, setActivePlayer] = useState('X');

    function activePlayerHandler(row, col) {
        setActivePlayer(prev => prev === 'X' ? 'O' : 'X');
        setGameTurns(prevTurns => {
            let currentPlayer = 'X';
            // The condition checks the last player in the gameTurn state
            // If gameTurn link is greater than zero data is present
            // Each Turn is added to the beginning of the array using the spread operator
            if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
                currentPlayer = 'O';
            }

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
            <GameBoard
                onActivePlayer={activePlayerHandler}
                activeSymbol={activePlayer}
                turns={gameTurns}
            />
        </div>
        <Log />
    </main>
    );
}

export default App
