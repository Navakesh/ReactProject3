import React,{useState} from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (Uname, Uage) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: Uname, age: Uage, id:Math.random().toString() }];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
