import React, { Component } from "react";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Notification from "./Notification";
import styles from './style.module.css';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = (key) => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.state.good) {
      const average = this.state.good / this.countTotalFeedback() * 100;
      return Math.round(average);
    } else {
      return 0;
    }
  };

  render() {
    return (
      <div className={styles.container}>
        <Section title="Please leave feedback" >
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>
        {(this.countTotalFeedback())
          ?
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
        : <Notification message="There is no feedback" />
      }
      </div>
    );
  }
};

export default App;