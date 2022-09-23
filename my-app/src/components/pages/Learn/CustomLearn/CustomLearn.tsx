import htmlPurple from '../../../../icons/html-purple.svg';
import cssPurple from '../../../../icons/css-purple.svg';
import jsPurple from '../../../../icons/js-purple.svg';
import reactPurple from '../../../../icons/react-purple.svg';
import styles from './CustomLearn.module.css';

const CustomLearn = () => {
  return (
    <section className={styles['custom-learn-section']}>
      <div>
        <h2>Choose a topic</h2>
      </div>
      <div>
        <img className={styles['topic-icon']} src={htmlPurple} alt="css"></img>
        <img className={styles['topic-icon']} src={cssPurple} alt="css"></img>
        <img className={styles['topic-icon']} src={jsPurple} alt="js"></img>
        <img className={styles['topic-icon']} src={reactPurple} alt="react"></img>
      </div>
      <div>
        <h2>Choose a resource type</h2>
        <p>Video</p>
        <p>Documentation</p>
        <p>Practice</p>
      </div>
    </section>
  );
};

export default CustomLearn;
