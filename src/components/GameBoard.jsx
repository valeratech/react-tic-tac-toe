const defaultGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function GameBoard() {

    return (
        <ol id="game-board">
            {defaultGameBoard.map((row, rowIndex) => (
                <li key={rowIndex+2}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex+1}>
                                <button >{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}

export default GameBoard;