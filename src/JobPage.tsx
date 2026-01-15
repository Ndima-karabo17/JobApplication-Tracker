import React, { 
  type InputHTMLAttributes, 
  type TextareaHTMLAttributes 
} from 'react';
import { Link } from 'react-router-dom';
import { useJobManager } from './reducer/jobReducer';
import './Styles.css';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, ...props }) => (
  <div className="form-field-container">
    <label className="job-label">{label}:</label>
    <input className="input-field" {...props} />
  </div>
);

interface TextAreaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({ label, ...props }) => (
  <div className="form-field-container">
    <label className="job-label">{label}:</label>
    <textarea className="information" {...props} />
  </div>
);


function JobPage() {
  const { jobDetails, editIndex, handleChange, handleSubmit } = useJobManager();

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
            <FormField 
              label="Job Title" 
              name="jobTitle" 
              value={jobDetails.jobTitle} 
              onChange={handleChange} 
              required 
            />
            <FormField 
              label="Company Name" 
              name="companyName" 
              value={jobDetails.companyName} 
              onChange={handleChange} 
              required 
            />
            <FormField 
              label="Address" 
              name="address" 
              value={jobDetails.address} 
              onChange={handleChange} 
              required 
            />
            <FormField 
              label="Email Address" 
              name="contactEmail" 
              type="email"
              value={jobDetails.contactEmail} 
              onChange={handleChange} 
              required 
            />
            <FormField 
              label="Contact Phone" 
              name="contactPhone" 
              type="tel"
              value={jobDetails.contactPhone} 
              onChange={handleChange} 
              required 
            />
            <FormField 
              label="Date Applied" 
              name="dateApplied" 
              type="date"
              value={jobDetails.dateApplied} 
              onChange={handleChange} 
              required 
            />

            <div>
              <label className="job-label">Status:</label>
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

            <TextAreaField 
              label="Job Duties" 
              name="jobDuties" 
              value={jobDetails.jobDuties} 
              onChange={handleChange} 
              required 
            />
            <TextAreaField 
              label="Requirements" 
              name="requirements" 
              value={jobDetails.requirements} 
              onChange={handleChange} 
              required 
            />
            <TextAreaField 
              label="Company Information" 
              name="companyInfo" 
              value={jobDetails.companyInfo} 
              onChange={handleChange} 
            />
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
