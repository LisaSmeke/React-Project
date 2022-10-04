import React from 'react';
import styles from './Inspo.module.css';
import inspoKeys from './inspo-keys.svg';
import inspoTitle from './inspo-title.svg';
import CompanyProfiles from './Companies/Companies';

const Inspo = () => {
  return (
    <section id="inspo" className={styles['inspo-section']}>
      <header className={styles['inspo-header-container']}>
        <img className={styles['inspo-title']} src={inspoTitle} alt="Inspiration"></img>
      </header>

      <div className={styles['inspo-text']}>
        <h2>Get inspiration from companies that are coding for a better world.</h2>
        <CompanyProfiles />
      </div>
    </section>
  );
};

export default Inspo;
