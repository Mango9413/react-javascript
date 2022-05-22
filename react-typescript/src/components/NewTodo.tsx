import React, {useContext, useRef} from 'react';
import {TodosContext} from "../store/todos-context";
import classes from './NewTodo.module.css'

//don't need a return value => set void as an expected return value
// const NewTodo: React.FC<{onAddTodo: (text: string)=> void}> = (props) => {
const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext)

    //必须有initial值，否则没法创建HTMLInputElement
    const todoTextInputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()

        //current?因为todoTextInputRef可以没有，如确认一定有值(can't be null)可以用current!
        const enteredText = todoTextInputRef.current!.value

        if (enteredText.trim().length === 0) {
            //throw an error
            return;
        }

        // props.onAddTodo(enteredText)
        todosCtx.addTodo(enteredText)
    }

    return (
        <form
            className={classes.form}
            onSubmit={submitHandler}>
            <label htmlFor='text'>Todo text</label>
            <input
                type="text"
                id='text'
                ref={todoTextInputRef}/>
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;