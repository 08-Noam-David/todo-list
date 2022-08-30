import React, { Component } from 'react';

import TodoListItem from './TodoListItem';

export class TodoList extends Component {
  render() {
    const { todo } = this.props;

    return (
      <div className="card">
        <ul className="list-group list-group-flush">
          {todo.map((t) => (
            <TodoListItem key={t.id} {...t} />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
