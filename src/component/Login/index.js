import axios from "axios";
import React,{useEffect,useState} from "react";
const BASE_URL = process.env.REACT_APP_BASE_URL;


function Login() {
  //login
const [logName, setLogName]=useState("");
const [logPassword, setLogPassword]=useState("");

const Login = async() => {
  try { 
    const result = 
    await axios.post(`${BASE_URL}/login`,{
       name: logName,
        password: logPassword,
}
)
   console.log("login successful"); 
  } catch (error) {
    console.log("login failed"); 
    console.log(error);

    
  }
 

}

  
  return (

    <>
    {/* register */}
      <input type="text" name="name" placeholder="name" onChange={(e) => setLogName (e.target.value)} /> 
      <input type="password" name="password" placeholder="password" onChange={(e) => setLogPassword (e.target.value)}   /> 
      <button onClick={Login}>login</button>
      






    </>
  );
}

export default Login;
