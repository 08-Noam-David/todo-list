import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

export class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="container-fluid bg-light text-center">
          <h1>Todo app</h1>
        </header>
        <main className="container">
          <Outlet />
        </main>
      </React.Fragment>
    );
  }
}

export default Layout;
