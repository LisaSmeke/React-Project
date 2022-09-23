import React from 'react';
import learnKeys from './learn-keys.svg';
import CustomLearn from './CustomLearn/CustomLearn';
import LearnHtml from './LearnHtml';
import LearnCss from './LearnCss';
import Contests from './Practice/Contests';
import styles from './Learn.module.css';

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
        <CustomLearn />
        <LearnHtml />
        <LearnCss />
        <Contests />
      </div>
    </section>
  );
};

export default Learn;
