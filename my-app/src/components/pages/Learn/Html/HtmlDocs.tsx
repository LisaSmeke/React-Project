import styles from '../LearnResources.module.css';
import htmlLogo from '../LearnIcons/html-color.svg';
import ReadCounter from '../ReadCounter';
import * as data from '../Html/html.json';
const htmlDataString = JSON.stringify(data);
const htmlData = JSON.parse(htmlDataString);

interface HtmlDocProps {
  content: {
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
  };
}

const HtmlDocs = (props: HtmlDocProps) => {
  const { docs } = props.content;

  return (
    <section className={styles['resources']}>
      {/* <img className={styles['active-learn-icon']} src={htmlLogo} alt=""></img> */}
      <h1 className={styles['html-h1']}>Html Documentation</h1>
      <div className={styles['resource-cards-wrapper']}>
        {docs.map((doc) => (
          <div className={styles['html-resource-card']} key={doc.id}>
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
    </section>
  );
};

const LearnHtmlDocs = () => {
  return (
    <div>
      <HtmlDocs content={htmlData} />
    </div>
  );
};

export default LearnHtmlDocs;
