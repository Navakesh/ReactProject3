import Button from '../UI/Button';
import './AddUser.css';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';

import React, { useState } from 'react';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error,setError]=useState(false)


  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        setError({
          title:"Invalid Input",
          message:"please enter a valid username and age"
        })
        return;
    }
    if (+enteredAge <= 0) {
        setError({
          title:"Invalid Input",
          message:"Please enter a valid age( > 0)"
        })
        return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const  errorhandler=()=>{
    setError(false)
  }

  return (<div>
    {error && <ErrorModal title={error.title}  message={error.message} onConfirm={errorhandler} />}
    <Card className='input'>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUser;
