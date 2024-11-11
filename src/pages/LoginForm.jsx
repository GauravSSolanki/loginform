import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginForm.css";

const LoginForm = () => {
  const [Data, setData] = useState({
    username: "",
    password: "",
  });

  const [error, seterror] = useState();

  const fillData = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    function verify() {
      let valid = true;
      let localerror = {};

      if (Data.username.length < 8) {
        localerror.username = "username is not valid";
        valid = false;
      }

      if (Data.password.length < 6) {
        localerror.password = "password is not valid";
        valid = false;
      }

      seterror({ ...localerror });
      console.log(error);
      return valid;
    }
    if (verify()) {
      console.log("Data:", Data);
      setData({
        username: "",
        password: "",
      });
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <div className="col-12 col-sm-8 col-md-6 col-lg-4">
        <div className="card shadow p-4">
          <h3 className="text-center mb-4">Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="form-control"
                value={Data.username}
                onChange={fillData}
                placeholder="Enter your username"
                required
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                value={Data.password}
                onChange={fillData}
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
