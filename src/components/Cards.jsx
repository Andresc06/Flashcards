import { useState } from 'react';
import '../App.css';
import GuessForm from './GuessForm';

const cards = [
  {
    country: 'Japan',
    capital: 'Tokyo',
    region: 'Asia',
    flag: 'https://flagcdn.com/w320/jp.png',
  },
  {
    country: 'Brazil',
    capital: 'Brasilia',
    region: 'South America',
    flag: 'https://flagcdn.com/w320/br.png',
  },
  {
    country: 'Canada',
    capital: 'Ottawa',
    region: 'North America',
    flag: 'https://flagcdn.com/w320/ca.png',
  },
  {
    country: 'Kenya',
    capital: 'Nairobi',
    region: 'Africa',
    flag: 'https://flagcdn.com/w320/ke.png',
  },
  {
    country: 'France',
    capital: 'Paris',
    region: 'Europe',
    flag: 'https://flagcdn.com/w320/fr.png',
  },
  {
    country: 'Australia',
    capital: 'Canberra',
    region: 'Oceania',
    flag: 'https://flagcdn.com/w320/au.png',
  },
  {
    country: 'Mexico',
    capital: 'Mexico City',
    region: 'North America',
    flag: 'https://flagcdn.com/w320/mx.png',
  },
  {
    country: 'Egypt',
    capital: 'Cairo',
    region: 'Africa',
    flag: 'https://flagcdn.com/w320/eg.png',
  },
];

const getCardClass = (region) => {
  if (region === 'Asia') return 'asia';
  if (region === 'South America' || region === 'North America') return 'america';
  if (region === 'Africa') return 'africa';
  if (region === 'Europe') return 'europe';
  return 'oceania';
};

const shuffleCards = (list) => {
  const nextList = [...list];

  for (let index = nextList.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [nextList[index], nextList[swapIndex]] = [nextList[swapIndex], nextList[index]];
  }

  return nextList;
};

const Cards = ({ deckTitle }) => {
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState(null);

  const currentCard = cards[cardIndex];

  const resetGuess = () => {
    setGuess('');
    setFeedback(null);
  };

  const handleCardClick = () => {
    setIsFlipped((previousValue) => !previousValue);
  };

  const handleCardKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCardClick();
    }
  };

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const handleShuffle = () => {
    setActiveCards((currentCards) => shuffleCards(currentCards));
    setCardIndex(0);
    setIsFlipped(false);
    resetGuess();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const cleanGuess = guess.trim().toLowerCase();
    const cleanAnswer = currentCard.capital.toLowerCase();

    if (!cleanGuess) {
      setFeedback({ type: 'wrong', text: 'Type a guess first.' });
      return;
    }

    if (cleanGuess === cleanAnswer) {
      setFeedback({ type: 'correct', text: 'Correct!' });
      return;
    }

    setFeedback({ type: 'wrong', text: `Not quite. ${currentCard.capital} is correct.` });
  };

  const handleNextCard = () => {
    if (!activeCards.length || cardIndex === activeCards.length - 1) {
      return;
    }

    setCardIndex(cardIndex + 1);
    setIsFlipped(false);
    resetGuess();
  };

  const handlePrevCard = () => {
    if (cardIndex === 0) {
      return;
    }

    setCardIndex(cardIndex - 1);
    setIsFlipped(false);
    resetGuess();
  };

  return (
    <section className="board">
      <p className="set-name">{deckTitle}</p>
      <div className="nav-row">
        <button
          type="button"
          className="nav"
          onClick={handlePrevCard}
          disabled={cardIndex === 0}
        >
          Back
        </button>
        <span className="count">
          Card {cardIndex + 1} of {activeCards.length}
        </span>
        <button
          type="button"
          className="nav"
          onClick={handleNextCard}
          disabled={cardIndex === activeCards.length - 1}
        >
          Next
        </button>
        <button type="button" className="nav shuffle" onClick={handleShuffle}>
          Shuffle
        </button>
      </div>
      <div
        className={`card ${getCardClass(currentCard.region)} ${isFlipped ? 'flip' : ''}`}
        onClick={handleCardClick}
        onKeyDown={handleCardKeyDown}
        role="button"
        tabIndex={0}
      >
        <div className="inner">
          <div className="face front">
            <span className="pill">Front</span>
            <img className="flag" src={currentCard.flag} alt={`${currentCard.country} flag`} />
            <h2>{currentCard.country}</h2>
            <p>Click to reveal the capital.</p>
            <GuessForm
              guess={guess}
              feedback={feedback}
              onGuessChange={handleGuessChange}
              onSubmit={handleSubmit}
            />
          </div>

          <div className="face back">
            <span className="pill">Back</span>
            <div className="mark">Capital</div>
            <h2>{currentCard.capital}</h2>
            <p>
              {currentCard.country} is in {currentCard.region}.
            </p>
          </div>
        </div>
      </div>

      <div className="controls">
        <p className="hint">Category: {currentCard.region}</p>
      </div>
    </section>
  );
};

export default Cards;