const DeckHeader = ({ title, description, totalCards }) => {
  return (
    <section className="header">
      <p className="tag">Flashcard Study Deck</p>
      <h1>{title}</h1>
      <p className="description">{description}</p>
      <p className="total">Total cards: {totalCards}</p>
    </section>
  );
};

export default DeckHeader;