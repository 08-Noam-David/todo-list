import React, { Component } from 'react';

import TodoListItem from './TodoListItem';

export class TodoList extends Component {
  render() {
    const { todos } = this.props;

    return (
      <div className="card">
        <ul className="list-group list-group-flush">
          {todos.map((t) => (
            <TodoListItem key={t.id} {...t} />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
