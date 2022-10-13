import { Link, Outlet } from 'react-router-dom';

import htmlLogo from '../LearnIcons/html-color.svg';
import LearnHtmlVideos from './HtmlVideos';
import LearnHtmlDocs from './HtmlDocs';
import LearnHtmlPractice from './HtmlPractice';

import styles from '../LearnResources.module.css';
import React from 'react';

const LearnHtml = () => {
  return (
    <section>
      <img className={styles['active-learn-icon']} src={htmlLogo} alt=""></img>
      <div>
        <div>
          <Link to="html/videos">Html Videos</Link>
        </div>
        <div>
          <Link to="html/docs">Html Documentation</Link>
        </div>
        <div>
          <Link to="html/practice">Html Practice</Link>
        </div>
        <Outlet />
      </div>
    </section>
  );
};
export default LearnHtml;
