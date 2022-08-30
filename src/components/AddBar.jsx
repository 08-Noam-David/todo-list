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
      <form onSubmit={this.handleSubmit}>
        <div className="d-flex mb-4">
          <div className="flex-fill me-3">
            <input
              className="form-control"
              type="text"
              name="task"
              placeholder="What do you need to do today?"
              value={task}
              onChange={this.handleTaskChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    );
  }
}

export default AddBar;
