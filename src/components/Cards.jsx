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

    // Function to get a random index that is different from the current index
    const handleNextCard = () => {
        setCardIndex((previousIndex) => getRandomIndex(previousIndex));
    };

    // Function to get a random index that is different from the current index
    const getRandomIndex = (currentIndex) => {
        if (cards.length <= 1) {
            return 0;
        }

        let nextIndex = currentIndex;

        while (nextIndex === currentIndex) {
            nextIndex = Math.floor(Math.random() * cards.length);
        }

        return nextIndex;
    };

  return (
    <section className="board">
      <p className="set-name">{deckTitle}</p>
      <button
        className={`card ${getCardClass(currentCard.region)} ${isFlipped ? 'flip' : ''}`}
        onClick={handleCardClick}
        type="button"
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