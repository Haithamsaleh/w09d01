import axios from "axios";
import React,{useEffect,useState} from "react";
const BASE_URL = process.env.REACT_APP_BASE_URL;


function Tasks() {

const tasks = async() => {
  try { 
    const result = 
  
    await axios.get(`${BASE_URL}/todos`,{
    })
    console.log(" successful");
  } catch (error) {
      console.log(" failed");
    console.log(error);
    
  }
 

}

  
  return (

    <>
    </>
  );
}

export default Tasks;
