import { useContext } from 'react';
import { UserContext } from './UserContext';
import styles from './UserBar.module.css';

const UserStatus = () => {
  const userContext = useContext(UserContext);

  const handleCreative = () => {
    userContext.setUser({
      name: '',
      status: '🌈 Time to code beautiful apps!',
    });
  };
  const handleStressed = () => {
    userContext.setUser({
      name: '',
      status: '🐛 Debugging is about patience!',
    });
  };
  const handleUnstoppable = () => {
    userContext.setUser({
      name: '',
      status: '👩‍💻 Awesome, keep flowing!',
    });
  };
  return (
    <div className={styles['status-wrapper']}>
      <p className={styles['status-question']}>What's your coding mood today?</p>
      <div className={styles['status-btn-wrapper']}>
        <button className={styles['status-btn']} onClick={handleCreative}>
          Creative
        </button>
        <button className={styles['status-btn']} onClick={handleStressed}>
          Stressed
        </button>
        <button className={styles['status-btn']} onClick={handleUnstoppable}>
          Unstoppable
        </button>
      </div>
      <p className={styles['status-msg']}>{userContext.user?.status}</p>
    </div>
  );
};
export default UserStatus;
