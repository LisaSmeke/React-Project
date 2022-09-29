import React from 'react';
import styles from './Inspo.module.css';
import inspoKeys from './inspo-keys.svg';
import CompanyProfiles from './Companies/Companies';

const Inspo = () => {
  return (
    <section id="inspo" className={styles['inspo-section']}>
      <header className={styles['inspo-header-container']}>
        <img className={styles['inspo-title']} src={inspoKeys} alt="Inspiration"></img>
      </header>

      <div className={styles['companies']}>
        <h2 className={styles['subtitle']}>
          Get inspired by companies that are coding a better world for all.
        </h2>
        <CompanyProfiles />
      </div>
    </section>
  );
};

export default Inspo;
