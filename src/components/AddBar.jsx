import React, { Component } from 'react';

export class AddBar extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row mb-3">
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              name="task"
              placeholder="What do you need to do today?"
            />
          </div>
          <div className="col-sm-2">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddBar;
