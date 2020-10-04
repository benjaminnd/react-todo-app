import React, {useState, useEffect, useRef} from 'react'
import {GrAdd, GrUpdate} from 'react-icons/gr'


function TodoForm({classes, edit,addTodo, updateTodo, handleUpdate}) {
    const[input, setInput] = useState('');
    const inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current.focus();
    })
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!edit){
            console.log(input);
            addTodo({
                id: Math.floor(Math.random() * 1000),
                value: input,
                edit: false,
                completed: false
            });
        }else{
            updateTodo({
                id: edit.id,
                value: input,
                edit: false,
                completed: edit.completed
            })
            handleUpdate()
        }

        setInput('')
        
    }

    const iconClass ='h-8 w-8 stroke-current text-green-900'
    return (
        <form className={`mt-5 sm:flex justify-around items-center`} onSubmit={handleSubmit}>
                <div className="">
                    <input
                    className= 'todo-input appearance-none outline-none sm:p-1 leading-snug placeholder-gray-500 placeholder-opacity-50 border-2 border-solid border-green-600 border-opacity-75 rounded-md bg-green-200'
                    type="text" placeholder={edit? '' : 'add task..'} 
                    value={input} name="task" 
                    onChange={ e => setInput(e.target.value)}
                    ref={inputRef}/>                 
                </div>
                <div className="">
                    <button className="w-6 mt-2 focus:outline-none text-green-200">
                        {edit ? <GrUpdate fill="green" className={iconClass}/>: <GrAdd className={iconClass}/>}
                    </button>
                </div>
        </form>
    )
}

export default TodoForm
