import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface Job {

  jobTitle: string;
  companyName: string;
  address: string;
  contactEmail: string;
  contactPhone: string;
  dateApplied: string;
  jobDuties: string;
  requirements: string;
  companyInfo: string;
  status?: string;
}

function Home() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const navigate = useNavigate();

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

  const handleEdit = (index: number) => {
    localStorage.setItem('editIndex', index.toString());
    navigate('/JobPage');
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
            
            <li><Link to="/">Logout</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="card-container">
          <h2>Jobs You Applied For:</h2>
         

          {jobs.length === 0 ? (
            <p>You haven't applied for any job. <Link to="/JobPage"><button className='add-btn'>ADD</button></Link></p>
             
          ) : (
            <div className="job-grid">
              {jobs.map((job, index) => (
                <div key={index} className="job-card">
                  <h3>{job.jobTitle}</h3>
                  <p><strong>Company:</strong> {job.companyName}</p>
                  <p><strong>Address:</strong> {job.address}</p>
                  <p><strong>Email:</strong> {job.contactEmail}</p>
                  <p><strong>Phone:</strong> {job.contactPhone}</p>
                  <p><strong>Date Applied:</strong> {job.dateApplied}</p>
                <p className={`status ${job.status ? job.status.toLowerCase() : 'applied'}`}><strong>Status:</strong> 
  {job.status || 'Applied'}
</p>
                  <p><strong>Duties:</strong> {job.jobDuties}</p>
                  <p><strong>Requirements:</strong> {job.requirements}</p>
                  <p><strong>Company Info:</strong> {job.companyInfo}</p>
                  
                  <div className="job-actions">
                    <button onClick={() => handleEdit(index)} className='edit-btn'>Edit</button>
                    <button onClick={() => handleDelete(index)} className='delete-btn'>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default Home;
