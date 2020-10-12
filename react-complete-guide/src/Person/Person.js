import React from 'react'
import classes from './Person.css'


const person = (props) => {
  return (
    <div className={classes.Person}>
      <h2>I am a {props.name} and {props.age} years old! {props.children}</h2>
      <input type="text" onChange={props.changed} value={props.name}/>
      <p className={classes.deleteButton} onClick={props.click}>Delete Me</p>
    </div>
  )
}

export default person