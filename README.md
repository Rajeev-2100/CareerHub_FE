# Job Posting App - Frontend

This is the frontend (client-side) of the **Job Posting App** — a Single Page Application (SPA) built with React and Vite. It allows users to browse job listings, view job details, post new jobs, and delete existing ones. It communicates with the backend REST API to perform all data operations.

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| **React (v19)** | Core UI library |
| **Vite (v8)** | Build tool & dev server |
| **React Router DOM (v7)** | Client-side routing |
| **Bootstrap (v5)** | Responsive UI styling |
| **React Toastify** | Toast notifications |
| **Oxlint** | Fast JavaScript linter |

---

## 📁 Project Structure

```
Job_Posting-FE/
├── src/
│   ├── components/
│   │   └── Header.jsx          # Navbar with links to Job Postings & Post a Job
│   ├── context/
│   │   └── JobContext.jsx      # Global state & all API calls (CRUD operations)
│   ├── pages/
│   │   ├── JobDetailsPage.jsx  # Single job detail view (fetched by ID)
│   │   └── PostingJobPage.jsx  # Form to create a new job post
│   ├── App.jsx                 # Home page — lists all jobs with search & delete
│   ├── main.jsx                # App entry point, wraps app in Router & JobProvider
│   └── useFetch.jsx            # Custom fetch hook (utility)
├── index.html
├── vite.config.js
└── package.json
```

---

## 📄 Pages & Features

### 🏠 Home Page (`/`)
- Fetches and displays all job posts in a responsive card grid.
- **Search bar** to filter jobs by title in real time.
- Each card shows: Job Title, Company, Location, Job Type.
- **See Details** button navigates to the job details page.
- **Delete** button removes the job post with a confirmation toast.

### 📋 Job Details Page (`/job/:jobId`)
- Displays full details of a selected job post fetched by its ID.
- Shows: Company Name, Location, Salary (₹), Job Type, Description, and Qualifications (as a list).

### ✍️ Post a Job Page (`/post-job`)
- A form to create a new job post with fields for:
  - Job Title, Company Name, Location, Salary
  - Job Type (dropdown: Full-time/Part-time, On-site/Remote)
  - Job Description, Qualifications
- On success, shows a toast notification and resets the form.

---

## ⚙️ Environment Variables

The app uses an environment variable to configure the backend API URL. Create a `.env` file in the root of this folder:

```env
VITE_API_URL=http://localhost:3001/api
```

> For production (Vercel), set `VITE_API_URL` to your deployed backend URL in the Vercel project's Environment Variables settings.
>
> If `VITE_API_URL` is not set, it defaults to `http://localhost:3001/api`.

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variable
Create a `.env` file in the project root:
```env
VITE_API_URL=http://localhost:3001/api
```

### 3. Run the Development Server
```bash
npm run dev
```
The app will be available at `http://localhost:5173`.

> ⚠️ Make sure the **backend server** is also running on port `3001` before starting the frontend.

---

## 📦 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Build the app for production (outputs to `/dist`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint to check for code issues |

---

## 🔗 Backend

This frontend connects to the **Job Posting Backend** (`Job_Posting-BE`), a Node.js + Express + MongoDB REST API.

Make sure the backend is running and the correct `VITE_API_URL` is configured.
