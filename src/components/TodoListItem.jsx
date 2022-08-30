import React, { Component } from 'react';

export class TodoListItem extends Component {
  render() {
    const { name, isDone } = this.props;

    return (
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="pretty p-default">
          {/* defaultChecked is used because right now we have no onChange handler */}
          <input type="checkbox" defaultChecked={isDone} />
          <div className="state p-primary">
            <label>{name}</label>
          </div>
        </div>
        <button role="button" className="btn btn-primary btn-sm">
          <i className="bi bi-trash-fill"></i>
        </button>
      </li>
    );
  }
}

export default TodoListItem;
