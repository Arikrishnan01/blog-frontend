import React, { useState} from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../url';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authActions } from '../../Redux/store';

export default function Login() {

  const dispath = useDispatch();
  const navigate = useNavigate();
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const fetchUrl = async() => {
    const response = await axios.post(`${API_URL}/user/login`, {
      email: email,
      password: password,
    })
    .catch(error => console.log(error));

    const data = await response.data;
    return data;
  }

  const submitHanler = () => {
    fetchUrl()
    .then(() => dispath(authActions.login()))
  }


  return (
    <div className='userLoginContainer'>
      <form className='userForm'>
              <h1 className="newUserTitle">LOGIN</h1>

          <div className='userItem'>
            <label>Email</label>
            <input 
              type='email'
              placeholder='please enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='userItem'>
            <label>Password</label>
            <input 
              type='password'
              placeholder='please enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

        <button className='userButton'
          onClick={submitHanler}  
        >login</button>
        
        <div className='userMoveSignup'
            
            >
                <span className='accountSpan'>Don't have account? 
                <button 
                  className='userSignup'
                  onClick={() => navigate('/signup')}
                >SIGNUP
                </button>
                </span> 
        </div>
      </form>
    </div>
  )
}
