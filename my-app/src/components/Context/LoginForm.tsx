import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from './UserContext';
import OneQuote from '../pages/Blog/OneQuote';
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

const LoginForm = () => {
  const [form, setState] = useState({
    username: '',
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const printValues = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form.username);
    setIsLoggedIn(true);
  };

  const updateField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  if (isLoggedIn)
    return (
      <div>
        <p>
          Welcome to Impact Coding, <strong>{form.username}</strong>!
        </p>
        <div>
          Here's your programming quote of the day:
          <OneQuote />
        </div>
        <div>
          <UserStatus />
        </div>
        <button onClick={() => setIsLoggedIn(false)}>Change user</button>
      </div>
    );

  return (
    <form onSubmit={printValues}>
      <label>
        Hi! What's your name?
        <input
          value={form.username}
          name="username"
          placeholder="My name is..."
          onChange={updateField}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
};
export default LoginForm;
