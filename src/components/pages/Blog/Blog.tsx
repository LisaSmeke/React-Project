import BlogPosts from './BlogPosts';
import styles from './Blog.module.css';

const Blog = () => {
  return (
    <div id="blog" className={styles['blog-page']}>
      <header className={styles['blog-header-container']}>
        <h1>Blog</h1>
        <h2>Keep up with the conversation on tech and sustainability</h2>
      </header>
      <BlogPosts />
    </div>
  );
};

export default Blog;
