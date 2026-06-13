import './App.css';
import DeckHeader from './components/DeckHeader';
import Cards from './components/Cards';

const App = () => {
  const deckTitle = 'Country to Capital';
  const deckDescription = 'Study countries in a randomized order, flip each card to test yourself, and use the next button to pull a fresh card.';


  return (
    <main className="app">
      <DeckHeader
        title={deckTitle}
        description={deckDescription}
        totalCards={8}
      />

      <Cards deckTitle={deckTitle} />
    </main>
  );
};

export default App;