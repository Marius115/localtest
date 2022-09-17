import React from "react";
import { useNavigate } from "react-router-dom";

export const Jumbotron = () => {
  const navigate = useNavigate();
  return (
    <div className="container mb-5">
      <div className="mt-4 p5 bg-primary bg-gradient text-white rounded">
        <h1>Titulo de jumbotron</h1>
        <p>texto posible</p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => navigate("/sign-up")}
        >
          {"Registrate"}
        </button>
      </div>
    </div>
  );
};
