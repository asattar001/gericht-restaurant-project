import { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";

import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [focusInput, setFocusInput] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if(username && password){
      navigate('/')
    }
  };

  return (
    <div className="app__login app__bg">
      <form
        className="app__login-form"
        onSubmit={handleSubmit}
        autoComplete="off"
        style={{ background: "black" }}
      >
        <h3 className="headtext__cormorant" id="app__login-title">
          Login
        </h3>

        <div className="app__login_input_container">
          <label htmlFor="username" className="p__cormorant ">
            Username
          </label>
          <div
            className={
              focusInput === "username"
                ? "app__login_input-focus"
                : "app__login_input"
            }
          >
            <IoPersonSharp
              id={
                focusInput === "username"
                  ? "app__login_input-icon-focus"
                  : "app__login_input-icon"
              }
            />
            <input
              onFocus={(e) => setFocusInput(e.target.id)}
              onBlur={() => setFocusInput("")}
              type="text"
              id="username"
              required
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="app__login_input_container">
          <label htmlFor="password" className="p__cormorant">
            Password
          </label>
          <div
            className={
              focusInput === "password"
                ? "app__login_input-focus"
                : "app__login_input"
            }
          >
            <IoIosLock
              id={
                focusInput === "password"
                  ? "app__login_input-icon-focus"
                  : "app__login_input-icon"
              }
            />
            <input
              onFocus={(e) => setFocusInput(e.target.id)}
              onBlur={() => setFocusInput("")}
              type="text"
              id="password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>
        
        <div className="app_login_forgot-password">
          <a href="/" className="p__cormorant" id="app_login_forgot-password">
            Forgot Password?
          </a>
        </div>
    

        <button type="submit" className="custom__button" id="custom_button">
          LOGIN
        </button>

        <div className="app__login_icons_container">
          <p className="p__cormorant" id="app__login_icons-text">
            Or Sign Up Using
          </p>
          <div className="app__login_icons">
            <FaFacebookF id="login_icon" />
            <FaTwitter id="login_icon" />
            <FaGoogle id="login_icon" />
          </div>
        </div>

        <div className="app__login_signup_container">
          <p className="p__cormorant" id="app__login_icons-text">
            Or Sign Up Using
          </p>
          <Link to="/signup">  <a  className="p__cormorant" id="signup-btn">
          SIGN UP
        </a></Link>
        
        </div>
      </form>
    </div>
  );
};

export default Login;
