import { useState, useContext } from "react";
import { AuthContext } from "../context/Auth";

import users from "../temp_data/users_data.json";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { handleLogin } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      username, // ES6 concise properties
      password, // ES6 concise properties
    };

    const user = users.find((user) => user.username === formData.username && user.password === formData.password);

    if(user) {
      handleLogin(user);
      setErrorMessage('');
    } else {
      setErrorMessage('Invalid Credentials.');
    }
  };

  return (
    <div>
      <h1> Login Form </h1>

      {errorMessage && <p className="error">{errorMessage}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" />
        </div>

        <div className="form-group">
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
        </div>

        <div className="form-group">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
}
