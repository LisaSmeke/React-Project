import styles from './ReadCounter.module.css';

type LearnerProps = {
  count: number;
};

const Learners = ({ count }: LearnerProps) => {
  return (
    <p className={styles['counter-text']}>
      <strong>{count}</strong> learners found this resource useful
    </p>
  );
};
export default Learners;
