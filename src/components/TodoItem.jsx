import React, { useState } from 'react'
import { useTodo } from '../context';
function TodoItem({ todo }) {
    const [isTodoEditable,setIsTodoEditable] = useState(false)
    const [todoMsg,setTodoMsg]=useState(todo.todo)
    const {updatedTodo,deleteTodo,toggleComplete} = useTodo()
    const editTodo = ()=> { 
        updatedTodo(todo.id,{...todo,todo:todoMsg})
        setIsTodoEditable(false)
    }
    const toggleCompleted = ()=>{
        toggleComplete(todo.id)
    }
    
    return (
        <div
          className={`flex border rounded-lg px-4 py-2 gap-x-3 shadow-md duration-300 text-gray-800 ${
            todo.completed ? "bg-green-100" : "bg-purple-100"
          }`}
        >
          <input
            type="checkbox"
            className="cursor-pointer accent-purple-500"
            checked={todo.completed}
            onChange={toggleCompleted}
          />
          <input
            type="text"
            className={`border outline-none w-full bg-transparent rounded-lg px-2 ${
              isTodoEditable ? "border-purple-300" : "border-transparent"
            } ${todo.completed ? "line-through text-gray-500" : ""}`}
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
            readOnly={!isTodoEditable}
          />
        
          <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border justify-center items-center bg-purple-500 text-white hover:bg-purple-600 transition-colors duration-200 shrink-0 disabled:opacity-50"
            onClick={() => {
              if (todo.completed) return;
      
              if (isTodoEditable) {
                editTodo();
              } else setIsTodoEditable((prev) => !prev);
            }}
            disabled={todo.completed}
          >
            {isTodoEditable ? "📁" : "✏️"}
          </button>
        
          <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border justify-center items-center bg-red-500 text-white hover:bg-red-600 transition-colors duration-200 shrink-0"
            onClick={() => deleteTodo(todo.id)}
          >
            ❌
          </button>
        </div>
      );
      
}

export default TodoItem;