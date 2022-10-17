import styles from './Blog.module.css';

const Blog = () => {
  return (
    <section id="blog" className={styles['blog-section']}>
      <header className={styles['blog-header-container']}>
        <h1>Blog</h1>
      </header>

      <div className={styles['blog-body']}>
        <h1>Keep up with the conversation on tech and sustainability</h1>
        <div className={styles['article-container']}>
          <h2>Blog Post Title</h2>
          <h3>Date goes here</h3>
          <p>Blog content goes here</p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
