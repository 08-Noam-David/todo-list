import React, { Component } from 'react';

export class TodoListItem extends Component {
  render() {
    const { name, isDone } = this.props;

    return (
      <li className="list-group-item">
        <div className="pretty p-default">
          {/* defaultChecked is used because right now we have no onChange handler */}
          <input type="checkbox" defaultChecked={isDone} />
          <div className="state p-primary">
            <label>{name}</label>
          </div>
        </div>
      </li>
    );
  }
}

export default TodoListItem;
