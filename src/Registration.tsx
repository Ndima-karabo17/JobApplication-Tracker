import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Styles.css';

function Registration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

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

   
    const userData = { username, password };
    localStorage.setItem('user', JSON.stringify(userData));

    console.log('Registration submitted:', userData);

    setUsername('');
    setPassword('');

    alert('You have successfully registered!');
    
    navigate('/Login');
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

            <form id="registration-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  placeholder="At least 5 characters"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className='user-name'
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
                  className='user-name'
                  required
                />
              </div>

              {error && <p className="error-message">{error}</p>}

              <button type="submit">Sign Up</button>
            </form>

            <p>
              Already have an account?
              <Link to="/Login"> Log in</Link>
            </p>
          </div>
        </main>
   
    </>
  );
}

export default Registration;
