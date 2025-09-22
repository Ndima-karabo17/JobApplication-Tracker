import { useState, useEffect } from 'react';
import './Styles.css';
import { Link } from 'react-router-dom';

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
}

function JobPage() {
  const initialState: Job = {
    jobTitle: '',
    companyName: '',
    address: '',
    contactEmail: '',
    contactPhone: '',
    dateApplied: '',
    jobDuties: '',
    requirements: '',
    companyInfo: '',
  };

  const [jobDetails, setJobDetails] = useState<Job>(initialState);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);


  useEffect(() => {
    const storedJobs = localStorage.getItem('jobs');
    if (storedJobs) {
      setJobs(JSON.parse(storedJobs));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('jobs', JSON.stringify(jobs));
  }, [jobs]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setJobDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editIndex !== null) {

      const updatedJobs = [...jobs];
      updatedJobs[editIndex] = jobDetails;
      setJobs(updatedJobs);
      setEditIndex(null);

    } else {

      setJobs([...jobs, jobDetails]);

    }

    setJobDetails(initialState);
  };

  function handleSave() {


  }

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
<div className="card-infor">
  <h2>Job Information</h2>

  <form onSubmit={handleSubmit}>
    <div className="form-grid">
      <div>
        <label className='job-label'>Job Title:</label>
        <input
          type="text"
          name="jobTitle"
          value={jobDetails.jobTitle}
          onChange={handleChange}
          required
          className="input-field"
        />
      </div>

      <div>
        <label className='job-label'>Company Name:</label>
        <input
          type="text"
          name="companyName"
          value={jobDetails.companyName}
          onChange={handleChange}
          required
          className="input-field"
        />
      </div>

      <div>
        <label className='job-label'>Address:</label>
        <input
          type="text"
          name="address"
          value={jobDetails.address}
          onChange={handleChange}
          required
          className="input-field"
        />
      </div>

      <div>
        <label className='job-label'>Email Address:</label>
        <input
          type="email"
          name="contactEmail"
          value={jobDetails.contactEmail}
          onChange={handleChange}
          required
          className="input-field"
        />
      </div>

      <div>
        <label className='job-label'>Contact Phone:</label>
        <input
          type="tel"
          name="contactPhone"
          value={jobDetails.contactPhone}
          onChange={handleChange}
          className="input-field"
          required />
      </div>

      <div>
        <label className='job-label'>Job Duties:</label>
        <textarea
          name="jobDuties"
          value={jobDetails.jobDuties}
          onChange={handleChange}
          className='information'
          required
        ></textarea>
      </div>

      <div>
        <label className='job-label'>Requirements:</label>
        <textarea
          name="requirements"
          value={jobDetails.requirements}
          onChange={handleChange}
          className='information'
          required
        ></textarea>
      </div>

      <div>
        <label className='job-label'>Company Information:</label>
        <textarea
          name="companyInfo"
          value={jobDetails.companyInfo}
          className='information'
          onChange={handleChange}
        ></textarea>
      </div>

      <div>
        <label className='job-label'>Date Applied:</label>
        <input
          type="date"
          name="dateApplied"
          value={jobDetails.dateApplied}
          onChange={handleChange}
          required
          className="input-field"
        />
      </div>

      <div>
        <label className='job-label'>Status:</label>
        <select name="status" id="status" className="input-field">
          
          <option value="Applied" className='applied'>Applied</option>
          <option value="Interviewed">Interviewed</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>
    </div>

    <button type="submit" className="save-button" onClick={handleSave}>
      Save Job Info
    </button>
  </form>
</div>

    </>
  );
}

export default JobPage;
