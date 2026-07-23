import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { JobProvider } from "./context/JobContext";
import JobDetailsPage from "./pages/JobDetailsPage.jsx";
import PostingJobPage from "./pages/PostingJobPage.jsx";

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
    </JobProvider>
  </StrictMode>,
);
