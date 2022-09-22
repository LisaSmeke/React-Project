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
        <div className={styles['contact-info']}>
          <h3>Questions, comments, suggestions?</h3>
          <p>Feel free to reach out!</p>
        </div>
        <ul className={styles['contact-icons']}>
          <li className={styles['tel']}>
            <a href="tel:+46790510137">
              <i className={styles['fa-solid fa-phone fa-xl']}></i>
            </a>
          </li>
          <li className={styles['mail']}>
            <a href="mailto:lisasmeke@gmail.com?&subject=Hi%20Lisa!...">
              <i className={styles['fa-solid fa-at fa-xl']}></i>
            </a>
          </li>
          <li className={styles['linkedin']}>
            <a href="https://linkedin.com/in/lisa-smeke" target="_blank" rel="noreferrer">
              <i className={styles['fa-solid fa-linkedin fa-xl']}></i>
            </a>
          </li>
          <li className={styles['github']}>
            <a href="https://github.com/LisaSmeke" target="_blank" rel="noreferrer">
              <i className={styles['fa-solid fa-github fa-xl']}></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
