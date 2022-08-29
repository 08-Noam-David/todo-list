import React, { Component } from 'react';
import { Outlet, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'pretty-checkbox/dist/pretty-checkbox.min.css';

export class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              Todo app
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div id="navbarCollapse" className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link to="about" className="nav-link">About</Link>
                </li>
            </ul>
          </div>
        </nav>
        <main className="container">
          <Outlet />
        </main>
      </React.Fragment>
    );
  }
}

export default Layout;
