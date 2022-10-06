import styles from '../LearnResources.module.css';
import ReadCounter from '../ReadCounter';
import reactLogo from '../CustomLearn/react-color.svg';
import * as data from './react.json';
const reactDataString = JSON.stringify(data);
const reactData = JSON.parse(reactDataString);

interface ReactContentProps {
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
    docs: {
      id: string;
      category: string[];
      level: string;
      title: string;
      by: string;
      description: string;
      img: string;
      href: string;
    }[];
    practice: {
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

const ReactContent = (props: ReactContentProps) => {
  const { videos, docs, practice } = props.content;

  return (
    <section className={styles['resources']}>
      <img className={styles['html-logo']} src={reactLogo} alt=""></img>
      <h1 className={styles['react-h1']}>React Video Tutorials</h1>
      <div className={styles['resource-cards-wrapper']}>
        {videos.map((video) => (
          <div className={styles['react-resource-card']} key={video.id}>
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

      <h1 className={styles['react-h1']}>React Documentation</h1>
      <div className={styles['resource-cards-wrapper']}>
        {docs.map((doc) => (
          <div className={styles['react-resource-card']} key={doc.id}>
            <div className={styles['resource-header']}>
              <h3 className={styles['resource-name']}>{doc.title}</h3>
              <p className={styles['resource-by']}>{doc.by}</p>
            </div>
            <div className={styles['resource-details']}>
              <p className={styles['resource-level']}>{doc.level}</p>
            </div>
            <div className={styles['img-container']}>
              <a href={doc.href} target="_blank" rel="noreferrer">
                <img className={styles['resource-img']} src={doc.img} alt=""></img>
                <p className={styles['resource-description']}>{doc.description}</p>
              </a>
              <div>
                <ReadCounter></ReadCounter>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h1 className={styles['react-h1']}>React Practice Exercises</h1>
      <div className={styles['resource-cards-wrapper']}>
        {practice.map((practice) => (
          <div className={styles['react-resource-card']} key={practice.id}>
            <div className={styles['resource-header']}>
              <h3 className={styles['resource-name']}>{practice.title}</h3>
              <p className={styles['resource-by']}>{practice.by}</p>
            </div>
            <div className={styles['resource-details']}>
              <p className={styles['resource-level']}>{practice.level}</p>
            </div>
            <div className={styles['img-container']}>
              <a href={practice.href} target="_blank" rel="noreferrer">
                <img className={styles['resource-img']} src={practice.img} alt=""></img>
                <p className={styles['resource-description']}>{practice.description}</p>
              </a>
              <div>
                <ReadCounter></ReadCounter>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const LearnReact = () => {
  return (
    <div>
      <ReactContent content={reactData} />
    </div>
  );
};

export default LearnReact;
