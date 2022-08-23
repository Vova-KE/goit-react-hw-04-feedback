import React, { useState } from "react";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Notification from "./Notification";
import styles from './style.module.css';


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = {good, neutral, bad};

  const handleLeaveFeedback = (key) => {
    if (key === 'good') {
      setGood(prevState => prevState + 1);
    } else if (key === 'neutral') {
      setNeutral(prevState => prevState + 1);
    } else {
      setBad(prevState => prevState + 1);
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    if (good) {
      const average = good / countTotalFeedback() * 100;
      return Math.round(average);
    } else {
      return 0;
    }
  };

  return (
    <div className={styles.container}>
      <Section title="Please leave feedback" >
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      {(countTotalFeedback())
        ?
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
      : <Notification message="There is no feedback" />
    }
    </div>
  );
};

export default App;