import { useState } from 'react';
import Registration from './Registration';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    console.log('Logging in with:', { username, password });
    alert('Logged in!');
  };

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>Jobs</li>
            <li>Landing Page</li>
          </ul>
          <ul>
            <li><input type="text" placeholder="Search" /></li>
            <li>Get the app</li>
            <li>Sign up</li>
            <li>Sign in</li>
          </ul>
        </nav>
      </header>

      <main>
        <div>
          <h3>Welcome</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username"
              required/>
            </div>

            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
             required />
            </div>

            <button type="submit">Log in</button>
          </form>

          <p>
            Don't have an account?
            <button onClick={Registration}>
              Sign Up
            </button>
          </p>
        </div>
      </main>
    </>
  );
}

export default Login;
