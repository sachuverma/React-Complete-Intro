import React from 'react'
import styled from 'styled-components';
import './Person.css'

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  background: rgba(175, 184, 53, 0.432);
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  '@media (min-width: 700px)':{
    width: '600px;'
  }
`;

const person = (props) => {
  return (
    // <div className="Person" style={style}>
    <StyledDiv>
      <h2 onClick={props.click}>I am a {props.name} and {props.age} years old! {props.children}</h2>
      <input type="text" onChange={props.changed} value={props.name}/>
    </StyledDiv>
  )
}

export default person