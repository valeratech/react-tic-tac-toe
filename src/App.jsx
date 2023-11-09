import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from 'react';

function App() {
    const [activePlayer, setActivePlayer] = useState('X');

    function activePlayerHandler() {
        setActivePlayer(prev => prev === 'X' ? 'O' : 'X');
        return activePlayer;
    }

    return (
        <main>
        <div id="game-container">
            <ol id="players" className="highlight-player">
                <Player isActive={activePlayer === 'X'} defaultName="Player 1" symbol="X" />
                <Player isActive={activePlayer === 'O'} defaultName="Player 2" symbol="O" />
            </ol>
            <GameBoard onActivePlayer={activePlayerHandler} activeSymbol={activePlayer} />
        </div>
    </main>
    );
}

export default App
