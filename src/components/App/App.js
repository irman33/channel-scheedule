import React, { Component } from "react";
import PropTypes from "prop-types";

import "./App.css";
// import schedule from "../../channel.json";
import schedule from "../../channel-fix.json";

import Day from "../Day";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: false, scheduleData: {}, daysSet: [] };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    // Async API Call to get schedule...

    schedule.forEach(module => {
      const [date, time] = module.time.split(" ");
      module.date = date;
      module.time = time;
    });

    let daysSet = [...new Set(schedule.map(obj => obj.date).sort())];

    this.setState({ isLoading: false, scheduleData: schedule, daysSet });
  }

  render() {
    const { daysSet, isLoading, scheduleData } = this.state;
    return (
      <div className="app">
        {daysSet.map((date, i) => {
          const modules = scheduleData.filter(module => module.date === date);
          return <Day date={date} modules={modules} key={i} />;
        })}
      </div>
    );
  }
}

export default App;
