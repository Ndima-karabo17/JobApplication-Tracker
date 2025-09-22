import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

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
      setLoading(true); 

      alert('Sign in successfully!Redirecting in 3 seconds');

      
      setTimeout(() => {
        navigate('/JobPage');
      }, 3000);
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
          {loading ? (
            <div className="loading-message">
              <h2>Logging in...</h2>
              <p className='redirect'>You will be redirected in 3 seconds to add a job information.</p>
        
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default Login;
