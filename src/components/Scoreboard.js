import { useState, useEffect } from 'react';

function Scoreboard(props) {
    return(
        <div className='scoreboard'>
            {'Current Score: ' + props.score} <br></br>
            {'High Score: ' + props.highScore}
        </div>
    );
}

export default Scoreboard;