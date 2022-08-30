import React, { Component } from 'react';
import { Outlet, Link } from 'react-router-dom';

import SiteHeader from '../components/SiteHeader';

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
