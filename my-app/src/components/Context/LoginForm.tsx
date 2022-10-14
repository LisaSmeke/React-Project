import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from './UserContext';
import OneQuote from '../Quotes/OneQuote';
import styles from './UserBar.module.css';

export const UserStatus = () => {
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
        <p>Today I'm feeling:</p>
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

      <div className={styles['user-status']}>
        <p className={styles['user-status-sentence']}>{userContext.user?.status}</p>
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
      <div className={styles['welcome-wrapper']}>
        <div className={styles['welcome-sentence']}>
          <p>
            ✅ Welcome to Impact Coding, <strong>{form.username}</strong>!
          </p>
        </div>
        <div className={styles['intro-quote']}>
          Here's a programming quote for you:
          <OneQuote />
        </div>
        <UserStatus />
        <div className={styles['logout']}>
          <button className={styles['logout-btn']} onClick={() => setIsLoggedIn(false)}>
            Log Out ⛔
          </button>
        </div>
      </div>
    );

  return (
    <form className={styles['login-form']} onSubmit={printValues}>
      <label>
        <input
          className={styles['login-input']}
          value={form.username}
          name="username"
          placeholder="Username"
          onChange={updateField}
        />
      </label>
      <br />
      <label>
        <input
          className={styles['login-input']}
          value={form.password}
          name="password"
          type="password"
          placeholder="Password"
          onChange={updateField}
        />
      </label>
      <br />
      <div className={styles['login']}>
        <button className={styles['login-btn']}>Log In</button>
      </div>
    </form>
  );
};
export default LoginForm;
