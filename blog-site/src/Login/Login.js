import React from "react";
import "./Login.css";

const LoginForm = ({ isShowLogin, isLoginButton }) => {
  return (
    <div className={`${!isShowLogin ? "active" : "show"}`}>
      <div className="contain">
        <span className="together">
          <div className="side-image"></div>
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">{`${
                isLoginButton ? "Login" : "Register"
              }`}</h3>
              <div className="form-group mt-3">
                <div className={`${isLoginButton ? "active" : "show"}`}>
                  <input
                    type="text"
                    className="form-control form-group mt-3"
                    placeholder="UserName"
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <div className={`${!isLoginButton ? "active" : "show"}`}>
                <p className="forgot-password text-right mt-2">
                  Forgot <a href="#">Forget Password?</a>
                </p>
              </div>
            </div>
          </form>
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
