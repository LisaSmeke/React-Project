import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC<{}> = () => {
  return (
    <footer className={styles['footer-container']}>
      <p>&copy; 2022 Lisa Smeke</p>
      <a href="#">BACK TO TOP</a>
    </footer>
  );
};

export default Footer;
