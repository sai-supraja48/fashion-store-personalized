import { useState } from "react";
import API from "../services/api";

function Register() {

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleRegister = async () => {

    try {

      await API.post("/auth/register", {

        name,
        email,
        password

      });

      alert("Registered Successfully");

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

      <h1>Register</h1>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <br /><br />

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
        onClick={handleRegister}
      >
        Register
      </button>

    </div>

  );
}

export default Register;