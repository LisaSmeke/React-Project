import React from 'react';
import styles from './Inspo.module.css';
import inspoKeys from './inspo-keys.svg';

const Inspo = () => {
  return (
    <section id="inspo" className={styles['inspo-section']}>
      <header className={styles['inspo-header-container']}>
        <img className={styles['inspo-title']} src={inspoKeys} alt="Inspiration"></img>
      </header>

      <div className={styles['inspo-body']}>
        <h1>Organizations that inspire through their innovations</h1>
      </div>
    </section>
  );
};

export default Inspo;
