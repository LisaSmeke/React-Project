import { BlogContentProps } from './BlogTypes';

import styles from './BlogPosts.module.css';

import * as data from './posts.json';
const postsDataString = JSON.stringify(data);
const postsData = JSON.parse(postsDataString);

const Posts = (props: BlogContentProps) => {
  const { posts } = props.content;

  return (
    <div className={styles['posts-container']}>
      {posts.map((post) => (
        <div className={styles['post-wrapper']} key={post.id}>
          <div className={styles['img-container']}>
            <img className={styles['post-img']} src={post.img} alt=""></img>
          </div>
          <p className={styles['post-date']}>{post.date}</p>
          <h3 className={styles['post-title']}>{post.title}</h3>
          <p className={styles['post-body']}>{post.body}</p>
          <div
            className={styles['share-btn']}
            data-href={post.href}
            data-layout="button"
            data-size="small"
          >
            <a target="_blank" rel="noreferrer" href={post.share} className="fb-share-button">
              Share
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

const BlogPosts = () => {
  return (
    <div>
      <Posts content={postsData} />
    </div>
  );
};

export default BlogPosts;
