import React, { Component } from "react";

import "./App.css";
// import schedule from "../../channel.json";
import schedule from "../../channel-fix.json";

import Day from "../Day";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: false, scheduleData: {}, datesArray: [] };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    // Async API Call to get schedule goes here
    // initialize schedule

    // Split the date-time string
    schedule.forEach(module => {
      const [date, time] = module.time.split(" ");
      module.date = date;
      module.time = time;
    });

    // Create an array of dates
    let datesArray = [...new Set(schedule.map(obj => obj.date).sort())];

    this.setState({ isLoading: false, scheduleData: schedule, datesArray });
  }

  render() {
    const { datesArray, isLoading, scheduleData } = this.state;

    return (
      <>
        {isLoading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="app">
            {datesArray.map((date, i) => {
              const modules = scheduleData.filter(
                module => module.date === date
              );
              return <Day date={date} modules={modules} key={i} />;
            })}
          </div>
        )}
      </>
    );
  }
}

export default App;
