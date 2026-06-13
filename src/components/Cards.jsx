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

const Cards = () => {

    // Initialize the card index to a random value
    const [cardIndex, setCardIndex] = useState(() => Math.floor(Math.random() * cards.length));
    const currentCard = cards[cardIndex];

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
        <button
          type="button"
        >
          <div>
            <div>
              <span>Front</span>
              <img className="flag" src={currentCard.flag} alt={`${currentCard.country} flag`} />
              <h2>{currentCard.country}</h2>
              <p>Click to reveal the capital.</p>
            </div>

            <div>
              <span>Back</span>
              <div>Capital</div>
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