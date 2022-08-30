import React, { Component } from 'react';

import TodoListItem from './TodoListItem';

export class TodoList extends Component {
  render() {
    const { todos, onToggleDone, onTodoRemove } = this.props;

    return (
      <div className="card mb-4">
        <ul className="list-group list-group-flush">
          {todos.map((t) => (
            <TodoListItem
              key={t.id}
              onToggleDone={onToggleDone}
              onTodoRemove={onTodoRemove}
              {...t}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
