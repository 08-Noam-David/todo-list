import React, { Component } from 'react';

import AddBar from '../components/AddBar';
import TodoList from '../components/TodoList';
import FilterButtons from '../components/FilterButtons';

import initialTodo from '../data/initialData';

export class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: [],
    };
  }

  componentDidMount() {
    this.setState(() => ({
      todo: initialTodo,
    }));
  }

  render() {
    const { todo } = this.state;

    return (
      <React.Fragment>
        <AddBar />
        <TodoList todo={todo} />
        <FilterButtons />
      </React.Fragment>
    );
  }
}

export default MainPage;
