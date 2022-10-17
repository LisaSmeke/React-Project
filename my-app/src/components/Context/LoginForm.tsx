import { useState } from 'react';
import OneQuote from '../Quotes/OneQuote';
import UserStatus from './UserStatus';
import styles from './UserBar.module.css';

const LoginForm = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form.username, form.password);
    setIsLoggedIn(true);
    setForm({
      username: '',
      password: '',
    });
  };

  const updateField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
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
    <form className={styles['login-form']} onSubmit={handleSubmit}>
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
