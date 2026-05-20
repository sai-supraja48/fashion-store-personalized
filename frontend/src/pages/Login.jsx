import { useState } from "react";
import API from "../services/api";

function Login() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = async () => {

    try {

      const res =
        await API.post("/auth/login", {

          email,
          password

        });

      localStorage.setItem(
        "token",
        res.data.token
      );

      alert("Login Successful");

    } catch (error) {

      console.log(error);

    }
  };

  return (

    <div
      style={{
        padding: "30px",
        textAlign: "center"
      }}
    >

      <h1>Login</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <br /><br />

      <button
        onClick={handleLogin}
      >
        Login
      </button>

    </div>

  );
}

export default Login;