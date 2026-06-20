import './App.css';
import DeckHeader from './components/DeckHeader';
import Cards from './components/Cards';
import cards from './data/cards';

const App = () => {
  const deckTitle = 'Country to Capital';
  const deckDescription = 'Study countries in a randomized order, flip each card to test yourself, and use the next button to pull a fresh card.';


  return (
    <main className="app">
      <DeckHeader
        title={deckTitle}
        description={deckDescription}
        totalCards={cards.length}
      />

      <Cards deckTitle={deckTitle} />
    </main>
  );
};

export default App;