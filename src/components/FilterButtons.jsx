import React, { Component } from 'react';

export class FilterButtons extends Component {
  render() {
    const { filters, onChangeFilter } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {/* filters won't change, so we can get away with using index as key */}
            {Object.keys(filters).map((filter, idx) => (
              <button
                key={idx}
                className="btn btn-primary me-1"
                onClick={() => onChangeFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default FilterButtons;
