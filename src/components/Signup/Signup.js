import React, { useState } from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../url';
import { useDispatch } from 'react-redux';
import { authActions } from '../../Redux/store';


export default function Login() {

  const dispath = useDispatch();
  const navigate = useNavigate();
  // const [isSignup, setIsSignup ] = useState(false);
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  // const [ loading, setLoading ] = useState(false);

  const fetchUrl = async() => {
    const response = await axios.post(`${API_URL}/user/signup`, {
      name: name,
      email: email,
      password: password,
    })
    .catch(error => console.log(error));

    const data = await response.data;
    return data;
  }

  const submitHanler = () => {
    fetchUrl()
    .then(() => dispath(authActions.signup()))
  }

  return (
    <div className='userLoginContainer'>
      <form className='userForm'>
              <h1 className="newUserTitle">SIGNUP</h1>
           <div className='userItem'>
            <label>Username</label>
            <input 
            name='name'
              type='text'
              placeholder='please enter your username'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className='userItem'>
            <label>Email</label>
            <input 
              name='email'
              type='email'
              placeholder='please enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='userItem'>
            <label>Password</label>
            <input 
              name='password'
              type='password'
              placeholder='please enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

        <button 
          className='userButton'
          type="submit"
          onClick={submitHanler}
          // isLoading={loading}
        >signup</button>
        
        <div className='userMoveSignup'
            
            >
                <span className='accountSpan'>Already have a account? 
                <button 
                  className='userSignup'
                  onClick={() => navigate('/login')}
                >LOGIN
                </button>
                </span> 
        </div>
      </form>
    </div>
  )
}
