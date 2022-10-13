import styles from '../LearnResources.module.css';
import htmlLogo from '../LearnIcons/html-color.svg';
import * as data from './html.json';
const htmlDataString = JSON.stringify(data);
const htmlData = JSON.parse(htmlDataString);

interface HtmlContentProps {
  content: {
    videos: {
      id: string;
      category: string[];
      level: string;
      title: string;
      by: string;
      description: string;
      img: string;
      href: string;
    }[];
  };
}

const HtmlVideos = (props: HtmlContentProps) => {
  const { videos } = props.content;

  return (
    <section className={styles['resources']}>
      {/* <img className={styles['active-learn-icon']} src={htmlLogo} alt=""></img> */}
      <h1 className={styles['html-h1']}>Html Video Tutorials</h1>
      <div className={styles['resource-cards-wrapper']}>
        {videos.map((video) => (
          <div className={styles['html-resource-card']} key={video.id}>
            <div className={styles['resource-header']}>
              <h3 className={styles['resource-name']}>{video.title}</h3>
              <p className={styles['resource-by']}>{video.by}</p>
            </div>
            <div className={styles['resource-details']}>
              <p className={styles['resource-level']}>{video.level}</p>
            </div>
            <a href={video.href} target="_blank" rel="noreferrer">
              <div className={styles['img-container']}>
                <img className={styles['resource-img']} src={video.img} alt=""></img>
                <p className={styles['resource-description']}>{video.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

const LearnHtmlVideos = () => {
  return (
    <div>
      <HtmlVideos content={htmlData} />
    </div>
  );
};

export default LearnHtmlVideos;
