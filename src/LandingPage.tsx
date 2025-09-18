import './Styles.css'

import SlackLogo from './assets/slack.png';
import AmazonLogo from './assets/amazon.webp';
import KelloggsLogo from './assets/kellogs.webp';
import sidepic from './assets/sidepic.png';
import { Link } from 'react-router-dom';


function LandingPage() {
  return (
    <>
     
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
          <div className="body-div">
            <div className="message">
              <h1>Find a Job With Your <br />Interests and Abilities</h1>
              <p>Find jobs that match your interests with us</p>
              <button className='start-button'><Link to="/Registration">Get Start</Link></button>
            </div>
            <div className='side-pic'>
              <img src={sidepic} alt="lady on a computer" className='sidepic' />

            </div>
          </div>
        </main>
        <footer>
          <div className='footer-div'>
            <div>
              <h2>High Demand Jobs categories featured</h2>

            </div>

            <div className="icons">
              <img src={SlackLogo} alt="Slack" className='slacklogo' />
              <img src={AmazonLogo} alt="Amazon" className='amazonlogo' />
              <img src={KelloggsLogo} alt="Kellogg's" className='kelloglogo' />
            </div>

          </div>
        </footer>
      
    </>
  );
}

export default LandingPage;
