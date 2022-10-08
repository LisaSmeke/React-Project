import { Link, Outlet } from 'react-router-dom';
import learnKeys from './learn-keyboard.svg';
import LearnIcons from './LearnIcons/LearnIcons';
import developer from '../Learn/developer.svg';
import styles from './Learn.module.css';

const Learn = () => {
  return (
    <section id="learn" className={styles['learn-section']}>
      <header className={styles['learn-header-container']}>
        <Link to="/learn">
          <img className={styles['learn-title']} src={learnKeys} alt="Learn"></img>
        </Link>
      </header>

      <div className={styles['learn-content']}>
        <h2 className={styles['custom-learn-intro']}>
          Select a topic and start learning with our curated compilation of resources
        </h2>
        <LearnIcons />
        <div>
          <Outlet />
        </div>

        <div className={styles['contests']}>
          <h2 className={styles['contests-intro']}>Already feeling like a pro?</h2>
          <p>Use your skills to solve real-world problems in a coding contest!</p>
          <div className={styles['developer-container']}>
            <img
              className={styles['developer']}
              src={developer}
              alt="Developer working with several screens"
            ></img>
            <Link className={styles['router-link']} to="contests">
              <button className={styles['contests-btn']}>Show contests</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learn;
