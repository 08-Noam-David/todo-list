import React, { Component } from 'react';

import { nanoid } from 'nanoid';

import AddBar from '../components/AddBar';
import TodoList from '../components/TodoList';
import FilterButtons from '../components/FilterButtons';

import initialTodo from '../data/initialData';
import filterTypes from '../data/filterTypes';

export class MainPage extends Component {
  constructor(props) {
    super(props);
    
    this.filters = {
      [filterTypes.ALL]() {
        return true;
      },
      [filterTypes.COMPLETED](todo) {
        return todo.isDone;
      },
      [filterTypes.LEFT](todo) {
        return !todo.isDone;
      }
    };

    this.state = {
      todos: [],
      filter: filterTypes.ALL,
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

  onChangeFilter = (filter) => this.setState(() => ({ filter }));

  render() {
    const { todos, filter } = this.state;

    const filteredTodos = todos.filter(this.filters[filter]);

    return (
      <React.Fragment>
        <AddBar onTodoAdd={this.onTodoAdd} />
        <TodoList
          todos={filteredTodos}
          onToggleDone={this.onToggleDone}
          onTodoRemove={this.onTodoRemove}
        />
        <FilterButtons filters={this.filters} onChangeFilter={this.onChangeFilter} />
      </React.Fragment>
    );
  }
}

export default MainPage;
