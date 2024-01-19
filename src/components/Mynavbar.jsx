import React from 'react';
import Search from './Search';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../style/Mynavbar.css";

const Sidebar = ({ img }) => {
  return (
    <div className="d-flex flex-column bg-black" style={{ height: '100vh', width: '20%' }}>
      <nav className="navbar navbar-expand-lg navbar-expand-md navbar-white bg-navbar">
        <div className="nav-container">
          <a className="navbar-brand" href="index.html">
            <img src={img} alt="Spotify_Logo" width="131" height="40" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul className='text-decoration-none list-unstyled'>
                <li>
                  <a className="nav-item nav-link text-white" href="index.html">
                    <i className="fas fa-home fa-lg"></i>&nbsp; Home
                  </a>
                </li>
                <li>
                  <a className="nav-item nav-link text-white" href="/">
                    <i className="bi bi-book"></i> Your Library</a>
                  <Search />

                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex-grow-1"></div>

      <div className='d-flex flex-column align-items-start mt-auto'>
        <div className="mb-2 d-flex flex-column m-3">
          <button className="btn btn-outline-light rounded-pill m-2" style={{ width: '100%' }}>
            Sign In
          </button>

          <button className="btn btn-outline-light rounded-pill m-2" style={{ width: '100%' }}>
            Login
          </button>
        </div>
        <div className="mb-2 ms-4">
          <a href="/" className="text-white">Cookie Policy</a> |
          <a href="/" className="text-white">Privacy</a>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;
