import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext';


function TodoForm() {
    const [todo,setTodo] =useState("")
    const {addTodo}=useTodo()
    const add = (e)=>{
        e.preventDefault()
        if(!todo) return
        
        addTodo({todo,completed:false})
        setTodo("")
    }   
    return (
        <form onSubmit={add} className="flex shadow-lg rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Write Todo..."
            className="w-full border-none rounded-none px-4 py-2 outline-none text-gray-900 bg-blue-50 focus:bg-white transition-all duration-200"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold transition-all duration-200"
          >
            Add
          </button>
        </form>
      );
      
}

export default TodoForm;
