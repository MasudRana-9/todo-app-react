import React, { useEffect, useState } from "react"
import './TodoSearch.css'
import { useSelector , useDispatch } from "react-redux";
import { searchTodo } from "../../features/todoSlice";

const TodoSearch = (props) => {
  const [searchTerm , setSearchTerm] = useState('')
  const { todos } = useSelector(state => state.todo)
  const dispatch = useDispatch()


  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const filterTodo = todos.filter(todo => todo.title.toLowerCase().indexOf(searchTerm) !== -1  )
    dispatch(searchTodo(filterTodo))

    setSearchTerm('')
  }

  return (
    <div className="todo-search">
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="search" placeholder="Search" onChange={handleChange} value={searchTerm}/>
            <button>Search</button>
        </form>
      </div>
  )
};

export default TodoSearch ;
