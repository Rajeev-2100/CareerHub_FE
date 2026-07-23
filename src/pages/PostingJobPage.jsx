import { useContext, useState } from "react";
import Header from "../components/Header";
import JobContext from "../context/JobContext";
import { toast } from "react-toastify";

const PostingJobPage = () => {
  const { addJob } = useContext(JobContext);

  const [jobData, setJobData] = useState({
    jobTitle: "",
    companyName: "",
    location: "",
    salary: "",
    jobType: "",
    jobDescription: "",
    qualification: "",
  });

  const jobTypes = [
    "Full-time (On-site)",
    "Part-time (On-site)",
    "Full-time (Remote)",
    "Part-time (Remote)",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setJobData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addJob(jobData);

      toast.success("Job posted successfully!");

      setJobData({
        jobTitle: "",
        companyName: "",
        location: "",
        salary: "",
        jobType: "",
        jobDescription: "",
        qualification: "",
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Header />

      <main className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <h1 className="fw-bold mb-4">Post a Job</h1>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Job Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="jobTitle"
                  value={jobData.jobTitle}
                  onChange={handleChange}
                  placeholder="Enter job title"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="companyName"
                  value={jobData.companyName}
                  onChange={handleChange}
                  placeholder="Enter company name"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Location</label>
                <input
                  type="text"
                  className="form-control"
                  name="location"
                  value={jobData.location}
                  onChange={handleChange}
                  placeholder="Enter location"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Salary</label>
                <input
                  type="number"
                  className="form-control"
                  name="salary"
                  value={jobData.salary}
                  onChange={handleChange}
                  placeholder="Enter salary"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Job Type</label>

                <select
                  className="form-select"
                  name="jobType"
                  value={jobData.jobType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Job Type</option>

                  {jobTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Job Description</label>
                <textarea
                  rows="4"
                  className="form-control"
                  name="jobDescription"
                  value={jobData.jobDescription}
                  onChange={handleChange}
                  placeholder="Enter job description"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Job Qualifications</label>
                <textarea
                  rows="3"
                  className="form-control"
                  name="qualification"
                  value={jobData.qualification}
                  onChange={handleChange}
                  placeholder="Separate qualifications with commas"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary px-4">
                Post Job
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default PostingJobPage;
