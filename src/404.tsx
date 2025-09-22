
import { Link } from 'react-router-dom';

function NotFound() {
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
    <div>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.text}>Sorry, Page you are looking for is not available. Please check spelling </p>
      <Link to="/Home" style={styles.link}>Go back to Home</Link>
    </div>
    </>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '100px 20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '48px',
    color: '#e3078fff',
    marginBottom: '20px',
  },
  text: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '30px',
  },
  link: {
    padding: '10px 20px',
    backgroundColor: '#00A693',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '6px',
  }
};

export default NotFound;
