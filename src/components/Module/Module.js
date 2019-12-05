import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import "./Module.css";
import { end } from "worker-farm";

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
  const startTime = moment(time, "HH:mm").format("h:mm");
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

Module.propTypes = {};

export default Module;
