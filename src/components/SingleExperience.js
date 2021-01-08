import React from "react";
import PropTypes from "prop-types";
import { FaAngleDoubleRight } from "react-icons/fa";

const SingleExperience = ({ company, id, order, title, dates, duties }) => {
  console.log(company);
  return (
    <div className="d-flex flex-column justify-content-start">
      <h2 className="job-title mb-2">{title ? title : ""}</h2>
      <span className="text-uppercase my-2 font-weight-bold h6 company">
        {company}
      </span>
      <br />
      <span className="text-capitalize my-2">{dates ? dates : ""}</span>
      <br />
      {duties?.map((duty, index) => {
        return (
          <div key={index}>
            <li className="mb-3" style={{ listStyleType: "none" }}>
              <FaAngleDoubleRight style={{ color: "green" }} />
              &nbsp;{duty}
            </li>
          </div>
        );
      })}
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

// SingleExperience.propTypes = {
//   company: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   order: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   dates: PropTypes.string.isRequired,
//   duties: PropTypes.object.isRequired,
// };

// SingleExperience.defaultProps = {
//   company: "KING",
//   id: "10",
//   order: 10,
//   title: "Ched d'equipe",
//   dates: "10/01/1990",
//   duties: "On my way to trial",
// };

export default SingleExperience;
