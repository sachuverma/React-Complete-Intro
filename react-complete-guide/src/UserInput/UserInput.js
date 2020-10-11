import React from 'react'

const UserInput = (props) => {
  return (
    <input className="assg-input" type="text" onChange={props.nameChange} value={props.currentName}/>
  )
}

export default UserInput;