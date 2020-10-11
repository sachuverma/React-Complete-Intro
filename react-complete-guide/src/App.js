import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    persons: [
      { name: "Sachu", age: "20" },
      { name: "Chauth", age: "19" },
      { name: "Gulli", age: "20" }
    ],
    otherData: 'some other data',
    username: 'superuser'
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

  usernameChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    });
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

        
        <br />
        <h1>My Work</h1>
        <UserInput nameChange={this.usernameChangedHandler} currentName={this.state.username}/>
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Samrat" />
        <UserOutput userName={this.state.username}/>

      </div>
    ); 
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Heyyy'))
  }
}

export default App;
