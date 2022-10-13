import { useEffect, useState } from 'react';

interface Quote {
  en: string;
  author: string;
  id: string;
}

export default function Quotes() {
  const [data, setData] = useState<Array<Quote>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://programming-quotes-api.herokuapp.com/quotes');
        const quotes = await response.json();

        setData(quotes);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="Quotes">
        <p>Loading cool programming quotes...🧑‍💻</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="Quotes">
        <p>Error fetching quotes 🙁</p>
      </div>
    );
  }

  return (
    <section>
      <div>
        {data.map((quote: Quote) => {
          return (
            <div key={quote.id}>
              <h1>{quote.en}</h1>
              <p>{quote.author}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
