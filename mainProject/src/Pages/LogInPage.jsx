import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogInPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username !== 'group2Project' && password !== '135888') {
      alert('Invalid credentials');
    } else if (username !== 'group2Project') {
      alert('Wrong username');
    } else if (password !== '135888') {
      alert('Wrong password');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className='LoginPage'>
      <div className='loginbody'>
        <h1>Log In</h1>

        <div className='InputHolder'>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <small>Lost password? <span>Click here</span></small>
        </div>

        <div className='LogInbtn'>
          <button className='btn1' onClick={handleLogin}>Log In</button>
          <small>
            <p>If you don't have an account <span>Sign Up</span></p>
          </small>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
