import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

export default function Navbar() {
  const { isAuth, handleLogout } = useContext(AuthContext);

  return (
    <div
      style={{
        background: "skyblue",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <button>home</button>
      <button onClick={handleLogout}>
        {isAuth.status ? "Logout" : "Login"}
      </button>
    </div>
  );
}
