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
        <div className="ml-auto">
          <Link to="/login">
            <button className="btn btn-primary me-5">{"Iniciar Sesión"}</button>
          </Link>
          <Link to="/sign-up">
            <button className="btn btn-success">{"Registrase"}</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
