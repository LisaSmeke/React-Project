import styles from './Blog.module.css';
import blogKeys from './blog-keyboard.svg';
import QuotesSection from './QuotesSection';
import LearnHtmlVideos from '../Learn/Html/HtmlVideos';

const Blog = () => {
  return (
    <section id="blog" className={styles['blog-section']}>
      <header className={styles['blog-header-container']}>
        <img className={styles['blog-title']} src={blogKeys} alt="Blog"></img>
      </header>

      <LearnHtmlVideos />

      <div className={styles['blog-body']}>
        <h1>Keep up with the conversation on tech and sustainability</h1>
        <div className={styles['article-container']}>
          <h2>Blog Post Title</h2>
          <h3>Date goes here</h3>
          <p>Blog content goes here</p>
        </div>
      </div>
      <QuotesSection />
    </section>
  );
};

export default Blog;
