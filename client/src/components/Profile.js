import { useContext } from "react";
import { AuthContext } from "../context/Auth";

export default function Profile() {
  const { user } = useContext(AuthContext);

  if(!user) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h2> UserProfile </h2>
      <p>ID - {user.id}</p>
      <p>Username - {user.username}</p>
      <p>Password - {'*'.repeat(user.password.length)}</p>
    </div>
  );
}