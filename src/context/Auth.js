import { createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";

import reducer from "../reducers/authReducer.js";

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

  const handleLogin = user => {
    dispatch({ type: 'LOGIN', payload: user});
    navigate("/dashboard");
  };

  return (
    <AuthContext value={{ ...state, dispatch, handleLogin }}>
      { props.children }
    </AuthContext>
  );
}
