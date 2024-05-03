import React,{useState} from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';


function App() {
  const[usersList,setUsersList]=useState([])
  function adduserHandler(Uname,Uage){
      setUsersList((previousList)=>{
        return [...previousList,{name:Uname,age:Uage,id:Math.random().toString()}]
      })
    
  }
  return (
    <div>
      <AddUser onAddUser={adduserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
