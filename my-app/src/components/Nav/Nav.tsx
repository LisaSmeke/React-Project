import React from 'react';
import styles from './Nav.module.css';
import logo from './ic-logo-h.svg';

const Nav: React.FC<{}> = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles['logo-container']}>
        <img src={logo} alt="Impact Coding logo" />
      </div>
    </nav>
  );
};

export default Nav;
