import { useState } from "react";

function Player({name, symbol}) {

    const [isEditing, setIsEditing] = useState(false);

    function editClickHandler(e) {
        setIsEditing(prev => !prev);
        console.log(isEditing);
    }

    let playerNameSpan;
    isEditing ? playerNameSpan = <input type="text" placeholder="Enter Name" required />
        : playerNameSpan = <span className="player-name">{name}</span>;

    return (
        <li>
            <span className="player">
              {playerNameSpan}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={editClickHandler}>Edit</button>
        </li>
    );
}

export default Player;
