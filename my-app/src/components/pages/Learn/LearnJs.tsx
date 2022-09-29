import styles from './LearnJs.module.css';
import * as data from './js.json';
const jsDataString = JSON.stringify(data);
const jsData = JSON.parse(jsDataString);

interface JsContentProps {
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
      description: string;
      img: string;
      href: string;
    }[];
    practice: {
      id: string;
      category: string;
      title: string;
      description: string;
      img: string;
      href: string;
    }[];
  };
}

const JsContent = (props: JsContentProps) => {
  const { videos, docs, practice } = props.content;

  return (
    <section className={styles['resources-section']}>
      <h1>Find JS Video learning resources here</h1>
      <div className={styles['resources-container']}>
        {videos.map((video) => (
          <div className={styles['resource-card']} key={video.id}>
            <div className={styles['resource-header']}>
              <h3 className={styles['resource-title']}>{video.title}</h3>
              <p className={styles['resource-by']}>{video.by}</p>
            </div>
            <div className={styles['resource-details']}>
              <p className={styles['resource-category']}>{video.category}</p>
            </div>
            <div className={styles['img-container']}>
              <img className={styles['resource-img']} src={video.img} alt=""></img>
              <p className={styles['resource-description']}>{video.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles['resources-container']}>
        {docs.map((doc) => (
          <div className={styles['resource-card']} key={doc.id}>
            <div className={styles['resource-header']}>
              <h3 className={styles['resource-title']}>{doc.title}</h3>
            </div>
            <div className={styles['resource-details']}>
              <p className={styles['resource-category']}>{doc.category}</p>
            </div>
            <div className={styles['img-container']}>
              <img className={styles['resource-img']} src={doc.img} alt=""></img>
              <p className={styles['resource-description']}>{doc.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles['resources-container']}>
        {practice.map((practice) => (
          <div className={styles['resource-card']} key={practice.id}>
            <div className={styles['resource-header']}>
              <h3 className={styles['resource-title']}>{practice.title}</h3>
            </div>
            <div className={styles['resource-details']}>
              <p className={styles['resource-category']}>{practice.category}</p>
            </div>
            <div className={styles['img-container']}>
              <img className={styles['resource-img']} src={practice.img} alt=""></img>
              <p className={styles['resource-description']}>{practice.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const LearnJs = () => {
  return (
    <div>
      <JsContent content={jsData} />
    </div>
  );
};

export default LearnJs;
