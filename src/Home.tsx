import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Job {
  id: string;
  jobTitle: string;
  companyName: string;
  address: string;
  contactEmail: string;
  contactPhone: string;
  jobDuties: string;
  requirements: string;
  companyInfo: string;
  
}

function Home() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const jobData = localStorage.getItem('jobs');
    if (jobData) {
      try {
        const parsedJobs: Job[] = JSON.parse(jobData);
        setJobs(parsedJobs);
      } catch (err) {
        console.error('Error parsing jobs:', err);
      }
    }
  }, []);

  const handleDelete = (index: number) => {
    const updatedJobs = jobs.filter((_, i) => i !== index);
    setJobs(updatedJobs);
    localStorage.setItem('jobs', JSON.stringify(updatedJobs));
    alert('Job deleted!');
  };

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
                  
                  <li> Get the app</li>
                  <li><Link to="/Registration">Sign Up</Link></li>
                  <li><Link to="/Login">Sign in</Link></li>
                </ul>
              </nav>
            </header>
  <main>
  <div className="card-container">
    <h2>Jobs You Applied For:</h2>

    {jobs.length === 0 ? (
      <p>You haven't applied for any job</p>
    ) : (
      <ul className="job-list">
        {jobs.map((job, index) => (
          <li key={job.id} className="job-card">
            <div>
              <strong>{job.jobTitle}</strong> at {job.companyName}
            </div>
            <div className="job-actions">
              <button disabled>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      
    )}
  </div>
</main>

    </>
  );
}

export default Home;
