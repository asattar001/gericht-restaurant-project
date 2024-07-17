import { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import { IoPersonSharp, IoMailSharp } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusInput, setFocusInput] = useState("");
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/')
  };

  return (
    <div className="app__signup app__bg">
      <form
        className="app__signup-form"
        onSubmit={handleSubmit}
        autoComplete="off"
        style={{ background: "black" }}
      >
        <h3 className="headtext__cormorant" id="app__signup-title">
          Sign Up
        </h3>

        <div className="app__signup_input_container">
          <label htmlFor="username" className="p__cormorant ">
            Username
          </label>
          <div
            className={
              focusInput === "username"
                ? "app__signup_input-focus"
                : "app__signup_input"
            }
          >
            <IoPersonSharp
              id={
                focusInput === "username"
                  ? "app__signup_input-icon-focus"
                  : "app__signup_input-icon"
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


     


        <div className="app__signup_input_container">
          <label htmlFor="email" className="p__cormorant ">
            Email
          </label>
          <div
            className={
              focusInput === "email"
                ? "app__signup_input-focus"
                : "app__signup_input"
            }
          >
            <IoMailSharp
              id={
                focusInput === "email"
                  ? "app__signup_input-icon-focus"
                  : "app__signup_input-icon"
              }
            />
            <input
              onFocus={(e) => setFocusInput(e.target.id)}
              onBlur={() => setFocusInput("")}
              type="text"
              id="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
        </div>


        <div className="app__signup_input_container">
          <label htmlFor="password" className="p__cormorant">
            Password
          </label>
          <div
            className={
              focusInput === "password"
                ? "app__signup_input-focus"
                : "app__signup_input"
            }
          >
            <IoIosLock
              id={
                focusInput === "password"
                  ? "app__signup_input-icon-focus"
                  : "app__signup_input-icon"
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

        <button type="submit" className="custom__button" id="custom_button">
          SIGN UP
        </button>

        <div className="app__signup_icons_container">
          <p className="p__cormorant" id="app__signup_icons-text">
            Or Sign Up Using
          </p>
          <div className="app__signup_icons">
            <FaFacebookF id="signup_icon" />
            <FaTwitter id="signup_icon" />
            <FaGoogle id="signup_icon" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
