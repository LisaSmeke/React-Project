import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import LoginForm from './LoginForm';

export const UserBar = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme.dark.main, color: theme.dark.text }}>
      <LoginForm />
    </div>
  );
};
