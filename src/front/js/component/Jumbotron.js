import React from "react";
import { useNavigate } from "react-router-dom";

export const Jumbotron = () => {
  const navigate = useNavigate();
  return (
    <div className="containerj mb-5">
      <div className="jumbotron mt-4 p5 text-white rounded">
        <h2 className="ms-4 pt-3">Join the force!</h2>
        <br />
        <br />
        <button
          type="button"
          className="btn btn-dark border border-warning text-warning ms-5 mb-5"
          onClick={() => navigate("/sign-up")}
        >
          {"Registrate"}
        </button>
      </div>
    </div>
  );
};
