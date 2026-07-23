import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useJobs } from "./context/JobContext";
import Header from "./components/Header";
import { useState, useEffect } from "react";

function App() {
  const { jobs, deleteJob, getAllJobsDetails } = useJobs();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    getAllJobsDetails();
  }, [getAllJobsDetails]);

  useEffect(() => {
    const filtered = jobs.filter((job) =>
      job.jobTitle?.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredJobs(filtered);
  }, [jobs, searchTerm]);

  const handleDelete = async (id) => {
    await deleteJob(id);
  };

  return (
    <>
      <Header />

      <main className="container my-4">
        <div className="row mb-3">
          <div className="col-md-12">
            <input
              type="text"
              className="form-control"
              placeholder="Search by job title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <h2 className="mb-4 fw-bold">All Jobs ({filteredJobs.length})</h2>

        <div className="row">
          {filteredJobs.length === 0 ? (
            <p className="text-center">No jobs found.</p>
          ) : (
            filteredJobs.map((job) => (
              <div className="col-md-4 mb-4" key={job._id}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="fw-bold">{job.jobTitle}</h5>
                    <p>
                      <strong>Company:</strong> {job.companyName}
                    </p>
                    <p>
                      <strong>Location:</strong> {job.location}
                    </p>
                    <p>
                      <strong>Job Type:</strong> {job.jobType}
                    </p>

                    <div className="d-flex gap-2 mt-3">
                      <Link
                        to={`/job/${job._id}`}
                        className="btn btn-primary btn-sm flex-grow-1"
                      >
                        See Details
                      </Link>
                      <button
                        className="btn btn-danger btn-sm flex-grow-1"
                        onClick={() => handleDelete(job._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </>
  );
}

export default App;
