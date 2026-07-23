import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useJobs } from "./context/JobContext";
import Header from "./components/Header";

function App() {
  const { jobs, loading, error, getAllJobsDetails, deleteJob } = useJobs();

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    getAllJobsDetails();
  }, []);

  useEffect(() => {
    const filtered = jobs.filter((job) =>
      job.jobTitle?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredJobs(filtered);
  }, [jobs, searchTerm]);

  const handleDelete = async (id) => {
    await deleteJob(id);
  };

  if (loading) {
    return (
      <>
        <Header />
        <main className="container py-5 text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <h4 className="mt-3">Loading jobs...</h4>
        </main>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <main className="container py-5 text-center">
          <h4 className="text-danger">{error}</h4>
        </main>
      </>
    );
  }

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

        <h2 className="mb-4 fw-bold">
          All Jobs ({filteredJobs.length})
        </h2>

        <div className="row">
          {filteredJobs.length === 0 ? (
            <div className="text-center py-5">
              <h4>No jobs found.</h4>
            </div>
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