import { useContext } from "react";
import { AuthContext } from "../context/Auth";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  if(!user) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1> Dashboard Component </h1>
      <p>Welcome {user.username}.</p>
    </div>
  );
}