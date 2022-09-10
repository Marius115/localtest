import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-3">
      <div className="container">
        <Link to="/">
          <img
            src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo.png"
            className="w-50 content-center"
            style={{
              maxWidth: "600px",
              maxHeight: "300px",
            }}
          />
        </Link>
        <div className="ml-auto d-flex">
          <div className=" ms-2">
            {localStorage.getItem("jwt-token") ? (
              <button
                className="btn btn-primary"
                onClick={(e) => {
                  console.log("test");
                  localStorage.removeItem("jwt-token");
                  navigate("/login");
                }}
              >
                Logout!
              </button>
            ) : (
              <Link to="/login">
                <button className="btn btn-primary">Login</button>
              </Link>
            )}
          </div>
          <div className="ms-2">
            <Link to="/sign-up">
              <button className="btn btn-success">Sign up!</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
