import learnKeys from './learn-keyboard.svg';
import CustomLearn from './CustomLearn/CustomLearn';
import Contests from './Contests/Contests';
import styles from './Learn.module.css';

const Learn = () => {
  return (
    <section id="learn" className={styles['learn-section']}>
      <header className={styles['learn-header-container']}>
        <img className={styles['learn-title']} src={learnKeys} alt="Learn"></img>
      </header>

      <div className={styles['learn-content']}>
        <CustomLearn />
        <Contests />
      </div>
    </section>
  );
};

export default Learn;
