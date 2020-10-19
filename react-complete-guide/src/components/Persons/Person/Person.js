import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classes from './Person.css'

import withClass from '../../../hoc/withClass';
import Auxiliary from '../../../hoc/Auxiliary';
import AuthContext from '../../../context/auth-context'

class Person extends Component {

  constructor(props){
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount(){
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render() {
    return (
      <Auxiliary className={classes.Person}>
        {this.context.authenticated ? <p>Authenticated!</p> : <p>Please Log in!</p>}
        <h2>I am a {this.props.name} and {this.props.age} years old! {this.props.children}</h2>
        <input 
          // ref={(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
          type="text" 
          onChange={this.props.changed} 
          value={this.props.name}
        />
        <p className={classes.deleteButton} onClick={this.props.click}>Delete Me</p>
      </Auxiliary>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person)