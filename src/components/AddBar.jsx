import React, { Component } from 'react';

export class AddBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    this.props.onTodoAdd(form.elements['task'].value);
    form.reset();
  };

  handleTaskChange = (e) => {
    this.setState(() => ({
      task: e.target.value,
    }));
  };

  render() {
    const { task } = this.state;

    return (
      <form className="container-fluid" onSubmit={this.handleSubmit}>
        <div className="row mb-3 me-1">
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              name="task"
              placeholder="What do you need to do today?"
              value={task}
              onChange={this.handleTaskChange}
            />
          </div>
          <button type="submit" className="btn btn-primary col-sm-2">
            Add
          </button>
        </div>
      </form>
    );
  }
}

export default AddBar;
