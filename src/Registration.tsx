import { useState } from 'react';
import './Styles.css';

function Registration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username.length < 5) {
      setError('Username must be at least 5 characters.');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }

    setError('');
    console.log('Registration submitted:', { username, password });

    setUsername('');
    setPassword('');

    alert('You have successfully registered!');
  };

  return (
    <>
     <div className="card-container">
         <header>
        <nav className="nav-container">
          <ul className="nav-left">
            <li>Home</li>
            <li>Jobs</li>
            <li>Landing Page</li>
          </ul>
          <ul className="nav-right">
            <li><input type="text" placeholder="Search" /></li>
            <li>Get the app</li>
            <li><a href="#registration-form">Sign up</a></li>
            <li>Sign in</li>
          </ul>
        </nav>
      </header>

      <main>
        <h2>Welcome!</h2>

        <form id="registration-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              placeholder="At least 5 characters"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="At least 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            
              required
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit">Sign Up</button>
        </form>

        <p>
          Already have an account?{' '}
          <button type="button" onClick={() => alert('Navigate to login page')}>
            Log in
          </button>
        </p>
      </main>
     </div>
    </>
  );
}

export default Registration;
