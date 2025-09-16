import { useState } from 'react';

function JobPage() {
    const initialState = {
        jobTitle: '',
        companyName: '',
        address: '',
        contactEmail: '',
        contactPhone: '',
        jobDuties: '',
        requirements: '',
        companyInfo: '',
    };

    const [jobDetails, setJobDetails] = useState(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setJobDetails((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Job Info:', jobDetails);
        alert('Job information saved!');
        setJobDetails(initialState); 
    };

    return (
        <>
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
                    />
                </div>

                <div>
                    <label>Contact Phone:</label>
                    <input
                        type="number"
                        name="contactPhone"
                        value={jobDetails.contactPhone}
                        onChange={handleChange}
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

                <button type="submit">Save Job Info</button>
            </form>
        </>
    );
}

export default JobPage;
