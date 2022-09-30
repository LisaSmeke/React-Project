import React from 'react';
import learnKeys from './learn-keys.svg';
import CustomLearn from './CustomLearn/CustomLearn';
import LearnHtml from './LearnHtml';
import LearnCss from './LearnCss';
import LearnJs from './LearnJs';
import Contests from './Practice/Contests';
import styles from './Learn.module.css';

const Learn = () => {
  return (
    <section id="learn" className={styles['learn-section']}>
      <header className={styles['learn-header-container']}>
        <img className={styles['learn-title']} src={learnKeys} alt="Learn"></img>
      </header>

      <div className={styles['learn-content']}>
        <h2 className={styles['learn-intro']}>
          Select a topic and start learning with our curated compilation of resources
        </h2>
        <CustomLearn />
        <LearnHtml />
        <LearnCss />
        <LearnJs />
        <Contests />
      </div>
    </section>
  );
};

export default Learn;
