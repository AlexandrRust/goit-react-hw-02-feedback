
import { Component } from "react";
import { Box } from 'components/Box/Box.styled';
import { FeedbackTitle } from 'components/Title/Title';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { FeedbackSection } from 'components/FeedbackSection/FeedbackSection.styled';
import { Statistics } from "components/StatisticsList/StatisticsList";




export class App extends Component  {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  }

  onLeaveFeedback = name => {
    this.setState({ [name]: this.state[name] + 1 });
    this.countTotalFeedback()
  };

  countTotalFeedback = () => {
    this.setState({ total: this.state.total + 1 })
  };
  
  countpositivePercentage = (good, total) => {
    console.log(good * (total / 100) );
    // this.setState({ positivePercentage: good / total * 100%})
  }

  render() {
    return (
      <Box>
        <FeedbackSection title={'Please leave feedback'}>
            <FeedbackTitle>Please leave feedback</FeedbackTitle>
            <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
            
            />
        </FeedbackSection>
        <FeedbackSection title={'Statistics'}>
          <FeedbackTitle>Statistics</FeedbackTitle>
          <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
            positivePercentage={this.state.positivePercentage}
            countPercentage ={this.countpositivePercentage}
          />
        </FeedbackSection>
      </Box>
    );
  }
}
