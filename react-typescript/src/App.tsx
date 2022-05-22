import React from 'react';
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import TodosContextProvider from "./store/todos-context";

function App() {
    // const [todos, setTodos] = useState<Todo[]>([])
    // const addTodoHandler = (text: string) => {
    //     const newTodo = new Todo(text)
    //     setTodos((prevState) => {
    //         return [...prevState, newTodo]
    //     })
    // }
    //
    // const onRemoveHandler = (todoId: string) => {
    //     setTodos((prevState) => {
    //         return prevState.filter(item => item.id !== todoId)
    //     })
    // }

    return (
        <TodosContextProvider>
            <NewTodo />
            <Todos />
        </TodosContextProvider>
    );
}

export default App;