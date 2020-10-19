import React, { useEffect, useRef, useContext } from 'react'
import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context'

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    toggleBtnRef.current.click();
  }, []);

  let assigneedClasses = [];
  if(props.persons.length <= 1) assigneedClasses.push(classes.blue);

  let btnClass = [classes.Button];
  if(props.showPersons) btnClass.push(classes.Red);

  return (
    <div className={classes.Cockpit}>
      <h1 className={assigneedClasses.join(' ')}>{props.title}</h1>
      <button 
        ref={toggleBtnRef}
        className={btnClass.join(' ')} 
        onClick={props.toggled}
      >
        Toggle Persons
      </button>
      <button 
        className={classes.Button} 
        onClick={authContext.login} 
      >
        Log in!
      </button>
    </div>
  );
}


export default cockpit;