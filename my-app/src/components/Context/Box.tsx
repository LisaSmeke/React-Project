import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import LoginForm from './LoginForm';

export const Box = () => {
  const theme = useContext(ThemeContext);
  return (
    <section>
      <div style={{ backgroundColor: theme.secondary.main, color: theme.secondary.text }}>
        <LoginForm />
      </div>
    </section>
  );
};
