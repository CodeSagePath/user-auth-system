import { createContext, useReducer } from "react";
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
  return (
    <AuthContext value={{ ...state, dispatch }}>
      { props.children }
    </AuthContext>
  );
}
