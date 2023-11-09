import { useState } from "react";

const defaultGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function GameBoard({ onActivePlayer, activeSymbol }) {

    const [gameBoard, setGameBoard] = useState(defaultGameBoard);

    function addSymbolClickHandler(e, rowIndex, columnIndex) {
        e.target.disabled = true;
        setGameBoard(prev => {
            // Since there is a nested array you must spread the nested array via the map function
            const newGameBoard = [...prev.map(innerArray => [...innerArray])]
            newGameBoard[rowIndex][columnIndex] = activeSymbol;
            return newGameBoard;
        });
        onActivePlayer();
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={(e) => addSymbolClickHandler(e, rowIndex, colIndex)} >{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}

export default GameBoard;