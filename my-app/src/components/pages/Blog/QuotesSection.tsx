import { useState } from 'react';
import Quotes from './Quotes';

const QuotesSection = () => {
  const [quotes, setQuotes] = useState(false);
  const allQuotesHandler = () => {
    setQuotes(true);
  };
  return (
    <div>
      <button onClick={allQuotesHandler}> Show all quotes</button>
      {/* <button onClick={randomQuoteHandler}> Show random quote</button> */}
      {quotes && (
        <div>
          <Quotes />
        </div>
      )}
    </div>
  );
};

export default QuotesSection;
