import React, {useState} from 'react';
import Todo from "../models/todo";

type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void
}

type Props = {
    children: React.ReactNode;
}

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {
    },
    removeTodo: () => {
    },
})

const TodosContextProvider: React.FC<Props> = (props) => {
    const [todos, setTodos] = useState<Todo[]>([])
    const addTodoHandler = (text: string) => {
        const newTodo = new Todo(text)
        setTodos((prevState) => {
            return [...prevState, newTodo]
        })
    }

    const onRemoveHandler = (todoId: string) => {
        setTodos((prevState) => {
            return prevState.filter(item => item.id !== todoId)
        })
    }

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: onRemoveHandler,
    }

    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
}

export default TodosContextProvider