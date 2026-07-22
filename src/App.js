import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route } from "react-router-dom";

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';

import { useContext } from 'react';
import { AuthContext } from './context/Auth.js';

function App() {

  const { isLoggedIn, user, dispatch } = useContext(AuthContext);

  return (
    <div className="App">
      <h1>User Authentication System</h1>

      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/Dashboard">Dashboard</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><button>Logout</button></li>
        </ul>
      </nav>


      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
