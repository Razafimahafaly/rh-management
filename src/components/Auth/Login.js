import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "../../firebase";
import { useDispatch } from "react-redux";
import { login } from "../../slices/userSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = useCallback(async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <main className="d-flex w-100">
      <div className="container d-flex flex-column">
        <div className="row vh-100">
          <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <div className="text-center mt-4">
                <p className="lead">Sign in to your account to continue</p>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="m-sm-4">
                    <div className="text-center">
                      <img
                        src="/img/avatars/avatar.jpg"
                        alt="Charles Hall"
                        className="img-fluid rounded-circle"
                        width="132"
                        height="132"
                      />
                    </div>
                    <form onSubmit={handleLogin}>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                          className="form-control form-control-lg"
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                          className="form-control form-control-lg"
                          type="password"
                          name="password"
                          placeholder="Enter your password"
                        />
                        <small>
                          <a href="index.html">Forgot password?</a>
                        </small>
                      </div>
                      <div>
                        <label className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="remember-me"
                            name="remember-me"
                          />
                          <span className="form-check-label">
                            Remember me next time
                          </span>
                        </label>
                      </div>
                      <div className="text-center mt-3">
                        <button
                          type="submit"
                          className="btn btn-lg btn-primary"
                        >
                          Sign in
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
