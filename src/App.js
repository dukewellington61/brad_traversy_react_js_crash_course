import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/ToDos';
import AddToDo from './components/AddToDo';
import About from './components/pages/About';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import './App.css';


class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
     axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
     .then(res => this.setState( { todos: res.data }));
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

  // Delete ToDo
  delToDo = id => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) })
  }

  addToDo = title => {
    const newToDo = {
      id: uuidv4(),
      title,
      completed: false
    }

    this.setState({ todos: [...this.state.todos, newToDo]})
  }

  // This version of the addToDo function produces issues because the id of every added object is the same 
  // causing the same children / unique key blah blah error
  // Add ToDo
  // addToDo = title => {
  //   const proxy = 'https://cors-anywhere.herokuapp.com/'; /* add proxy to avoid cors issues */
  //   axios.post(`${proxy}https://jsonplaceholder.typicode.com/todos`, {
  //     title,
  //     completed: false
  //   })
  //     .then(res => this.setState({ todos: 
  //     [...this.state.todos, res.data] }));
  // }

    

  render() {    
    return (
      <Router>    
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddToDo addToDo={this.addToDo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delToDo={this.delToDo}/>
              </React.Fragment>
            )} />  
            <Route path="/about" component={About} />     
          </div>       
        </div>
      </Router>
    );
  }
} 


export default App;
