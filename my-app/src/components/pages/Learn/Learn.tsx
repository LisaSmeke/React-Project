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

      <div className={styles['learn-content']}>
        <h1 className={styles['learn-header-text']}>
          Start learning Software Development with our curated compilation of resources.
        </h1>
        <LearnHtml />
        <LearnCss />
      </div>
    </section>
  );
};

export default Learn;
