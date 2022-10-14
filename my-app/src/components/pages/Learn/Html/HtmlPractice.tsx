import styles from '../LearnResources.module.css';
import ReadCounter from '../ReadCounter';
import * as data from '../Html/html.json';
const htmlDataString = JSON.stringify(data);
const htmlData = JSON.parse(htmlDataString);

interface HtmlPracticeProps {
  content: {
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

const HtmlPractice = (props: HtmlPracticeProps) => {
  const { practice } = props.content;

  return (
    <section className={styles['resources']}>
      {/* <img className={styles['active-learn-icon']} src={htmlLogo} alt=""></img> */}
      <h1 className={styles['html-h1']}>Html Practice Exercises</h1>
      <div className={styles['resource-cards-wrapper']}>
        {practice.map((practice) => (
          <div className={styles['html-resource-card']} key={practice.id}>
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

const LearnHtmlPractice = () => {
  return (
    <div>
      <HtmlPractice content={htmlData} />
    </div>
  );
};

export default LearnHtmlPractice;
