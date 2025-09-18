import { useState, useEffect } from 'react';
import './Styles.css';

interface Job {
  jobTitle: string;
  companyName: string;
  address: string;
  contactEmail: string;
  contactPhone: string;
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
    jobDuties: '',
    requirements: '',
    companyInfo: '',
  };

  const [jobDetails, setJobDetails] = useState<Job>(initialState);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  // Load jobs from localStorage
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
      alert('Job updated successfully!');
    } else {
      // Add new job
      setJobs([...jobs, jobDetails]);
      alert('Job information saved!');
    }

    setJobDetails(initialState);
  };

  const handleEdit = (index: number) => {
    setJobDetails(jobs[index]);
    setEditIndex(index);
  };

  const handleDelete = (index: number) => {
    const updatedJobs = jobs.filter((_, i) => i !== index);
    setJobs(updatedJobs);
    alert('Job deleted!');
    // Clear the form if you're editing the deleted job
    if (editIndex === index) {
      setJobDetails(initialState);
      setEditIndex(null);
    }
  };

  return (
    <div className="card-container">
      <h2>Job Information</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Job Title:</label>
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
          <label>Company Name:</label>
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
          <label>Address:</label>
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
          <label>Email Address:</label>
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
          <label>Contact Phone:</label>
          <input
            type="tel"
            name="contactPhone"
            value={jobDetails.contactPhone}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div>
          <label>Job Duties:</label>
          <textarea
            name="jobDuties"
            value={jobDetails.jobDuties}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div>
          <label>Requirements:</label>
          <textarea
            name="requirements"
            value={jobDetails.requirements}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div>
          <label>Company Information:</label>
          <textarea
            name="companyInfo"
            value={jobDetails.companyInfo}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="save-button">
          {editIndex !== null ? 'Update Job Info' : 'Save Job Info'}
        </button>
      </form>

      <hr />

      <h3>Saved Jobs</h3>
      {jobs.length === 0 && <p>No job entries yet.</p>}

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            <strong>{job.jobTitle}</strong> at <em>{job.companyName}</em> <br />
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobPage;
