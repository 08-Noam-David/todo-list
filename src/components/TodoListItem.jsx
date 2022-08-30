import React, { Component } from 'react';

export class TodoListItem extends Component {
  render() {
    const { name, isDone, id, onToggleDone, onTodoRemove } = this.props;

    return (
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="pretty p-default align-self-center">
          <input
            type="checkbox"
            checked={isDone}
            onChange={() => onToggleDone(id)}
          />
          <div className="state p-primary-o">
            <label>{name}</label>
          </div>
        </div>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => onTodoRemove(id)}
        >
          <i className="bi bi-trash-fill"></i>
        </button>
      </li>
    );
  }
}

export default TodoListItem;
