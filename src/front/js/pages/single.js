import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    if (!params.resource || !params.uid) return;
    actions.getsingleItem(params.resource, params.uid);
  }, [params.resource, params.uid]);

  return (
    <div className="container">
      <div className="row justify-content-center align middle">
        <div className="col-6 d-flex justify-content-center align-middle">
          <img
            src={`https://starwars-visualguide.com/assets/img/${
              params.resource === "people" ? "characters" : params.resource
            }/${store.singleItem.uid}.jpg`}
          />
        </div>
        <div className="col-6 d-flex flex-column justify-content-center align-middle text-warning">
          <div className="row container mt-4 flex-column">
            <div className="col-2 fs-4 flex-nowrap justify-content-center w-100">
              <h1>{store.singleItem.name}</h1>
              <p>{store.singleItem.description}</p>
            </div>

            <div className="col-2 fs-4 d-flex justify-content-between w-100">
              {params.resource === "people" && <p>Birth Year:</p>}
              {params.resource === "people" && (
                <p>{store.singleItem.birth_year}</p>
              )}
              {params.resource === "vehicles" && <p>Model:</p>}
              {params.resource === "vehicles" && (
                <p>{store.singleItem.model}</p>
              )}
              {params.resource === "planets" && <p>Climate:</p>}
              {params.resource === "planets" && (
                <p>{store.singleItem.climate}</p>
              )}
            </div>

            <div className="col-2 fs-4 d-flex justify-content-between w-100">
              {params.resource === "people" && <p>Gender:</p>}
              {params.resource === "people" && <p>{store.singleItem.gender}</p>}
              {params.resource === "vehicles" && <p>Length:</p>}
              {params.resource === "vehicles" && (
                <p>{store.singleItem.length}</p>
              )}
              {params.resource === "planets" && <p>Population:</p>}
              {params.resource === "planets" && (
                <p>{store.singleItem.population}</p>
              )}
            </div>

            <div className="col-2 fs-4 d-flex justify-content-between w-100">
              {params.resource === "people" && <p>Height:</p>}
              {params.resource === "people" && <p>{store.singleItem.height}</p>}
              {params.resource === "vehicles" && <p>Crew:</p>}
              {params.resource === "vehicles" && <p>{store.singleItem.crew}</p>}
              {params.resource === "planets" && <p>Orbital Period:</p>}
              {params.resource === "planets" && (
                <p>{store.singleItem.orbital_period}</p>
              )}
            </div>

            <div className="col-2 fs-4 d-flex justify-content-between w-100">
              {params.resource === "people" && <p>Skin Color:</p>}
              {params.resource === "people" && (
                <p>{store.singleItem.skin_color}</p>
              )}
              {params.resource === "vehicles" && <p>Passengers:</p>}
              {params.resource === "vehicles" && (
                <p>{store.singleItem.passengers}</p>
              )}
              {params.resource === "planets" && <p>Rotation Period:</p>}
              {params.resource === "planets" && (
                <p>{store.singleItem.rotation_period}</p>
              )}
            </div>

            <div className="col-2 fs-4 d-flex justify-content-between w-100">
              {params.resource === "people" && <p>Eye Color:</p>}
              {params.resource === "people" && (
                <p>{store.singleItem.eye_color}</p>
              )}
              {params.resource === "vehicles" && <p>Cost:</p>}
              {params.resource === "vehicles" && (
                <p>{store.singleItem.cost_in_credits}</p>
              )}
              {params.resource === "planets" && <p>terrain:</p>}
              {params.resource === "planets" && (
                <p>{store.singleItem.terrain}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
