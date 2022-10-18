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
          <div
            className="fb-share-button"
            data-href="https://girlswhocode.com/about-us"
            data-layout="button"
            data-size="large"
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgirlswhocode.com%2Fabout-us&amp;src=sdkpreparse"
              className="fb-share-button"
            >
              Share FaceBook
            </a>
          </div>
          {/* <div
            data-href="https://girlswhocode.com/programs"
            data-layout="button_count"
            data-size="small"
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgirlswhocode.com%2Fprograms&amp;src=sdkpreparse"
            >
              FB Share
            </a>
          </div>

          <script src="https://platform.linkedin.com/in.js" type="text/javascript">
            lang: en_US
          </script>
          <script type="IN/Share" data-url="https://www.linkedin.com"></script>*/}
        </div>
      </div>
    </section>
  );
};

export default Blog;
