import React,{ useState } from 'react';

import AddUser from './Users/AddUser';
import UserList from './Users/UserList';

function App() {
  const[users, setUsers] = useState([])
  

  //get data from adduser
  const userData = (data) => {
    setUsers(prev => [...prev, data]
     )
  }

  return (
    <>
      <AddUser onSave={userData} />
      <UserList users={users} />
    </>
  );
}

export default App;
