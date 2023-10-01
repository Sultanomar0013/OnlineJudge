import React, { useState } from "react";
import Navbar from "../Components/Navbar"
import { useNavigate } from "react-router-dom";
import "./css/signup.css"
function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [selectedRole, setSelectRole] = useState("");
  const navigate = useNavigate();

  const Role = ["", "Teacher", "Student"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, email, password, selectedRole }),
      });
      if (response.ok) {
        navigate("/signin");
      } else {
      }
    } catch (error) {
      console.log("An error occurred", error);
    }
  };

  return (
    <>
       <Navbar />

      <div className="signup">
        <h1 className="title1">SignUp</h1>
        <form onSubmit={handleSubmit}>
          <label className="dif">
            User Name:
            <input
              className="Inputbox2"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
          <label className="dif">
            Email:
            <input
              className="Inputbox2"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="dif">
            Password:
            <input
              className="Inputbox2"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label className="dif">
            Select Profession:
            <select
              className="Selectbox2"
              value={selectedRole}
              onChange={(e) => setSelectRole(e.target.value)}
            >
              {Role.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </label>

          <label className="check">
            <input
              className="checkbox1"
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
            />
            I agree to the terms and conditions
          </label>
          <button className="SignUpbutton1" type="submit">Sign Up</button>
        </form>
      </div>
    </>

  );
}

export default SignUp;

