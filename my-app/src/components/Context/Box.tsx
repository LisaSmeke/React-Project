import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import LoginForm from './LoginForm';

export const Box = () => {
  const theme = useContext(ThemeContext);
  return (
    <section>
      <div style={{ backgroundColor: theme.dark.main, color: theme.dark.text }}>
        <LoginForm />
      </div>
    </section>
  );
};
