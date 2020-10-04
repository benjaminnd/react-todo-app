import React, {useState} from 'react';
import Todo from './Todo.js';
import TodoForm from './TodoForm';

function TodoList() {
    const [todos, setTodos] = useState([]);
    let list = []
    const addTodo = todo => {
        if (todo.value === '' || /^\s*$/.test(todo)) {
            return
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    }

    const updateTodo = newTodo => {
        if (newTodo.value === '' || /^\s*$/.test(newTodo)) {
            return
        }

        const newTodos = todos.map(todo => (newTodo.id === todo.id ? newTodo : todo))
        setTodos(newTodos);
    }

    const deleteTodo = id => {
        console.log('deleting ', id, 'from', todos)
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos)
        
    }

    const completeTodo = id => {
        console.log('completed ', id, 'from', todos)
        const newTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo;
        });
        setTodos(newTodos)
        
    }

        

    return (
        <>
            <div className=" flex justify-center">
            <TodoForm addTodo={addTodo}/>
            </div>
            <Todo todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} completeTodo={completeTodo}/>
        </>
    );
}

export default TodoList
