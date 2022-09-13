import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import { Component } from 'react';
import Box from 'components/Box';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    const valuesArray = Object.values(this.state);
    const totalCount = valuesArray.reduce((acc, number) => acc + number, 0);
    return totalCount;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100) || 0;
  };
  onLeaveFeedback = option => {
    this.setState(prevState => ({ [option]: (prevState[option] += 1) }));
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt="10vh"
        fontSize="40px"
        color="#010101"
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification title="There is no feedback" />
          )}
        </Section>
      </Box>
    );
  }
}
export default App;
