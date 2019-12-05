import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import "./Day.css";
import Module from "../Module";

const Day = props => {
  // Date format : Wed, March 5, 2019
  const formatedDate = moment(props.date).format("ddd, MMMM DD, YYYY");
  const sortedModules = props.modules;

  return (
    <div className="day">
      <div className="date">{formatedDate}</div>
      {sortedModules
        .sort(function(a, b) {
          return a.time > b.time ? 1 : -1;
        })
        .map((moduleData, i) => (
          <Module moduleData={moduleData} key={i} />
        ))}
    </div>
  );
};

Day.propTypes = {};

export default Day;
