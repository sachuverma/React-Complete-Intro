import React, { Component } from 'react';
import classes from './App.css';
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

    let assigneedClasses = [];
    if(this.state.persons.length <= 1) assigneedClasses.push(classes.blue);
    let btnClass = [classes.Button];

    let persons = null;
    if (this.state.showPersons){
      btnClass.push(classes.Red);

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
      <div className={classes.App}>
        <h1 className={assigneedClasses.join(' ')}>REACT APP</h1>
        <button className={btnClass.join(' ')} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    ); 
  }
}

export default App;
