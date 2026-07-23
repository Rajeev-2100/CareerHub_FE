import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useJobs } from "../context/JobContext";

const JobDetailsPage = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const { getJobById } = useJobs();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJob = async () => {
      try {
        setLoading(true);
        const data = await getJobById(jobId);
        setJob(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (jobId) fetchJob();
  }, [jobId]);

  if (loading) return <h3 className="text-center mt-5">Loading job details...</h3>;
  if (error) return <h3 className="text-center mt-5 text-danger">{error}</h3>;
  if (!job) return <h3 className="text-center mt-5">Job not found</h3>;

  return (
    <>
      <Header />
      <main className="container py-4">
        <h2 className="fw-bold mb-4">{job.jobTitle}</h2>

        <div className="card shadow-sm">
          <div className="card-body">
            <p><strong>Company Name:</strong> {job.companyName}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Salary:</strong> ₹{job.salary}</p>
            <p><strong>Job Type:</strong> {job.jobType}</p>
            <p><strong>Description:</strong> {job.jobDescription}</p>

            <div>
              <strong>Qualifications:</strong>
              <ol className="mt-2">
                {job.qualification?.split(",").map((q, i) => (
                  <li key={i}>{q.trim()}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default JobDetailsPage;