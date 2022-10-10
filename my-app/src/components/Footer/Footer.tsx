import React from 'react';
import styles from './Footer.module.css';
import instagram from '../../icons/instagram.svg';
import github from '../../icons/github.svg';
import linkedin from '../../icons/linkedin-in.svg';

const Footer = () => {
  return (
    <footer className={styles['footer-container']}>
      <div className={styles['footer-wrapper']}>
        <p>&copy; 2022 Lisa Smeke</p>
        <div className={styles['so-me-icons']}>
          <a href="https://linkedin.com/in/lisasmeke" target="_blank" rel="noreferrer">
            <img className={styles['icon-in']} src={linkedin} alt="LinkedIn" width="30px"></img>
          </a>
          <a href="https://github.com/LisaSmeke" target="_blank" rel="noreferrer">
            <img className={styles['icon-github']} src={github} alt="GitHub" width="30px"></img>
          </a>
          <a href="https://www.instagram.com/lisasmeke/" target="_blank" rel="noreferrer">
            <img className={styles['icon-ig']} src={instagram} alt="Instagram" width="30px"></img>
          </a>
        </div>
        <a href="#top">BACK TO TOP</a>
      </div>
    </footer>
  );
};

export default Footer;
