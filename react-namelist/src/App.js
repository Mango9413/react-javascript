import React, {useState} from 'react';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";


function App() {
    const [users, setUsers] = useState([])
    const addUserListHandler = (uName, uAge) => {
        setUsers((prevUser) => {
            return [...prevUser,
                {
                    name: uName,
                    age: uAge,
                    id: Math.random().toString()
                }]
        })
    }
    return (
        <React.Fragment>
            <AddUser onAddUser={addUserListHandler}/>
            <UsersList users={users}/>
        </React.Fragment>
    );
}

export default App;
