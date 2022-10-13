import { useContext } from 'react';
import { UserContext } from './UserContext';
import styles from './UserBar.module.css';

export const UserStatus = () => {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    userContext.setUser({
      name: '',
      status: 'Your status: available ✅',
    });
  };
  const handleLogout = () => {
    userContext.setUser({
      name: '',
      status: 'Your status: busy ⛔',
    });
  };
  return (
    <div className={styles['user-bar-wrapper']}>
      <div className={styles['user-bar-left']}>
        <div className={styles['status-input-wrapper']}>
          <p>Select status:</p>

          <div className={styles['status-btn-wrapper']}>
            <button className={styles['status-btn']} onClick={handleLogin}>
              Available
            </button>
            <button className={styles['status-btn']} onClick={handleLogout}>
              Busy
            </button>
          </div>
        </div>
      </div>

      <div className={styles['user-bar-right']}>
        <p className={styles['user-status']}>
          <strong>{userContext.user?.status}</strong>
        </p>
      </div>
    </div>
  );
};
