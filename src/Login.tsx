import { useState } from 'react';
import Registration from './Registration';
import { Link } from 'react-router-dom';

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
    <div className="card-container">
        
               <header>
                 <nav className="nav-container">
                   <ul className="nav-left">
                     <li><Link to="/Home">Home</Link></li>
                     <li><Link to="/JobPage">Jobs</Link></li>
                     <li><Link to="/">Landing Page</Link></li>
                    
                   </ul>
                   <ul className="nav-right">
                     <li><input type="text" placeholder="Search" /></li>
                     <li></li>
                     <li> Get the app</li>
                     <li><Link to="/Registration">Sign Up</Link></li>
                     <li><Link to="/Login">Sign in</Link></li>
                   </ul>
                 </nav>
               </header>


      <main>
        <div>
           <h2>Welcome!</h2>
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
      <footer>
       <div></div>
      </footer>
      </div>
    </>
  );
}

export default Login;
