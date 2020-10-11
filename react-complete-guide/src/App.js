import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Sachu", age: "20" },
      { name: "Chauth", age: "19" },
      { name: "Gulli", age: "20" }
    ],
    otherData: 'some other data'
  }

  switchNameHandler = (newName) => {
    console.log('switch name button clicked');
    // DONT DO THIS: 
    // this.state.persons[0].name = "Bhopu";
    this.setState({
      persons: [
        { name: newName, age: "20" },
        { name: "Chauth", age: "19" },
        { name: "Gulli", age: "21" }
      ]
    })
  }

  nameChangeHandler = (event) => {
    console.log('change name inputbox');
    this.setState({
      persons: [
        { name: "Sachu", age: "20" },
        { name: event.target.value, age: "19" },
        { name: "Gulli", age: "21" }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'rgb(49, 84, 136)',
      font: 'inherit',
      color: 'white',
      borderRadius: '12px',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>REACT APP</h1>
        <p>This is working</p>
        
    <button style={style} onClick={() => this.switchNameHandler('Nitin') /* not recommended */}>Switch Name</button>
        
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
        />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Bhopu") /* recommended */} 
          changed={this.nameChangeHandler}
        > 
            My Hobbies: coding...coding...coding 
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
        />
      </div>
    ); 
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Heyyy'))
  }
}

export default App;
