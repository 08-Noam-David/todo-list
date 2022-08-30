import React, { Component } from 'react';
import { Outlet, Link } from 'react-router-dom';

import SiteHeader from '../components/SiteHeader';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'pretty-checkbox/dist/pretty-checkbox.min.css';

export class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <SiteHeader />
        <main className="container">
          <Outlet />
        </main>
      </React.Fragment>
    );
  }
}

export default Layout;
