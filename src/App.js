import './App.css';
import Header from  "./components/Header/Header";
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Blogs from './Pages/Blogs/Blogs';
import UserBlogs from './Pages/UserBlogs/UserBlogs';
import UserBlogsDetails from './Pages/UserBlogsDetails/UserBlogsDetails';
import AddBlogs from './Pages/AddBlogs/AddBlogs';
import { useSelector } from 'react-redux';

function App() {

  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/userBlogs' element={<UserBlogs/>} />
        <Route path='/userBlogs/:id' element={<UserBlogsDetails/>} />
        <Route path='/blogs/add-blogs' element={<AddBlogs/>} />
      </Routes>
    </div>
  );
}

export default App;
