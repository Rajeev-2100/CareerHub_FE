import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { JobProvider } from "./context/JobContext";
import JobDetailsPage from "./pages/JobDetailsPage.jsx";
import PostingJobPage from "./pages/PostingJobPage.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/job/:jobId",
    element: <JobDetailsPage />,
  },
  {
    path: "/post-job",
    element: <PostingJobPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <JobProvider>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </JobProvider>
  </StrictMode>,
);
