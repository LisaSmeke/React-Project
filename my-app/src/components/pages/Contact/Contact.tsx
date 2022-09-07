import React from 'react';
import styles from './Contact.module.css';
import contactKeys from './contact-keys.svg';

const Contact = () => {
  return (
    <section id="contact" className={styles['contact-section']}>
      <header className={styles['contact-header-container']}>
        <img className={styles['contact-title']} src={contactKeys} alt="Contact"></img>
      </header>

      <div className={styles['contact-body']}>
        <h1>Feel free to reach out anytime!</h1>
      </div>
    </section>
  );
};

export default Contact;
