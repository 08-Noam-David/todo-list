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
    return (
      <React.Fragment>
        <AddBar />
        <TodoList />
        <FilterButtons />
      </React.Fragment>
    );
  }
}

export default MainPage;
