import React, {useState, useEffect} from 'react'
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';
import TodoForm from './TodoForm';

function Todo({todos, completeTodo, deleteTodo, updateTodo}) {

    const [editTodo, setEditTodo] = useState({
        id: null,
        value: '',
        edit: false,
        completed: null
    })

    const updateFormClass='flex-1';

    const handleUpdate = () => {
        setEditTodo({
            id: null,
            value: '',
            edit: false,
            completed: null
        })
    }

    return(
        <div className="space-y-3 flex flex-wrap justify-around bg-green-100 px-4 py-2 m-2">
            {todos.map((todo, index) =>
                (editTodo.id === todo.id) ? 
                (<TodoForm classes={updateFormClass} key={index} edit={editTodo} updateTodo={updateTodo} handleUpdate={handleUpdate}/>) :
                (<div key={index} className={`border-2 border-dashed cursor-pointer flex items-center p-1 rounded ${todo.completed ? 'line-through text-gray-500 italic border-gray-300': 'border-green-300'}`}>
                    <div className="mr-2" onClick={() => completeTodo(todo.id)}>{todo.value}</div>
                    <RiCloseCircleLine className="" onClick={() =>deleteTodo(todo.id)}/>
                    <TiEdit className="" onClick={() => setEditTodo(todo)}/>
                </div>)
             )}
        </div>
    ) 
    
    // (editTodo.id === todo.id) ?
    //  (<TodoForm key={index} edit={editTodo} updateTodo={updateTodo} handleUpdate={handleUpdate}/>): (
        // <div key={index} className={todo.completed ? 'todo-row complete': 'todo-row'}>
        //     <div className="task flex-item" onClick={() => completeTodo(todo.id)}>{todo.value}</div>
        //     <RiCloseCircleLine className="delete-btn" onClick={() =>deleteTodo(todo.id)}/>
        //     <TiEdit className="edit-btn" onClick={() => setEditTodo(todo)}/>
        // </div>
    // ) 
}

export default Todo
