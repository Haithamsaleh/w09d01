import axios from "axios";
import React,{useEffect,useState} from "react";

import Register from "./component/register/index.js";
import Login from "./component/Login/index.js";
import Tasks from "./component/Task/index.js";
import './App.css'

const BASE_URL = process.env.REACT_APP_BASE_URL;


function App() {

  
  return (

    <>
    <div className="list">
    <Register/>
      <br/>
      <Login />
      </div>
      <Tasks />





    </>
  );
}

export default App;
