import React, { Component } from 'react';
import { Outlet, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

export class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Todo app</Link>
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
