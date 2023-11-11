function Log({turns}){
    return (
        <ol id="log">
            {turns.map(turn => (
                <li key={`${turn.square.row}${turn.square.col}`}>
                    {/*Create a log entry statement each time a square is selected*/}
                    {turn.player} selected {turn.square.row},{turn.square.col}
                </li>
            ))}
        </ol>
    )
}

export default Log;