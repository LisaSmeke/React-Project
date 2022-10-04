import React from 'react';
import learnKeys from './learn-keys.svg';
import learnTitle from './learn-title.svg';
import CustomLearn from './CustomLearn/CustomLearn';
import LearnHtml from './LearnHTML/LearnHtml';
import LearnCss from './LearnCss/LearnCss';
import LearnJs from './LearnJs/LearnJs';
import Contests from './Contests/Contests';
import styles from './Learn.module.css';

const Learn = () => {
  return (
    <section id="learn" className={styles['learn-section']}>
      <header className={styles['learn-header-container']}>
        <img className={styles['learn-title']} src={learnTitle} alt="Learn"></img>
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
