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
    <main>
      <section className="board">
        <p className="deck-label">{deckTitle}</p>
        <button
          className={`card ${isFlipped ? 'is-flipped' : ''}`}
          onClick={handleCardClick}
          type="button"
        >
          <div className="card-inner">
            <div className="card-face card-front">
              <span className="card-pill">Front</span>
              <img className="flag" src={currentCard.flag} />
              <h2>{currentCard.country}</h2>
              <p>Click to reveal the capital.</p>
            </div>

            <div className="card-face card-back">
              <span className="card-pill">Back</span>
              <div className="capital-mark">Capital</div>
              <h2>{currentCard.capital}</h2>
              <p>{currentCard.country} is in {currentCard.region}.</p>
            </div>
          </div>
        </button>

        <div className="controls">
          <p className="hint">Category: {currentCard.region}</p>
          <button type="button" className="next-button" onClick={handleNextCard}>
            Next random card
          </button>
        </div>
      </section>
    </main>
  );
};

export default Cards;