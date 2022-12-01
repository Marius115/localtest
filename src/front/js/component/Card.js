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
      <div className="card border-2 border-warning" style={{ width: "18rem" }}>
        <img
          src={`https://starwars-visualguide.com/assets/img/${
            props.resource === "people" ? "characters" : props.resource
          }/${item.uid}.jpg`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body bg-dark text-center">
          <h5 className="card-title text-warning">{item.name}</h5>
          <br />
          <Link
            to={`/single/${props.resource}/${item.uid}`}
            className="btn btn-primary justify-content-center align-middle border-warning bg-dark fs-6"
          >
            More Info!
          </Link>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object,
  resource: PropTypes.string,
};
