import React from 'react';
import styles from './Learn.module.css';
import learnKeys from './learn-keys.svg';

const Learn = () => {
  return (
    <section id="learn" className={styles['learn-section']}>
      <header className={styles['learn-header-container']}>
        <img className={styles['learn-title']} src={learnKeys} alt="Learn"></img>
      </header>

      <div className={styles['learn-body']}>
        <h1>Videos, documentation, and practice, practice, practice</h1>
      </div>
    </section>
  );
};

export default Learn;
