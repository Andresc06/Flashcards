import { useState } from 'react';
import '../App.css';

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

    // Initialize the card index to a random value
    const [cardIndex, setCardIndex] = useState(() => Math.floor(Math.random() * cards.length));
    const currentCard = cards[cardIndex];

    // Initialize the flip state to false
    const [isFlipped, setIsFlipped] = useState(false);

    // Function to handle card click
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
      </button>

      <div className="controls">
        <p className="hint">Category: {currentCard.region}</p>
        <button type="button" className="next" onClick={handleNextCard}>
          Next random card
        </button>
      </div>
    </section>
  );
};

export default Cards;