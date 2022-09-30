import htmlColor from '../../../../icons/html-color.svg';
import cssColor from '../../../../icons/css-color.svg';
import jsColor from '../../../../icons/js-color.svg';
import reactColor from '../../../../icons/react-color.svg';
import styles from './CustomLearn.module.css';

const CustomLearn = () => {
  return (
    <section className={styles['custom-learn-section']}>
      <div>
        <img className={styles['topic-icon']} src={htmlColor} alt="css"></img>
        <img className={styles['topic-icon']} src={cssColor} alt="css"></img>
        <img className={styles['topic-icon']} src={jsColor} alt="js"></img>
        <img className={styles['topic-icon']} src={reactColor} alt="react"></img>
      </div>
    </section>
  );
};

export default CustomLearn;
