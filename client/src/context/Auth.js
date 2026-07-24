import { createContext, useReducer, useEffect, use } from "react";
import { useNavigate } from "react-router-dom";

import reducer from "../reducers/authReducer.js";

import users from "../temp_data/users_data.json";

// Auth Context
export const AuthContext = createContext();

const initialState = {
  isLoggedIn: false,
  user: null,
};

// Auth Provider
export function AuthProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const navigate = useNavigate();

  useEffect(() => { 
    const id = localStorage.getItem('id');

    if(id) {
      const user = users.find(user => user.id === Number(id));
      dispatch({type: 'LOGIN', payload: user})
    }
  }, []);

  const handleLogin = (user) => {
    dispatch({ type: 'LOGIN', payload: user });
    localStorage.setItem('id', user.id);
    navigate('/dashboard');
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('id');
    navigate('/login');
  };

  return (
    <AuthContext value={{ ...state, dispatch, handleLogin, handleLogin, handleLogout }}>
      {props.children}
    </AuthContext>
  );
}
