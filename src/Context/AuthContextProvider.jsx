import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isAuth, setisAuth] = useState({ token: "", status: false });

  const handleLogin = (token) => {
    if (token == null || token == "") {
      return;
    }
    setisAuth({ ...isAuth, token: token, status: true });
  };
  const handleLogout = () => {
    setisAuth({ ...isAuth, token: "", status: false });
  };

  return (
    <AuthContext.Provider value={{ isAuth, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}
