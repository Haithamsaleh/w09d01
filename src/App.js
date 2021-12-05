import axios from "axios";
import React,{useEffect,useState} from "react";

const BASE_URL = process.env.REACT_APP_BASE_URL;


function App() {
  //register
const [name, setName]=useState("");
const [password, setPassword]=useState("");
const [role, setRole]=useState("");
//log in
const [logName, setLogName]=useState("");
const [logPassword, setLogPassword]=useState("");

const register = async() => {
  try { 
    const result = 
  
    await axios.post(`${BASE_URL}/resgister`,{
    name,
    password,
    role :"61a60aeff378d491f8d63f95"
    })
    
  } catch (error) {
    console.log(error);
    
  }
 

}

  // const login = async() => {
  //   try {
  //     const result =
  //      await axios.post(`${BASE_URL}/login`,{
  //      name: logName,
  //       password: logPassword,
  //       })
  //       console.log(result);
    
      
  //   } catch (error) {
  //     console.log(error);
  //   }


  //   }



  return (
    <>
    {/* register */}
      <input type="text" name="name" placeholder="name" onChange={(e) => setName (e.target.value)} /> 
      <input type="password" name="password" placeholder="password" onChange={(e) => setPassword (e.target.value)}   /> 
      <button onClick={register}>register</button>
      <br/>
      <hr/>
      {/* login */}
      {/* <input type="text" name="name" placeholder="name" onChange={(e) => setLogName (e.target.value)} /> 
      <input type="password" name="password" placeholder="password" onChange={(e) => setLogPassword (e.target.value)}   /> 
      <button onClick={login}>login</button>
       */}






    </>
  );
}

export default App;
