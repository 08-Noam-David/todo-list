import React, { Component } from 'react';

import AddBar from '../components/AddBar';
import TodoList from '../components/TodoList';
import FilterButtons from '../components/FilterButtons';

export class MainPage extends Component {
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
