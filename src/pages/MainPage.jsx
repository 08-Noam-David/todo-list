import React, { Component } from 'react';

import { nanoid } from 'nanoid';

import AddBar from '../components/AddBar';
import TodoList from '../components/TodoList';
import FilterButtons from '../components/FilterButtons';

import initialTodo from '../data/initialData';

export class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    this.setState(() => ({
      todos: initialTodo,
    }));
  }

  onToggleDone = (id) => {
    const todos = [...this.state.todos];
    const changedIdx = todos.findIndex((t) => t.id === id);
    todos[changedIdx].isDone = !todos[changedIdx].isDone;

    this.setState(() => ({ todos }));
  };

  onTodoAdd = (name) => {
    const newTodo = {
      id: nanoid(),
      name,
      isDone: false,
    };

    const todos = [...this.state.todos, newTodo];
    this.setState(() => ({ todos }));
  };

  onTodoRemove = (id) => {
    const todosBefore = [...this.state.todos];
    const todos = todosBefore.filter((t) => t.id !== id);

    this.setState(() => ({ todos }));
  };

  render() {
    const { todos } = this.state;

    return (
      <React.Fragment>
        <AddBar onTodoAdd={this.onTodoAdd} />
        <TodoList
          todos={todos}
          onToggleDone={this.onToggleDone}
          onTodoRemove={this.onTodoRemove}
        />
        <FilterButtons />
      </React.Fragment>
    );
  }
}

export default MainPage;
