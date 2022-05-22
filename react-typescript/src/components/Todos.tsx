import React, {useContext} from 'react';
// import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import {TodosContext} from "../store/todos-context";
import classes from './Todos.module.css'

//build in type definition React.FC
//<{}> merge whichever object type we are defining here => define your own props
// const Todos: React.FC<{ items: Todo[], onRemove: (id: string)=> void }> = (props) => {
const Todos : React.FC = () => {
    const todosCtx = useContext(TodosContext)

    return (
        <ul className={classes.todos}>
            {todosCtx.items.map(item =>
                <TodoItem
                    //pre-configure a function
                    // onRemove={props.onRemove.bind(null, item.id)}
                    onRemove={todosCtx.removeTodo.bind(null, item.id)}
                    key={item.id}
                    text={item.text}/>)}
        </ul>
    );
};

export default Todos;