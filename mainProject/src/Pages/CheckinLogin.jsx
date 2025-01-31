import React from 'react'
import "../Styles/CheckinLogin.css"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const CheckinLogin = () => {
      const navigate = useNavigate();

       const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
      
        const handleLogin = () => {
          if (username !== 'tristic@gmail.com' && password !== 'Project135888') {
            alert('Invalid credentials');
          } else if (username !== 'tristic@gmail.com') {
            alert('Wrong username');
          } else if (password !== 'Project135888') {
            alert('Wrong password');
          } else {
            navigate('/get-keeper');
          }
        };
      
  return (
    <div className='checkLog'>
        <h1>This page can only be Asseccable <br />By an Authorize Employee!!!</h1>
        <div className='loginContainer'>
            <h1>Login</h1>
            <div className='checkInputHolder'> 
                <input type="text" 
                placeholder='company mail...' 
                value={username}
                onChange={(e)=>setUsername(e.target.value)}/>
                
                <input type="text" 
                placeholder='Password' 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <button className='checkButton' onClick={handleLogin}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default CheckinLogin