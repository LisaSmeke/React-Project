import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import LoginForm from './LoginForm';
import styles from './UserBar.module.css';

export const UserBar = () => {
  const theme = useContext(ThemeContext);
  return (
    <section className={styles['user-bar']}>
      <div style={{ backgroundColor: theme.dark.main, color: theme.dark.text }}>
        <LoginForm />
      </div>
    </section>
  );
};
