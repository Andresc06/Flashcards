const GuessForm = ({ guess, feedback, onGuessChange, onSubmit }) => {
  return (
    <form className="guess-form" onSubmit={onSubmit} onClick={(event) => event.stopPropagation()}>
      <label className="guess-label" htmlFor="guess">
        Your guess
      </label>
      <div className="guess-row">
        <input
          id="guess"
          className="guess-input"
          type="text"
          value={guess}
          onChange={onGuessChange}
          placeholder="Type the capital"
        />
        <button className="submit" type="submit">
          Submit
        </button>
      </div>
      {feedback && (
        <p className={`msg ${feedback.type}`} role="status">
          {feedback.text}
        </p>
      )}
    </form>
  );
};

export default GuessForm;