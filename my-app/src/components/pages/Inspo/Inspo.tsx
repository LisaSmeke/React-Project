import React from 'react';
import styles from './Inspo.module.css';
import inspoKeys from './inspo-keys.svg';

const Inspo = () => {
  return (
    <section className={styles['inspo-section']}>
      <header className={styles['inspo-header-container']}>
        <img className={styles['inspo-title']} src={inspoKeys} alt="Inspiration"></img>
      </header>
    </section>
  );
};

export default Inspo;
