import React from 'react'
import './Person.css'

const person = (props) => {
  return (
    <div className="Person">
      <h2 onClick={props.click}>I am a {props.name} and {props.age} years old! {props.children}</h2>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
}

export default person