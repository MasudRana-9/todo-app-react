import React from "react"
import './Home.css'
import CreateTodo from "../../component/createTodo/CreateTodo";
import ViewTodo from "../../component/viewTodo/ViewTodo";

const Home = (props) => {
  return (
    <div className="container">
      <CreateTodo />
      <ViewTodo />
    </div>
  )
};

export default Home ;
