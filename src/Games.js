import React from 'react';
import Apex from './images/apexlegends.jpeg';
import Cs2 from './images/cs2.jpg';
import GOW from './images/godofwar.jpg';
import RDR from './images/rdr2.jpg';
import './Games.css';

const gameMap=
{
    Apex,
    Cs2,
    GOW,
    RDR
};

function Games( { game } ) {
  return (
    <div className="Games">
        <img className="imgGames" src={gameMap[game]}/>
    </div>
  )
}

export default Games