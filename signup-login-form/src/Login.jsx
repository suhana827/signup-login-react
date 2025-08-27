import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
      (user) => user.userName === username && user.password === password
    );

    if (matchedUser) {
      setMessage("✅ Successfully Logged In");
    } else {
      setMessage("❌ Incorrect username or password");
    }

    setUsername("");
    setPassword("");
  }

  return (
    <div className="login-container">
      <h1 id="myHeading">Login</h1>
      <form onSubmit={handleLogin}>
  
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
    
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
      

        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
