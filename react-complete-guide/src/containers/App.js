import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClass'
import Auxiliary from '../hoc/Auxiliary'
import AuthContext from '../context/auth-context'

class App extends Component {
  state = {
    persons: [
      { id:'sadff', name: "Sachu", age: 20 },
      { id:'qwert', name: "Chauth", age: 19 },
      { id:'rtewe', name: "Gulli", age: 20 }
    ],
    otherData: 'some other data',
    showPersons: false,
    changedCounter: 0,
    authenticated: false
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
    this.setState((prevState, props) => {
      return {
        persons: persons, 
        changedCounter: prevState.changedCounter+1
      }
    });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    let persons = null;
    if (this.state.showPersons){
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} 
            isAuthenticated={this.state.authenticated}
          />
        </div> 
      );
    }

    return (
      <Auxiliary>
        <AuthContext.Provider 
          value={{
            authenticated: this.state.authenticated, 
            login: this.loginHandler
          }}
        >
          <Cockpit 
            title={this.props.appTitle}
            persons={this.state.persons} 
            showPersons={this.state.showPersons}
            toggled={this.togglePersonsHandler}
          />
          {persons}
        </AuthContext.Provider>
      </Auxiliary>
    ); 
  }
}

export default withClass(App, classes.App);
