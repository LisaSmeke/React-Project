import styles from './LearnCss.module.css';
import ReadCounter from '../ReadCounter';
import * as data from './css.json';
const cssDataString = JSON.stringify(data);
const cssData = JSON.parse(cssDataString);

interface CssContentProps {
  content: {
    videos: {
      id: string;
      category: string;
      title: string;
      by: string;
      description: string;
      img: string;
      href: string;
    }[];
    docs: {
      id: string;
      category: string;
      title: string;
      by: string;
      description: string;
      img: string;
      href: string;
    }[];
    practice: {
      id: string;
      category: string;
      title: string;
      by: string;
      description: string;
      img: string;
      href: string;
    }[];
  };
}

const CssContent = (props: CssContentProps) => {
  const { videos, docs, practice } = props.content;

  return (
    <section className={styles['resources-section']}>
      <div className={styles['resources-container']}>
        <h1>CSS Video Learning Resources</h1>
        {videos.map((video) => (
          <div className={styles['resource-card']} key={video.id}>
            <div className={styles['resource-header']}>
              <h3 className={styles['resource-title']}>{video.title}</h3>
              <p className={styles['resource-by']}>{video.by}</p>
            </div>
            <div className={styles['resource-details']}>
              <p className={styles['resource-description']}>{video.description}</p>
            </div>
            <div className={styles['img-container']}>
              <iframe
                className={styles['resource-video']}
                title={video.title}
                src={video.href}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>

      <div className={styles['resources-container']}>
        <h1>CSS Documentation</h1>
        {docs.map((doc) => (
          <div className={styles['resource-card']} key={doc.id}>
            <div className={styles['resource-header']}>
              <h3 className={styles['resource-title']}>{doc.title}</h3>
              <p className={styles['resource-by']}>{doc.by}</p>
            </div>
            <div className={styles['resource-details']}>
              <p className={styles['resource-description']}>{doc.description}</p>
            </div>
            <div className={styles['img-container']}>
              <a href={doc.href} target="_blank" rel="noreferrer">
                <img className={styles['doc-img']} src={doc.img} alt=""></img>
              </a>
            </div>
            <div>
              <ReadCounter />
            </div>
          </div>
        ))}
      </div>

      <div className={styles['resources-container']}>
        <h1>CSS Practice Exercises</h1>
        {practice.map((practice) => (
          <div className={styles['resource-card']} key={practice.id}>
            <div className={styles['resource-header']}>
              <h3 className={styles['resource-title']}>{practice.title}</h3>
              <p className={styles['resource-by']}>{practice.by}</p>
            </div>
            <div className={styles['resource-details']}>
              <p className={styles['resource-description']}>{practice.description}</p>
            </div>
            <div className={styles['img-container']}>
              <a href={practice.href} target="_blank" rel="noreferrer">
                <img className={styles['practice-img']} src={practice.img} alt=""></img>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const LearnCss = () => {
  return (
    <div>
      <CssContent content={cssData} />
    </div>
  );
};

export default LearnCss;
