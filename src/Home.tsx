import { useEffect, useState } from 'react';

function Home() {
  const [appliedJobs, setAppliedJobs] = useState<string[]>([]);

  useEffect(() => {

    const storedJobs = localStorage.getItem('appliedJobs');

    if (storedJobs) {
      try {
        const jobs = JSON.parse(storedJobs);
        if (Array.isArray(jobs)) {
          setAppliedJobs(jobs);
        }
      } catch (error) {
        console.error('Error parsing applied jobs:', error);
      }
    }
  }, []);

  return (
   <div className="card-container">
     <div>
    
      <h3>Jobs You Applied For:</h3>
      {appliedJobs.length > 0 ? (
        <ul>
          {appliedJobs.map((job, index) => (
            <li key={index}>{job}</li>
          ))}
        </ul>
      ) : (
        <p>No jobs applied yet.</p>
      )}
    </div>
   </div>
  );
}

export default Home;
