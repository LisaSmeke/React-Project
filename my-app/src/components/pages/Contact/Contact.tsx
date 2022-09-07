import React from 'react';
import styles from './Contact.module.css';
import contactKeys from './contact-keys.svg';

const Contact = () => {
  return (
    <section className={styles['contact-section']}>
      <header className={styles['contact-header-container']}>
        <img className={styles['contact-title']} src={contactKeys} alt="Contact"></img>
      </header>
    </section>
  );
};

export default Contact;
