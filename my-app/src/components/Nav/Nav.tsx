import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import pinkLogo from './ic-pink.svg';
import * as data from './links.json';
const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;

type Link = {
  label: string;
  href: string;
};

const Links: React.FC<{ links: Link[] }> = ({ links }) => {
  return (
    <div className={styles['links-wrapper']}>
      {links.map((link: Link) => {
        return (
          <div key={link.href} className={styles['link-container']}>
            <p className={styles['link']}>{link.label}</p>
          </div>
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
          <img className={styles.logo} src={pinkLogo} alt="Impact Coding logo" />
        </div>
      </a>
      <Links links={links} />
    </nav>
  );
};

export default Nav;
