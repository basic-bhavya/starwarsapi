import React, { Component } from 'react';
import './App.css';
import Cardlist from './Cardlist';

class App extends Component{
    constructor() {
      super()
      this.state = {
        people: []
      }
    }

  componentDidMount() {
    // fetch('https://swapi.co/api/people/10')
    // .then(res => res.json())
    // .then(user => this.setState({people:user}))
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({people:users}))
  }

  render() {
    return (
    <div className="tc mt1">
      <h1 className="tc strong white">SWAPI</h1>
      <h1 className="f1 tc">Star Wars API</h1>
      <Cardlist />
    </div>
    )
  };
}

export default App;
