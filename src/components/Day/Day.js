import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import "./Day.css";
import Module from "../Module";

const Day = ({ modules, date }) => {
  // Date format : Wed, March 5, 2019
  const formatedDate = moment(date).format("ddd, MMMM DD, YYYY");

  return (
    <div className="day">
      <div className="date">{formatedDate}</div>
      {modules
        // Sort modules array by time
        .sort(function(a, b) {
          return a.time > b.time ? 1 : -1;
        })
        // Iterate over each module and render Module component
        .map((moduleData, i) => (
          <Module moduleData={moduleData} key={i} />
        ))}
    </div>
  );
};

Day.propTypes = {
  date: PropTypes.string.isRequired,
  modules: PropTypes.array.isRequired
};

export default Day;
