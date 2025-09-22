import { useState, useEffect } from 'react';
import './Styles.css';
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
    status: 'Applied',
  };

  const [jobDetails, setJobDetails] = useState<Job>(initialState);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedJobs = localStorage.getItem('jobs');
    const storedEditIndex = localStorage.getItem('editIndex');

    if (storedJobs) {
      const parsedJobs: Job[] = JSON.parse(storedJobs);
      setJobs(parsedJobs);

      if (storedEditIndex !== null) {
        const index = parseInt(storedEditIndex, 10);

        if (!isNaN(index) && parsedJobs[index]) {
          setEditIndex(index);
          setJobDetails(parsedJobs[index]);
        }
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('jobs', JSON.stringify(jobs));
  }, [jobs]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      localStorage.removeItem('editIndex');
    } else {
      setJobs([...jobs, jobDetails]);
    }

    setJobDetails(initialState);
    navigate('/Home'); 
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

      <div className="card-infor">
        <h2>{editIndex !== null ? 'Edit Job Information' : 'Add Job Information'}</h2>

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
                required
                className="input-field"
              />
            </div>

            <div>
              <label className='job-label'>Job Duties:</label>
              <textarea
                name="jobDuties"
                value={jobDetails.jobDuties}
                onChange={handleChange}
                required
                className="information"
              />
            </div>

            <div>
              <label className='job-label'>Requirements:</label>
              <textarea
                name="requirements"
                value={jobDetails.requirements}
                onChange={handleChange}
                required
                className="information"
              />
            </div>

            <div>
              <label className='job-label'>Company Information:</label>
              <textarea
                name="companyInfo"
                value={jobDetails.companyInfo}
                onChange={handleChange}
                className="information"
              />
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
              <select
                name="status"
                value={jobDetails.status || 'Applied'}
                onChange={handleChange}
                className="input-field"
              >
                <option value="Applied">Applied</option>
                <option value="Interviewed">Interviewed</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>

          <button type="submit" className="save-button">
            {editIndex !== null ? 'Update Job Info' : 'Save Job Info'}
          </button>
        </form>
      </div>
    </>
  );
}

export default JobPage;
