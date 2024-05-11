import React from 'react';
import classes from "./AddUser.module.css"

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={addUserHandler} className={classes.input}>
    <label htmlFor="username" className={classes.label}>Username</label>
    <input id="username" type="text" className={classes.input} />

    <label htmlFor="age" className={classes.label}>Age</label>
    <input id="age" type="number" className={classes.input} />

    <button type="submit">Add User</button>
</form>

  );
};

export default AddUser;