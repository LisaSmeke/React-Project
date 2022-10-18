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
    <div className={styles['user-status-wrapper']}>
      <div className={styles['user-status-choice']}>
        <p>What's your coding mood today?</p>
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
      </div>

      {/* <div className={styles['user-status']}> */}
      <p className={styles['user-status-sentence']}>{userContext.user?.status}</p>
      {/* </div> */}
    </div>
  );
};
export default UserStatus;
