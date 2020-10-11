import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>heyyy</h1>
        <p>This is working</p>
        <Person />
        <Person />
      </div>
    ); 
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Heyyy'))
  }
}

export default App;
