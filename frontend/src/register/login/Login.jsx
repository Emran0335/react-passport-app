import React, { useRef } from "react";
import "./LoginForm.css";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../redux/ReduxStore";
import { loginUser } from "../../../../../redux/slices/AuthenticationSlice";

export const Login = ({ toggleLogin, closeModal }) => {
  const emailRef = useRef < HTMLInputElement > null;
  const passwordRef = useRef < HTMLInputElement > null;

  const handleLoginUser = async (e) => {
    e.preventDefault();
    if (emailRef && emailRef.current && passwordRef && passwordRef.current) {
      dispatch(
        loginUser({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })
      );
    }
    closeModal();
  };

  return (
    <form className="login-form">
      <h2>Please Login</h2>
      {auth.error ? (
        <p className="login-form-error">Username or password incorrect</p>
      ) : (
        <></>
      )}
      <div className="login-form-input-group">
        <h6>Email</h6>
        <input
          type="email"
          name="email"
          className="login-form-input"
          placeholder="email"
          required
          ref={emailRef}
        />
      </div>
      <div className="login-form-input-group">
        <h6>Password</h6>
        <input
          type="password"
          name="password"
          className="login-form-input"
          placeholder="password"
          required
          ref={passwordRef}
        />
      </div>
      <button className="login-form-submit" onClick={handleLoginUser}>
        Login
      </button>
      <p>
        Don't have an account?
        <span className="login-form-register" onClick={toggleLogin}>
          Create one here
        </span>
      </p>
    </form>
  );
};
