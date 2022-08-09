import { useState, useEffect } from 'react';

function Card(props) {

    const handleClick = event => props.handleSelection(props.source);


    return (
        <div className='card' onClick={handleClick}>
            <img src={props.source} placeholder='image' className='character'></img>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
}

export default Card;