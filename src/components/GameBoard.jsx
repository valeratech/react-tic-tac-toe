const defaultGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function GameBoard({ onActivePlayer, activeSymbol, turns }) {

    // const [gameBoard, setGameBoard] = useState(defaultGameBoard);
    //
    // function addSymbolClickHandler(e, rowIndex, columnIndex) {
    //     e.target.disabled = true;
    //     setGameBoard(prev => {
    //         // Since there is a nested array you must spread the nested array via the map function
    //         const newGameBoard = [...prev.map(innerArray => [...innerArray])]
    //         newGameBoard[rowIndex][columnIndex] = activeSymbol;
    //         return newGameBoard;
    //     });
    //     onActivePlayer();
    // }

    let gameBoard = defaultGameBoard;
    for (const turn of turns) {
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }
    console.log(gameBoard);

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onActivePlayer(rowIndex, colIndex)} disabled={playerSymbol=== 'X' || playerSymbol === 'O'}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}

export default GameBoard;