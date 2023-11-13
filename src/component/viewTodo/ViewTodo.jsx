import React from "react"
import './ViewTodo.css'
import TodoSearch from "../todoSearch/TodoSearch";
import TodoTable from "../todoTable/TodoTable";

const ViewTodo = (props) => {
  return (
    <div className="display-todo">
      <TodoSearch />
      <TodoTable  />
    </div>
  )
};

export default ViewTodo ;
