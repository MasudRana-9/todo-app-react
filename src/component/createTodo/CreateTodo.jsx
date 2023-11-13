import React, { useState } from "react"
import './CreateTodo.css'
import { useDispatch , useSelector } from "react-redux";
import { addTodo } from "../../features/todoSlice";



const CreateTodo = (props) => {
    const [todo , setTodo] = useState({
        title : '',
        description : ''
    })
    const dispatch = useDispatch()
    const { todos } = useSelector(state => state.todo)

    const handleChange =  (e) => {
        setTodo((prevTodo) => {
            return {
                ...prevTodo, 
                id : todos.length + 1 ,
                [e.target.name] : e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(todo))
        setTodo({title : '', description : ''})
    }

  return (
    <div className="create-todo">
      <form action="" onSubmit={handleSubmit}>
        <div className="input-box">
            <label htmlFor="title">Todo Title</label>
            <input type="text" name="title" onChange={handleChange} value={todo.title}/>
        </div>
        <div className="input-box">
            <label htmlFor="description">Todo Description</label>
            <input type="text" name="description" onChange={handleChange} value={todo.description}/>
        </div>
        <button>Add Todo</button>
      </form>
    </div>
  )
};

export default CreateTodo ;
