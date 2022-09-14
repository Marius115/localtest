import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = ({ item, ...props }) => {
  const { store, actions } = useContext(Context);

  return (
    <div
      className="tab-pane ps-2 pb-1 pt-2 pe-2"
      role="tabpanel"
      aria-labelledby="profile-tab"
      tabIndex="0"
    >
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={`https://starwars-visualguide.com/assets/img/${
            props.resource === "people" ? "characters" : props.resource
          }/${item.uid}.jpg`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">edit part</p>
          <Link
            to={`/single/${props.resource}/${item.uid}`}
            className="btn btn-primary justify-content-center align-middle"
          >
            More Info!
          </Link>
        </div>
      </div>
    </div>
  );
};

Card.PropTypes = {
  item: PropTypes.object,
  resorce: PropTypes.string,
};
