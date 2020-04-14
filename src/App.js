import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/ToDos';
import AddToDo from './components/AddToDo';


import './App.css';

class App extends Component {
  state = {
    todos: [
      { 
        id: 1,
        title: 'Drink beer.',
        completed: false
      },
      { 
        id: 2,
        title: 'Drink more beer.',
        completed: false
      },
      { 
        id: 3,
        title: 'Drink even more beer',
        completed: false
      }
    ]
  }

  // Toggle Complete
  markComplete = id => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  delToDo = id => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) })
  }

  render() {    
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddToDo />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delToDo={this.delToDo}/>
        </div>       
      </div>
    );
  }
} 


export default App;
