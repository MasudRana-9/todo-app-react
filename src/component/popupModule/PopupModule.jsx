import React, { useEffect, useRef, useState } from "react"
import './PopupModule.css'
import { useDispatch } from "react-redux";
import { editTodo } from "../../features/todoSlice";

const PopupModule = ({ onModule , setModule , onEditData }) => {
    const [editedData , setEditedData] = useState({title  : '', description : ''})
    const dispatch = useDispatch()

   useEffect(() => {
    setEditedData(onEditData)
   }, [])


    const handleChange = (e) => {
        setEditedData((prevTodo) => {
            return {
                ...prevTodo,
                [e.target.name] : e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(editTodo(editedData))
        setEditedData({title : '', description : ''})
        setModule(false)
    }

    const handleCloseBtn = () => setModule(false)

  return (
    <>
        <div className="overlay">
        <div className="popup">
            <div className="close-btn" >
                <button  onClick={handleCloseBtn}>Close</button>
            </div>
        <form action="" onSubmit={handleSubmit}>
            <div className="input-box">
                <label htmlFor="title">Todo Title</label>
                <input type="text" name="title" onChange={handleChange} value={editedData.title}/>
            </div>
            <div className="input-box">
                <label htmlFor="description">Todo Description</label>
                <input type="text" name="description" onChange={handleChange} value={editedData.description}/>
            </div>
            <button>Add Todo</button>
        </form>
    </div>
    </div>
    </>
  )
};

export default PopupModule ;
