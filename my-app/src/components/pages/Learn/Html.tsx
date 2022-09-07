import React from 'react';
import styles from './Learn.module.css';
import * as data from './html.json';
const htmlResourcesString = JSON.stringify(data);
const videos = JSON.parse(htmlResourcesString).videos;

type Video = {
  id: string;
  title: string;
  href: string;
  description: string;
};

const HtmlVideos: React.FC<{ videos: Video[] }> = ({ videos }) => {
  return (
    <div className={styles['videos-container']}>
      {videos.map((video: Video) => {
        return (
          <div key={video.id}>
            <h4 className={styles['video-title']}>{video.title}</h4>
            <a className={styles.link} href={video.href}>
              {video.description}
            </a>
          </div>
        );
      })}
    </div>
  );
};

const LearnHtml = () => {
  return (
    <section className={styles['learn-html-container']}>
      <h1>Learn HTML</h1>

      <div className={styles['learn-html-videos']}>
        <h2>HTML Videos</h2>
        <h3>Watch these videos to get you started</h3>
        <HtmlVideos videos={videos} />
      </div>

      <div className={styles['learn-html-doc']}>
        <h2>HTML Documentation</h2>
        <h3>Read this documentation to get you started</h3>
      </div>

      <div className={styles['learn-html-practice']}>
        <h2>HTML Practice</h2>
        <h3>Practice these exercise. Without practice, there's no real learning!</h3>
      </div>
    </section>
  );
};

export default LearnHtml;
