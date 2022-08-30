import React, { Component } from 'react';

export class FilterButtons extends Component {
  render() {
    const { filters, onChangeFilter } = this.props;

    return (
      <div className="d-flex">
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
    );
  }
}

export default FilterButtons;
