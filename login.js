import React from 'react'

export 
    const login = async() => {
        try {
          const result =
           await axios.post(`${BASE_URL}/login`,{
           name: logName,
            password: logPassword,
            })
            console.log(result);
        
          
        } catch (error) {
          console.log(error);
        }
    
    
        }
    
    
    
    
    return (
        <div>
             <input type="text" name="name" placeholder="name" onChange={(e) => setLogName (e.target.value)} /> 
      <input type="password" name="password" placeholder="password" onChange={(e) => setLogPassword (e.target.value)}   /> 
      <button onClick={login}>login</button>
      

        </div>
    )

