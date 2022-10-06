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
          <Link className={styles['router-link']} to={page.page}>
            <div key={page.id} className={styles['link-container']}>
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
    <nav className={styles.navbar}>
      <a href="#top" className={styles['logo-container']}>
        <div>
          <Link to="/">
            <img className={styles.logo} src={icLogo} alt="Impact Coding logo" />
          </Link>
        </div>
      </a>
      <Pages pages={pages} />
    </nav>
  );
};

export default Nav;
