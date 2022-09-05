import React from 'react';
import styles from './Nav.module.css';
import logo from './ic-logo-h.svg';
import * as data from './links.json';
const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;

type Link = {
  label: string;
  href: string;
};

const Links: React.FC<{ links: Link[] }> = ({ links }) => {
  return (
    <div className={styles['links-container']}>
      {links.map((link: Link) => {
        return (
          <div key={link.href} className={styles['link']}>
            <a className={styles.link} href={link.href}>
              {link.label}
            </a>
          </div>
        );
      })}
    </div>
  );
};

const Nav: React.FC<{}> = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles['logo-container']}>
        <img className={styles.logo} src={logo} alt="Impact Coding logo" />
      </div>
      <Links links={links} />
    </nav>
  );
};

export default Nav;
