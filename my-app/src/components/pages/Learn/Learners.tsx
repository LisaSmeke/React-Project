import styles from './ReadCounter.module.css';

type LearnerProps = {
  count: number;
};

const Learners = ({ count }: LearnerProps) => {
  return (
    <p className={styles['read-counter-text']}>
      <strong>{count}</strong> learners have found this article useful.
    </p>
  );
};
export default Learners;
