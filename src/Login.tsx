import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Get user from localStorage
    const storedUser = localStorage.getItem('user');

    if (!storedUser) {
      setError('No registered user found. Please sign up first.');
      return;
    }

    const parsedUser = JSON.parse(storedUser);

    if (
      username === parsedUser.username &&
      password === parsedUser.password
    ) {
      setError('');
      alert('Logged in successfully!');
      // Optionally navigate to a dashboard or homepage
      navigate('/Home');
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <>
      <header>
        <nav className="nav-container">
          <ul className="nav-left">
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/JobPage">Jobs</Link></li>
          </ul>
          <ul className="nav-right">
            
            <li><Link to="/Registration">Sign Up</Link></li>
            <li><Link to="/Login">Sign in</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="form-container">
          <h2>Welcome!</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username"
                required
                className="user-name"
              />
            </div>

            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                required
                className="user-name"
              />
            </div>

            {error && <p className="error-message">{error}</p>}

            <button type="submit">Log in</button>
          </form>

          <p>
            Don't have an account? <Link to="/Registration">Sign Up</Link>
          </p>
        </div>
      </main>
    </>
  );
}

export default Login;
