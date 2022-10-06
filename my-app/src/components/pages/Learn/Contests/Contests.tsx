import { useEffect, useState } from 'react';
import styles from './Contests.module.css';

interface Contest {
  name: string;
  url: string;
  start_time: string;
  end_time: string;
  site: string;
}

export default function Contests() {
  const [data, setData] = useState<Array<Contest>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://kontests.net/api/v1/all');
        const contests = await response.json();

        setData(contests);
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
      <div className="Contests">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="Contests">
        <p>Error fetching data :(</p>
      </div>
    );
  }

  return (
    <div className={styles['contest-section']}>
      <h2>Already feeling like a pro?</h2>
      <h3>Use your skills to solve real-world problems in a coding contest!</h3>
      <button>Show me coding contests</button>

      <table className={styles['table']}>
        <tr>
          <th className={styles['th-contest']}>Contest</th>
          {/* <th className={styles['th-url']}>Url</th> */}
          <th className={styles['th-start']}>Start</th>
          <th className={styles['th-start']}>End</th>
        </tr>
      </table>
      {data.map((contest: Contest) => {
        return (
          <div key={contest.name} className={styles['contests-list']}>
            <table className={styles['table']}>
              <tr>
                <td className={styles['td-contest']}>
                  <a href={contest.url} target="_blank" rel="noreferrer">
                    {contest.name}
                  </a>
                </td>
                {/* <td className={styles['td-url']}>
                  <a href={contest.url} target="_blank" rel="noreferrer">
                    Learn more...
                  </a>
                </td> */}
                <td className={styles['td-start']}>{contest.start_time}</td>
                <td className={styles['td-end']}>{contest.end_time}</td>
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
}
