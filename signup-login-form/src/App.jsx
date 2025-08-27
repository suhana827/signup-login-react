import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormHandling from "./form.jsx";
import Login from "./Login.jsx";
import Navbar from "./Navbar.jsx";

function App() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handlingSubmission(e) {
    e.preventDefault();

    const userData = {
      userName,
      email,
      password,
      age,
      gender,
      phone,
    };

    // Save to localStorage as an array of users
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));

    setMessage("Submitted Successfully!");

    // Clear form fields
    setUserName("");
    setEmail("");
    setPassword("");
    setAge("");
    setGender("");
    setPhone("");
    setMessage("") 
  }

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <FormHandling
              username={userName}
              setUserName={setUserName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              age={age}
              setAge={setAge}
              gender={gender}
              setGender={setGender}
              phone={phone}
              setPhone={setPhone}
              handlingSubmission={handlingSubmission}
              message={message}
            />
          }
        />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

