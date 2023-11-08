import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <main>
      <div id="game-container">
          <ol id="players">
            <Player defaultName="Player 1" symbol="X" />
            <Player defaultName="Player 2" symbol="O" />
          </ol>
          <GameBoard />
      </div>
    </main>
  )
}

export default App
