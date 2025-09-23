import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css'


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
  const [showConfirm, setShowConfirm] = useState(false);
  const [jobToDelete, setJobToDelete] = useState<number | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const savedJobs = localStorage.getItem('jobs');
    if (savedJobs) {
      try {
        setJobs(JSON.parse(savedJobs));
      } catch (error) {
        console.error('Failed to parse jobs:', error);
      }
    }
  }, []);

  const confirmDelete = (index: number) => {
    setJobToDelete(index);
    setShowConfirm(true);
  };

  const deleteJob = () => {
    if (jobToDelete === null) return;

    const updatedJobs = jobs.filter((_, i) => i !== jobToDelete);
    setJobs(updatedJobs);
    localStorage.setItem('jobs', JSON.stringify(updatedJobs));
    setShowConfirm(false);
    setJobToDelete(null);
  };

  const cancelDelete = () => {
    setShowConfirm(false);
    setJobToDelete(null);
  };

  const editJob = (index: number) => {
    localStorage.setItem('editIndex', index.toString());
    navigate('/JobPage');
  };

  return (
    <>
      <nav className="nav-container">
        <ul className="nav-left">
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/JobPage">Jobs</Link></li>
        </ul>
        <ul className="nav-right">
          <li><Link to="/">Logout</Link></li>
        </ul>
      </nav>

      <main className="card-container">
        <h2>Jobs You Applied For:</h2>

        {jobs.length === 0 ? (
          <p>
            You haven't applied for any jobs yet.{" "}
            <Link to="/JobPage"><button className="add-btn">Add</button></Link>
          </p>
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
                <p><strong>Status:</strong> {job.status || 'Applied'}</p>
                <p><strong>Duties:</strong> {job.jobDuties}</p>
                <p><strong>Requirements:</strong> {job.requirements}</p>
                <p><strong>Company Info:</strong> {job.companyInfo}</p>

                <div className="job-actions">
                  <button className="edit-btn" onClick={() => editJob(index)}>Edit</button>
                  <button className="delete-btn" onClick={() => confirmDelete(index)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {showConfirm && (
        <div className="delete-div">
          <div className="delete-card">
            <p>Are you sure you want to delete this job information?</p>
            <div className="delete-buttons">
              <button className="yes-btn" onClick={deleteJob}>Yes</button>
              <button className="no-btn" onClick={cancelDelete}>No</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
