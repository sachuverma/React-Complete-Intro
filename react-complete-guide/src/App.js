import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {
  state = {
    persons: [
      { id:'sadff', name: "Sachu", age: "20" },
      { id:'qwert', name: "Chauth", age: "19" },
      { id:'rtewe', name: "Gulli", age: "20" }
    ],
    otherData: 'some other data',
    showPersons: false
  }

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => { 
      return id === p.id; 
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    const style = {
      backgroundColor: 'rgba(49, 84, 136, 0.9)',
      font: 'inherit',
      color: 'white',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
            />
          })}
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>REACT APP</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}

      </div>
    ); 
  }
}

export default App;
