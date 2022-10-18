import { VideoContentProps } from '../LearnTypes';

import styles from '../LearnResources.module.css';

import * as data from './css.json';
const cssDataString = JSON.stringify(data);
const cssData = JSON.parse(cssDataString);

const CssVideos = (props: VideoContentProps) => {
  const { videos } = props.content;

  return (
    <section className={styles['resources']}>
      <h1 className={styles['css-h1']}>CSS Video Tutorials</h1>
      <div className={styles['resource-cards-wrapper']}>
        {videos.map((video) => (
          <div className={styles['css-resource-card']} key={video.id}>
            <div className={styles['resource-header']}>
              <h3 className={styles['resource-name']}>{video.title}</h3>
            </div>
            <div className={styles['resource-details']}>
              <p>{video.by}</p>
            </div>
            <a href={video.href} target="_blank" rel="noreferrer">
              <div className={styles['img-container']}>
                <img className={styles['resource-img']} src={video.img} alt=""></img>
                <p className={styles['video-description']}>{video.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

const LearnCssVideos = () => {
  return (
    <div>
      <CssVideos content={cssData} />
    </div>
  );
};

export default LearnCssVideos;
