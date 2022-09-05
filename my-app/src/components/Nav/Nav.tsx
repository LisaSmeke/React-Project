import React from 'react';
import styles from '../Nav.module.css';

const Nav: React.FC<{}> = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles['logo-container']}>
        <span>Logo</span>
      </div>
    </nav>
  );
};

export default Nav;
