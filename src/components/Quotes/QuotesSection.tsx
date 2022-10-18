import { useState } from 'react';
import Quotes from './Quotes';
import OneQuote from './OneQuote';

const QuotesSection = () => {
  const [quotes, setQuotes] = useState(false);
  const [randomQuote, setRandomQuote] = useState(false);

  const showRandomQuote = () => {
    setRandomQuote(true);
  };
  const hideRandomQuote = () => {
    setRandomQuote(false);
  };
  const showAllQuotes = () => {
    setQuotes(true);
  };
  const hideAllQuotes = () => {
    setQuotes(false);
  };

  return (
    <section>
      <div>
        <button onClick={showRandomQuote}> Random quote</button>
        {randomQuote && (
          <div className="RandomQuoteWrapper">
            <div>
              <OneQuote />
            </div>
            <button onClick={hideRandomQuote}>X</button>
          </div>
        )}
      </div>

      <div>
        <button onClick={showAllQuotes}> All quotes</button>

        {quotes && (
          <div className="AllQuotesWrapper">
            <div>
              <Quotes />
            </div>
            <button onClick={hideAllQuotes}>X</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuotesSection;
