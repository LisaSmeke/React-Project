import { useEffect, useState } from 'react';

import styles from '../../Context/UserBar.module.css';

interface RandomQuote {
  en?: string;
  author?: string;
  id?: string;
}

export default function OneQuote() {
  const [data, setData] = useState<RandomQuote | undefined>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://programming-quotes-api.herokuapp.com/quotes/random');
        const randomQuotes = await response.json();

        setData(randomQuotes);
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
      <div className="RandomQuote">
        <p>Loading today's quote...🧑‍💻</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="RandomQuote">
        <p>Error fetching quote of the day 🙁</p>
      </div>
    );
  }

  return (
    <section>
      <div className={styles['random-quote']}>
        <div key={data?.id}>
          <p className={styles['quote']}>{data?.en}</p>
          <p className={styles['author']}>- {data?.author}</p>
        </div>
      </div>
    </section>
  );
}
