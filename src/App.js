import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="m-12 border-2 border-dashed border-green-300 bg-green-100 text-green-700">
      <div className="md:text-center">
        <h1 className="uppercase font-mono font-bold text-2xl">Be productive !</h1>
        <h1 className="italic font-sans text-lg capitalize text-green-600 font-medium ">to-dooo list</h1>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
