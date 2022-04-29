import React, {useState} from 'react';
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModule from "../UI/ErrorModule";
import styled from './AddUser.module.css'

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if (enteredAge * 1 < 0) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (>0).'
            })
            return;
        }
        props.onAddUser(enteredUsername, enteredAge)
        setEnteredUsername('')
        setEnteredAge('')
    }
    const usernameChangeHandler = event => {
        setEnteredUsername(event.target.value)
    }
    const ageChangeHandler = event => {
        setEnteredAge(event.target.value)
    }
    const errorHandler = () => {
        setError(null)
    }

    return (
        <div>
            {error && <ErrorModule
                title={error.title}
                message={error.message}
            onErrorHandler={errorHandler}/>}
            <Card className={styled.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input onChange={usernameChangeHandler}
                           value={enteredUsername}
                           id="username" type="text"/>
                    <label htmlFor="age">Age (Years)</label>
                    <input onChange={ageChangeHandler}
                           value={enteredAge}
                           id="age" type="number"/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>

    );
};

export default AddUser;
