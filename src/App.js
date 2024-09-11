import './App.css';
import { useState } from 'react';
import Games from './Games';

function setRandomGames()
{
  const gamesArr = ['Apex', 'Cs2', 'GOW', 'RDR'];
  return gamesArr[Math.floor(Math.random()*gamesArr.length)];
}

function App() {
  const [games, setGames] = useState([]);

  const handleClick = () => {
    setGames([...games, setRandomGames()]);
  };

  const gamesList = games.map((game,index) => {
    return <Games key={index} game={game}/>
  });

  return (
    <div className="App">

      <button className="buttonApp" onClick={handleClick}>Add a Game</button>
      <div className="gamesList">
        {gamesList}
      </div>
    </div>
  );
}

export default App;
