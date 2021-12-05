import axios from "axios";
import React,{useEffect,useState} from "react";

import Register from "./component/register/index.js";
import Login from "./component/Login/index.js";
const BASE_URL = process.env.REACT_APP_BASE_URL;


function App() {

  
  return (

    <>
    <Register/>
      <br/>
      <hr/>
      <Login />






    </>
  );
}

export default App;
