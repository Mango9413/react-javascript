import React, {useRef, useState} from 'react';
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModule from "../UI/ErrorModule";
import Wrapper from "../Helper/Wrapper";
import styled from './AddUser.module.css'

const AddUser = (props) => {
    const nameInputRef = useRef()
    const ageInputRef = useRef()
    const [error, setError] = useState(null)

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
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
        props.onAddUser(enteredName, enteredAge);
        //rarely use
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
    }
    const errorHandler = () => setError(null)

    return (
        <Wrapper>
            {error && <ErrorModule
                title={error.title}
                message={error.message}
                onErrorHandler={errorHandler}/>}
            <Card className={styled.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        ref={nameInputRef}
                        id="username" type="text"/>
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        ref={ageInputRef}
                        id="age" type="number"/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>

    );
};

export default AddUser;
