import { useState } from 'react';
import OneQuote from '../Quotes/OneQuote';
import UserStatus from './UserStatus';
import styles from './UserBar.module.css';

const LoginForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const clearLogin = (event: React.MouseEvent<HTMLElement>) => {
    setIsLoggedIn(false);
    setForm({
      username: '',
      password: '',
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form.username, form.password);
    setIsLoggedIn(true);
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
        <p className={styles['welcome-sentence']}>
          ✅ Welcome to Impact Coding, <strong>{form.username}</strong>!
        </p>
        <OneQuote />
        <UserStatus />
        <div className={styles['logout']}>
          <button className={styles['logout-btn']} onClick={clearLogin}>
            Change user 🔄
          </button>
        </div>
      </div>
    );

  return (
    <form className={styles['login-form']} onSubmit={handleSubmit}>
      <p>Hi! What's your name?</p>
      <p>Type it and get a special message!</p>
      <input
        className={styles['login-input']}
        value={form.username}
        name="username"
        placeholder="Your name here"
        onChange={updateField}
      />
      <button className={styles['login-btn']}>Get message</button>
    </form>
  );
};
export default LoginForm;
