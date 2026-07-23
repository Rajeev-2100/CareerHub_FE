import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="bg-primary">
        <nav className="navbar navbar-expand-lg px-4">
          <div className="container container-fluid d-flex gap-2 align-items-center">
            <Link className="navbar-brand" to="/">
              <h4 className="text-light fs-2 fw-thin">Inter House</h4>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    <h6 className="text-light fs-5 fw-thin m-0 text-muted">
                      Job Postings
                    </h6>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/post-job">
                    <h6 className="text-light fs-5 fw-thin m-0 text-muted">
                      Post a Job
                    </h6>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
