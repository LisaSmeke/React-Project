import React from 'react';
import styles from './Learn.module.css';
import learnKeys from './learn-keys.svg';

const Learn = () => {
  return (
    <section className={styles['learn-section']}>
      <header className={styles['learn-header-container']}>
        <img className={styles['learn-title']} src={learnKeys} alt="Learn"></img>
      </header>
    </section>
  );
};

export default Learn;
