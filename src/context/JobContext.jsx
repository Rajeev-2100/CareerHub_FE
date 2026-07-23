import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const JobContext = createContext();

const API_BASE_URL = "https://career-hub-wheat-two.vercel.app/api";

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Get All Jobs
  const getAllJobsDetails = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${API_BASE_URL}/all-job`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch jobs");
      }

      setJobs(data.data);
      return data.data;
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
      console.error(err);
      return [];
    } finally {
      setLoading(false);
    }
  };

  // Get Single Job
  const getJobById = async (jobId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/get-job/${jobId}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch job");
      }

      return data.data;
    } catch (err) {
      toast.error(err.message);
      console.error(err);
      throw err;
    }
  };

  // Add Job
  const addJob = async (jobData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/add-job`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jobData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to add job");
      }

      setJobs((prev) => [data.data, ...prev]);

      toast.success("Job posted Added successfully!");

      return data.data;
    } catch (err) {
      toast.error(err.message);
      console.error(err);
      throw err;
    }
  };

  // Delete Job
  const deleteJob = async (jobId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/delete-job/${jobId}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to delete job");
      }

      setJobs((prev) => prev.filter((job) => job._id !== jobId));

      toast.success("Job Post deleted successfully!");

      return data.data;
    } catch (err) {
      toast.error(err.message);
      console.error(err);
      throw err;
    }
  };

  // Update Job
  const updateJob = async (jobId, updatedJob) => {
    try {
      const response = await fetch(`${API_BASE_URL}/update-job/${jobId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedJob),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to update job");
      }

      setJobs((prev) =>
        prev.map((job) => (job._id === jobId ? data.data : job))
      );

      toast.success("Job updated successfully!");

      return data.data;
    } catch (err) {
      toast.error(err.message);
      console.error(err);
      throw err;
    }
  };

  return (
    <JobContext.Provider
      value={{
        jobs,
        loading,
        error,
        getAllJobsDetails,
        getJobById,
        addJob,
        deleteJob,
        updateJob,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = () => {
  const context = useContext(JobContext);

  if (!context) {
    throw new Error("useJobs must be used within JobProvider");
  }

  return context;
};

export default JobContext;