import React from "react";
import PropTypes from "prop-types";
import { FaAngleDoubleRight } from "react-icons/fa";

const SingleExperience = ({ company, id, order, title, dates, duties }) => {
  return (
    <div className="d-flex flex-column justify-content-start">
      <h2 className="job-title">{title ? title : ""}</h2>
      <span className="text-uppercase">tommy</span>
      <br />
      <span>{dates ? dates : ""}</span>
      <br />
      <li style={{ listStyleType: "none" }}>
        <FaAngleDoubleRight style={{ color: "green" }} />
        &nbsp; Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke
        leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge
        disrupt.
      </li>
      <button
        style={{ width: "150px", marginLeft: "200px" }}
        type="button"
        className="text-uppercase text-white btn btn-info mt-5"
      >
        more info
      </button>
    </div>
  );
};

SingleExperience.propTypes = {};

export default SingleExperience;
