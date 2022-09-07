import React from 'react';
import styles from './Blog.module.css';
import blogKeys from './blog-keys.svg';

const Blog = () => {
  return (
    <section className={styles['blog-section']}>
      <header className={styles['blog-header-container']}>
        <img className={styles['blog-title']} src={blogKeys} alt="Blog"></img>
      </header>
    </section>
  );
};

export default Blog;
