import React, {useState} from 'react';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";


function App() {
    const [users, setUsers] = useState([])
    const addUserListHandler = (uName, uAge) => {
        setUsers((prevUser) => {
            return [...prevUser, {name: uName, age: uAge}]
        })
    }
    return (
        <div>
            <AddUser onAddUser={addUserListHandler}/>
            <UsersList users={users}/>
        </div>
    );
}

export default App;
