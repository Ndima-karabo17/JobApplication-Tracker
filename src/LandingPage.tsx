import './Styles.css'

import SlackLogo from './assets/slack.png';
import AmazonLogo from './assets/amazon.webp';
import KelloggsLogo from './assets/kellogs.webp';
import sidepic from './assets/sidepic.png';



function LandingPage(){
    return(
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
      <div className="body-div">
         <div className="message">
         <h1>Find a Job With Your <br />Interests and Abilities</h1>
        <p>Find jobs that match your interests with us</p>
        <button className='start-button'>Get Start</button>
       </div>
       <div className='side-pic'>
<img src={sidepic} alt="lady on a computer" className='sidepic'/>

       </div>
      </div>
      </main>
      <footer>
       <div className='footer-div'>
         <div>
            <h2>High Demand Jobs categories featured</h2>
            
        </div>
        
            <div className="icons">
            <img src={SlackLogo} alt="Slack"  className='slacklogo'/>
            <img src={AmazonLogo} alt="Amazon"  className='amazonlogo'/>
            <img src={KelloggsLogo} alt="Kellogg's" className='kelloglogo'/>
        </div>

       </div>
      </footer>
      </div>
        </>
    )
}

export default LandingPage;
