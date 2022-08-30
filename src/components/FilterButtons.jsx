import React, { Component } from 'react';

export class FilterButtons extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <button className="btn btn-primary">ALL</button>
            <button className="btn btn-primary">COMPLETED</button>
            <button className="btn btn-primary">LEFT</button>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterButtons;
