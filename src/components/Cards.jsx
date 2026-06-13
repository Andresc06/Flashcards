import { useState } from 'react';
import './App.css';

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

  return (
    <main>
      {/* Card */}
      <section className="board">
        <button
          type="button"
        >
          <div>
            <div>
              <span>Front</span>
              <img className="flag" />
              <h2>country</h2>
              <p>Click to reveal the capital.</p>
            </div>

            <div>
              <span>Back</span>
              <div>Capital</div>
              <h2>capital</h2>
              <p>descrip</p>
            </div>
          </div>
        </button>

        {/* Next button */}
        <div className="controls">
          <p className="hint">Category</p>
          <button type="button" className="next-button">
            Next random card
          </button>
        </div>
      </section>
    </main>
  );
};

export default Cards;