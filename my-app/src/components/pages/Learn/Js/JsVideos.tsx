import { VideoContentProps } from '../LearnTypes';

import styles from '../LearnResources.module.css';

import * as data from './js.json';
const jsDataString = JSON.stringify(data);
const jsData = JSON.parse(jsDataString);

const JsVideos = (props: VideoContentProps) => {
  const { videos } = props.content;

  return (
    <section className={styles['resources']}>
      <h1 className={styles['js-h1']}>JavaScript Video Tutorials</h1>
      <div className={styles['resource-cards-wrapper']}>
        {videos.map((video) => (
          <div className={styles['js-resource-card']} key={video.id}>
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

const LearnJsVideos = () => {
  return (
    <div>
      <JsVideos content={jsData} />
    </div>
  );
};

export default LearnJsVideos;
