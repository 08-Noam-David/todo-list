import React, { Component } from 'react';

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

  render() {
    const { todos } = this.state;

    return (
      <React.Fragment>
        <AddBar />
        <TodoList todos={todos} onToggleDone={this.onToggleDone} />
        <FilterButtons />
      </React.Fragment>
    );
  }
}

export default MainPage;
