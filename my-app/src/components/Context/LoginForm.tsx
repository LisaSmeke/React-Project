import { useState } from 'react';
import { ThemeContext } from './ThemeContext';

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
        <p>Welcome {form.username}</p>
        <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
      </div>
    );

  return (
    <form onSubmit={printValues}>
      <label>
        Username:
        <input value={form.username} name="username" onChange={updateField} />
      </label>
      <br />
      <label>
        Password:
        <input value={form.password} name="password" type="password" onChange={updateField} />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
};
export default LoginForm;
