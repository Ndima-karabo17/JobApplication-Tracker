import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export interface Job {
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

export const initialState: Job = {
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

export function useJobManager() {
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setJobDetails((prev) => ({ ...prev, [name]: value }));
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

  return { jobDetails, editIndex, handleChange, handleSubmit };
}