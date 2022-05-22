import React from 'react';
import classes from './TodoItem.module.css'

const TodoItem: React.FC<{text: string, onRemove: () => void}> = (props) => {
    // const clickHandler = (event: React.MouseEvent) => {
    //     props.onRemove(props.text)
    // }
    return (
            <li
                onClick={props.onRemove}
                className={classes.item}>{props.text}</li>
    );
};

export default TodoItem;