import React, { Component } from 'react';
import './App.css';
import Cardlist from './Cardlist';

class App extends Component{

  // componentDidMount() {
  //   fetch('https://swapi.co/api/people/10')
  //   .then(res => res.json())
  //   .then(user => this.setState({people:user}))
  // }

  render() {
    return (
    <div className="App">
      <h1 className="f1 tc">Star Wars API</h1>
      <Cardlist people={people} />
    </div>

    )
  };
}

export default App;
