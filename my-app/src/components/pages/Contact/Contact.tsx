import React from 'react';
import styles from './Contact.module.css';
import contactKeys from './contact-keys.svg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedin } from '@fortawesome/free-solid-svg-icons';
import phone from '../../../icons/phone-solid.svg';
import mail from '../../../icons/envelope-solid.svg';
import github from '../../../icons/github.svg';
import linkedin from '../../../icons/linkedin-in.svg';

const Contact = () => {
  return (
    <section id="contact" className={styles['contact-section']}>
      <header className={styles['contact-header-container']}>
        <img className={styles['contact-title']} src={contactKeys} alt="Contact"></img>
      </header>

      <div className={styles['contact-body']}>
        <div className={styles['contact-text']}>
          <h3>Questions, comments, suggestions?</h3>
          <p>Feel free to reach out!</p>
        </div>
        <div className={styles['contact-icons']}>
          <div className={styles['icon-container']}>
            <a href="tel:+46790510137">
              <img className={styles['icon-phone']} src={phone} alt="Phone"></img>
            </a>
          </div>
          <div className={styles['icon-container']}>
            <a href="mailto:lisasmeke@gmail.com?&subject=Hi%20Lisa!...">
              <img className={styles['icon-mail']} src={mail} alt="Mail"></img>
            </a>
          </div>
          <div className={styles['icon-container']}>
            <a href="https://linkedin.com/in/lisasmeke" target="_blank" rel="noreferrer">
              <img className={styles['icon-in']} src={linkedin} alt="LinkedIn"></img>
            </a>
          </div>
          <div className={styles['icon-container']}>
            <a href="https://github.com/LisaSmeke" target="_blank" rel="noreferrer">
              <img className={styles['icon-github']} src={github} alt="GitHub"></img>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
