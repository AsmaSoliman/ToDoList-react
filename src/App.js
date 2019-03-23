import React, { Component } from 'react';
import ToDoList from './components/To-Do/List';
import DeletedList from './components/To-Do/DeletedList';
import DoneList from './components/To-Do/DoneList';
import './App.css';

class App extends Component {
  render() {
    return (
     <>
       <ToDoList/>
       <DeletedList/>
       <DoneList/>
     </>

    );
  }
}

export default App;
