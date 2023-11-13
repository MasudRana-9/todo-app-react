import React, { useEffect, useState } from "react";
import "./TodoTable.css";
import { useSelector , useDispatch } from "react-redux";
import { deleteTodo } from '../../features/todoSlice'
import PopupModule from "../popupModule/PopupModule";
import Pagination from "../pagination/Pagination";

const TodoTable = (props) => {
  const  [isModule , setIsModule] = useState(false)
  const  [editData , setEditData  ] = useState()
  const  [allTodos, setAllTodos] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  //Get Data && Dispatch Data
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch()

  // Get Rendering Data From Pagination
  const renderData = (data) => {
    setAllTodos(data)
  }


  return (
    <div className="todo-view">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Todo Title</th>
            <th>Todo Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          { todos.length <= 5 ? (todos.length > 0 ? (
            todos.map((todo) => (
              <tr key={todo.id} className="main-tr">
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>
                  <button onClick={() => {
                    setIsModule(true)
                    setEditData(todo)
                  }}>Edit</button>
                  <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr >
              <td colSpan={4}>
                <h2 style={{ textAlign : 'center' }}>No Todo Founded ...</h2>
              </td>
            </tr>
          )) : (allTodos.map((todo) => (
              <tr key={todo.id} className="main-tr">
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>
                  <button onClick={() => {
                    setIsModule(true)
                    setEditData(todo)
                  }}>Edit</button>
                  <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

     {/* Pagination */}
        { todos.length > 5 && <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} perPage={5} data={todos} onRenderData={renderData} /> }
          
     {/* Pagination */}

      { isModule && <PopupModule onModule = { isModule } setModule = {setIsModule } onEditData = {editData} /> }
    </div>
    
  );
};

export default TodoTable;