import React from 'react';
import { Component } from 'react';
import Feedback from './Feedback/Feedback';
import Statistic from './Statistic/Statistic';
import Section from './Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    this.setState(({ good, neutral, bad }) => {
      if (event.target.textContent === 'good') {
        return {
          good: good + 1,
        };
      } else if (event.target.textContent === 'neutral') {
        return {
          neutral: neutral + 1,
        };
      } else if (event.target.textContent === 'bad') {
        return {
          bad: bad + 1,
        };
      }
    });
  };

  countTotalFeedback = () => {
    let sum = 0;
    Object.values(this.state).map(value => {
      return (sum += value);
    });
    return sum;
  };

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  }

  render() {
    return (
      <Section title={'Please leave feedback'} children>
        <Feedback
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <h2 className="statisticTitle">Statistic</h2>
        <Statistic
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  }
}

export default App;
