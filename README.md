# Job Posting App - Frontend

This is the frontend user interface for the Job Posting App. It is built with a modern web stack utilizing [React](https://react.dev/), [Vite](https://vitejs.dev/), and [Bootstrap](https://getbootstrap.com/) for a responsive design.

## Prerequisites

- Node.js installed on your local machine

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```
   The development server will typically start on `http://localhost:5173`. Open this URL in your browser to view the application.

3. **Build for production:**
   ```bash
   npm run build
   ```
   This will generate a `dist` folder containing the compiled static assets, ready for deployment.

## Technologies & Libraries Used

- **React (v19)**: The core JavaScript library for building the UI.
- **Vite**: A lightning-fast build tool and development server.
- **React Router DOM**: For handling navigation and routing within the Single Page Application.
- **Bootstrap**: For pre-styled, responsive CSS UI components.
- **React Toastify**: For displaying interactive, elegant notifications and alerts.
- **Oxlint**: A highly performant linter used to ensure code quality.

## Available Scripts

- `npm run dev`: Starts the Vite development server with Hot Module Replacement (HMR).
- `npm run build`: Bundles the application for production.
- `npm run preview`: Boots up a local static web server that serves the production build.
- `npm run lint`: Runs Oxlint to check for code issues.
