import React from "react";
import PropTypes from "prop-types";

export default function FlightInfo(props) {
  return (
    <article>
      <h3>{props.flight ?? "nie dotyczy"}</h3>
      <p>
        {props.airport ?? "nie dotyczy"} {props.flightid ?? "nie dotyczy"}{" "}
        {props.price ?? "nie dotyczy"} {props.direction ?? "nie dotyczy"}
      </p>
    </article>
  );
}

FlightInfo.propTypes = {
  flight: PropTypes.string,
  airport: PropTypes.string,
  flightid: PropTypes.string,
  price: PropTypes.number,
  direction: PropTypes.string,

  requiredAny: PropTypes.any.isRequired,
};
