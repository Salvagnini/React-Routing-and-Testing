import './App.css';
import Main from './components/Main';
import Posts from './components/Posts';
import Login from './components/Login';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { StyledNavItem } from './components/styled';
import SinglePost from "./components/SinglePost";


function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <nav className="menu">
          
          <StyledNavItem className={({ isActive }) => isActive ? "menuLinkActive" : ""} to="/">Main</StyledNavItem>
          <StyledNavItem className={({isActive}) => isActive ? "menuLinkActive" : ""} to="/posts">Posts</StyledNavItem>
          <StyledNavItem className={({ isActive }) => isActive ? "menuLinkActive" : ""} to="/login">Login</StyledNavItem>
          
        </nav>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/posts' element={<Posts />}/>
          <Route path='/login' element={<Login />} />
          
          <Route path='/posts/:id' element={<SinglePost />}/>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
