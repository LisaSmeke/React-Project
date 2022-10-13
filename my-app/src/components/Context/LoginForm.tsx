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
    password: '',
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const printValues = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form.username, form.password);
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
          ✅ Welcome to Impact Coding, <strong>{form.username}</strong>!
        </p>
        <div>
          Here's a programming quote for you today:
          <OneQuote />
        </div>
        {/* <div>
          <UserStatus />
        </div> */}
        <button onClick={() => setIsLoggedIn(false)}>Log Out ⛔</button>
      </div>
    );

  return (
    <form onSubmit={printValues}>
      <label>
        <input
          value={form.username}
          name="username"
          placeholder="Username"
          onChange={updateField}
        />
      </label>
      <br />
      <label>
        <input
          value={form.password}
          name="password"
          type="password"
          placeholder="Password"
          onChange={updateField}
        />
      </label>
      <br />
      <button>Log In</button>
    </form>
  );
};
export default LoginForm;
