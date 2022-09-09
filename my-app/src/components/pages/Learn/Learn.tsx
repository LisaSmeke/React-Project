import React from 'react';
import styles from './Learn.module.css';
import learnKeys from './learn-keys.svg';
import LearnHtml from './LearnHtml';
import LearnCss from './LearnCss';

const Learn = () => {
  return (
    <section id="learn" className={styles['learn-section']}>
      <header className={styles['learn-header-container']}>
        <img className={styles['learn-title']} src={learnKeys} alt="Learn"></img>
      </header>

      <div className={styles['learn-body']}>
        <h1>Interested in learning Software Development?</h1>
        <h2>
          Get started by watching videos, reading documentation and practicing with our curated
          compilation of resources!
        </h2>
      </div>
      <LearnHtml />
      <LearnCss />
    </section>
  );
};

export default Learn;
