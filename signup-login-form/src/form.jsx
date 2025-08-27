import React from "react";
import "./form.css";

function FormHandling({
  username,
  setUserName,
  email,
  setEmail,
  password,
  setPassword,
  age,
  setAge,
  gender,
  setGender,
  phone,
  setPhone,
  handlingSubmission,
  message,
}) {
  return (
    <>
      <h1 id="myheading">Sign Up Form</h1>

      <form className="myDiv" onSubmit={handlingSubmission}>
        <h2 id="heading2">Fill the form</h2>

        <div className="formDiv">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your name here.."
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email here.."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password here.."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="age">Age</label>
          <input
            type="text"
            id="age"
            placeholder="Enter your age here.."
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <label>Gender</label>
          <div className="gender-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
              />{" "}
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
              />{" "}
              Female
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={gender === "Other"}
                onChange={(e) => setGender(e.target.value)}
              />{" "}
              Other
            </label>
          </div>

          <label htmlFor="tel">Phone</label>
          <input
            type="tel"
            id="tel"
            placeholder="Enter your phone number here..."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <button type="submit" id="submitB">
            Submit
          </button>

          {message && <p className="success-msg">{message}</p>}
        </div>
      </form>
    </>
  );
}

export default FormHandling;
