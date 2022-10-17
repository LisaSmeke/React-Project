import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Nav.module.css';
import icLogo from './ic-logo.svg';
import * as data from './pages.json';
const pagesString = JSON.stringify(data);
const pages = JSON.parse(pagesString).pages;

type Page = {
  id: string;
  label: string;
  page: string;
};

const Pages: React.FC<{ pages: Page[] }> = ({ pages }) => {
  return (
    <div className={styles['pages-wrapper']}>
      {pages.map((page: Page) => {
        return (
          <Link key={page.id} className={styles['router-link']} to={page.page}>
            <div className={styles['link-container']}>
              <p className={styles['link']}>{page.label}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

const Nav: React.FC<{}> = () => {
  return (
    <nav className={styles['navbar']}>
      <div className={styles['logo-container']}>
        <Link to="/">
          <img className={styles.logo} src={icLogo} alt="Impact Coding logo" />
        </Link>
      </div>
      <Pages pages={pages} />
    </nav>
  );
};

export default Nav;
