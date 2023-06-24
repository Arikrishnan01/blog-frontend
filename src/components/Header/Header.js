import React from 'react';
import './header.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="topLeft">
        upload your blogs
      </div>

      { isLoggedIn && <div className='topbarCenter'>
        <button className='allBlogs' onClick={() => navigate('/blogs')}>All Blogs</button>
        <button className='userBlogs' onClick={() => navigate('/userBlogs')}>User Blogs</button>
      </div>}

      <div className="topRight">
         { !isLoggedIn && <> <button 
            className="topbarLogin"
            onClick={ () => navigate('/login')}
          >Login
          </button>

          <button 
            className="topbarSignup"
            onClick={ () => navigate('/signup')}
          >Signup
          </button>
        </>}

        { isLoggedIn && (
          <button 
            className="topbarLogout"
            onClick={ () => navigate('/logout')}
          >Logout
          </button>
        )}
      </div>
    </div>
  )
}
