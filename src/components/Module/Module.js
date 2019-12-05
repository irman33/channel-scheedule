import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import "./Module.css";

const SubjectPhoto = ({ photoUrl }) => (
  <div className="subject-photo">
    <img src={photoUrl} alt="Subject Icon" className="subject-photo" />
  </div>
);

const TitleDesc = ({ title, desc }) => (
  <div className="title-desc">
    <h3>{title}</h3>
    <p className="description">{desc}</p>
  </div>
);

const Instructor = ({ instructorName, imgUrl }) => (
  <div className="instructor">
    <img className="instructor-photo" src={imgUrl} alt="Instructor Thumbnail" />
    <span className="instructor-name">{instructorName}</span>
  </div>
);

const SessoionTime = ({ time }) => {
  // Set start time format
  const startTime = moment(time, "HH:mm").format("h:mm");
  // Set end time assuming 1h duration, and format
  const endTime = moment(time, "HH:mm")
    .add(1, "hours")
    .format("h:mm A z");

  return <div className="time">{`${startTime} - ${endTime} EDT`}</div>;
};

const Module = ({ moduleData }) => {
  return (
    <div className="module">
      <SubjectPhoto photoUrl={moduleData.subjectPhotoUrl} />
      <TitleDesc title={moduleData.title} desc={moduleData.description} />
      {/* instructor time wrapper for responsive stacking of instructor info and session time */}
      <div className="instructor-time">
        <Instructor
          instructorName={moduleData.instructorName}
          imgUrl={moduleData.instructorPhotoUrl}
        />
        <SessoionTime time={moduleData.time} />
      </div>
    </div>
  );
};

Module.propTypes = {
  moduleData: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    instructorName: PropTypes.string.isRequired,
    instructorPhotoUrl: PropTypes.string.isRequired,
    subjectPhotoUrl: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })
};

export default Module;
