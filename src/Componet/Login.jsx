import { useContext, useRef } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

export default function Login() {
  const ref = useRef(null);
  const { isAuth, handleLogin } = useContext(AuthContext);

  const loginAPI = async (user) => {
    console.log(user);
    try {
      let res = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });
      res = await res.json();
      handleLogin(res.token);
      console.log(res);
    } catch (err) {
      console.log("hello");
      console.log(err);
    }
  };

  const login = (e) => {
    e.preventDefault();
    const { email, password } = ref.current;
    const user = { email: email.value, password: password.value };

    loginAPI(user);
  };

  return isAuth.status ? (
    <h1> Token :{isAuth.token}</h1>
  ) : (
    <div>
      <form ref={ref} onSubmit={login}>
        <input type="text" id="email" />
        <input type="text" id="password" />
        <input type="submit" />
      </form>
    </div>
  );
}
