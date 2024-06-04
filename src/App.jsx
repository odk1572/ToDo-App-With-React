import { useEffect, useState } from 'react'
import { Todoprovider } from './context'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos,setTodos] = useState([])
 const addTodo = (todo)=>{
   setTodos((prev)=>[{id:Date.now(),...todo},...prev])
 }
 const updatedTodo = (id,todo)=> { 
  setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?todo:prevTodo )))
 }
 const deleteTodo = (id)=>{
  setTodos((prev)=>prev.filter((todo)=>todo.id !== id))
 }
 const toggleComplete = (id)=>{
  setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id ?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
 }
 useEffect(()=>{
  const todos = JSON.parse(localStorage.getItem("todos"))
  if(todos&&todos.length>0){
    setTodos(todos)
  }
 },[])
 useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
 },[todos])
 return (
  <Todoprovider value={{ todos, addTodo, updatedTodo, deleteTodo, toggleComplete }}>
    <div
      className="min-h-screen py-8 bg-center h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(https://images.playground.com/86f69f14d9fe499794b4fe9d1cb952af.jpeg)' }}
    >
      <div className="w-full max-w-2xl mx-auto shadow-lg rounded-lg px-6 py-5 text-white bg-gray-800 bg-opacity-90">
        <h1 className="text-3xl font-extrabold text-center mb-8 mt-2">ToDo App</h1>
        <div className="mb-6">
          <TodoForm />
        </div>
        <div className="flex flex-wrap gap-4">
          {todos.map((todo) => (
            <div key={todo.id} className="w-full">
              <TodoItem todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </Todoprovider>
);

}

export default App
