import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Scoreboard from './components/Scoreboard';
import uniqid from 'uniqid';

function App(props) {

  const characters = props.characters;

  const [cards, setCards] = useState(characters);

  const [selectedCards, setSelectedCards] = useState([]);

  const [score, setScore] = useState(0);

  const [highScore, setHighScore] = useState(0);


  const createCards = cards => {
    return cards.map(card => {
      return (
        <Card title={card.title} description={card.description} 
        handleSelection={handleSelection} key={uniqid()} source={card}/>
      );
    })
  }

  const handleSelection = selection => {
    if (selectedCards.includes(selection)) {
      if (score > highScore) setHighScore(score);
      setScore(0);
      setSelectedCards([]);
    } else {
      setSelectedCards([...selectedCards, selection]);
      setScore(score + 1);
    }
    randomize();
    console.log(score, highScore, selectedCards)
  }

  const randomize = () => {
    let cardsCopy = [...cards];
    let curIndex = cardsCopy.length, randomIndex;
    while (curIndex) {
      randomIndex = Math.floor(Math.random() * curIndex)
      curIndex--;
      [cardsCopy[curIndex], cardsCopy[randomIndex]] = 
      [cardsCopy[randomIndex], cardsCopy[curIndex]];
    }
    setCards(cardsCopy);
  }
  

  return (
    <div className="App">
      <div className='header'>
        <div className='title'>South Park Memory Game</div>
        <Scoreboard score={score} highScore={highScore} />
      </div>
      <div className='cardsContainer'>
        {createCards(cards)}
      </div>
    </div>
  );
}

export default App;
