import { useState } from "react";

function Player({defaultName, symbol, isActive}) {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(defaultName);

    function editClickHandler(e) {
        setIsEditing(prev => !prev);
    }

    function editNameChangeHandler(e) {
        setPlayerName(e.target.value);
    }

    let playerNameSpan;
    isEditing ? playerNameSpan = <input onChange={editNameChangeHandler}type="text" value={playerName} required />
        : playerNameSpan = <span className="player-name">{playerName}</span>;

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {playerNameSpan}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={editClickHandler}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}

export default Player;
