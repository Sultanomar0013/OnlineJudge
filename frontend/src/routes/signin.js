import React, { useState } from "react";
import Navbar from "../Components/Navbar"
import { useNavigate } from "react-router-dom";
import "./css/signin.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const response = await fetch("http://localhost:3001/api/signin", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response?.status === 200) {
        const data = await response.json();
        const token = data?.token;
        localStorage.setItem("token", token);
        navigate("/")
      }
    } catch (error) {
      console.log("An ERROR OCCURED IN SIGN IN", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
       <Navbar />

      <div className="signin">
        <h1 className="headtitle2">Sign In</h1>
        <form>
          <div>
            <label className="inputtitle">Email:</label>
            <input
              className="inputfield1"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="inputtitle">Password:</label>
            <input
              className="inputfield1"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="buttonSignin" type="button" onClick={handleSignIn}>
            Sign In
          </button>
        </form>
        {isLoading ? <div>Loading....</div> : null}
      </div>
    </>

  );
};

export default SignIn;
