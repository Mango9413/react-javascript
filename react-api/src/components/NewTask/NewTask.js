import React from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from "../../hooks/use-http";

const NewTask = (props) => {
    const {isLoading, error, sendRequest: sendTaskRequest} = useHttp()

    // option1: move createTasks inside enterTaskHandler to access taskText
    // const enterTaskHandler = (taskText) => {
    //     const createTasks = taskData => {
    //         const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    //         const createdTask = {id: generatedId, text: taskText};
    //
    //         props.onAddTask(createdTask);
    //     }
    //
    //     sendTaskRequest(
    //         {
    //             url: 'https://fancy-foodorder-default-rtdb.firebaseio.com/tasks.json',
    //             method: 'POST',
    //             body:{text: taskText},
    //             headers:{'Content-Type':'application/json'}
    //             }, createTasks)
    // }

    // option2: pass taskText as second params and using bind in enterTaskHandler
    const createTasks = (taskText, taskData) => {
        const generatedId = taskData.name; // firebase-specific => "name" contains generated id
        const createdTask = {id: generatedId, text: taskText};

        props.onAddTask(createdTask);
    }
    const enterTaskHandler = (taskText) => {
        sendTaskRequest(
            {
                url: 'https://fancy-foodorder-default-rtdb.firebaseio.com/tasks.json',
                method: 'POST',
                body:{text: taskText},
                headers:{'Content-Type':'application/json'}
            }, createTasks.bind(null, taskText)
        )
    }

    return (
        <Section>
            <TaskForm onEnterTask={enterTaskHandler} loading={isLoading}/>
            {error && <p>{error}</p>}
        </Section>
    );
};

export default NewTask;
