const DeckHeader = ({ title, description, totalCards }) => {
  return (
    <section className="hero">
      <p className="eyebrow">Flashcard Study Deck</p>
      <h1>{title}</h1>
      <p className="description">{description}</p>
      <p className="deck-total">Total cards: {totalCards}</p>
    </section>
  );
};

export default DeckHeader;