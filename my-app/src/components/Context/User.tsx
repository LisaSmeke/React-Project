import { useContext } from 'react';
import { UserContext } from './UserContext';
import { MutableRef } from './UseRef';
import { ThemeContext } from './ThemeContext';
import NameForm from '../Welcome/NameForm';

export const User = () => {
  const theme = useContext(ThemeContext);

  const userContext = useContext(UserContext);
  const handleLogin = () => {
    userContext.setUser({
      name: 'Lisa',
      status: 'available',
    });
  };
  const handleLogout = () => {
    userContext.setUser({
      name: 'Lisa',
      status: 'busy',
    });
  };
  return (
    <div style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}>
      <p>Username:</p>
      <input type="text" placeholder="Your name"></input>
      {/* <div>User name is {userContext.user?.name}</div> */}
      <p>Status:</p>
      <button onClick={handleLogin}>Available</button>
      <button onClick={handleLogout}>Busy</button>
      {/* <div>User name is:</div> */}
      <div>User is {userContext.user?.status}</div>
      {/* <MutableRef /> */}
    </div>
  );
};
