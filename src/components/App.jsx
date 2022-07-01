
import { Component } from "react";
import { Box } from 'components/Box/Box.styled';
import { FeedbackTitle } from 'components/Title/Title';
import { Buttons } from 'components/Buttons/Buttons';
import { Statistics } from "components/StatisticsList/StatisticsList";




export class App extends Component  {

  states = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  
  render() {
    return (
      <Box>
        <FeedbackTitle>Please leave feedback</FeedbackTitle>
        <Buttons textContent={Object.keys(this.states)}/>
        <FeedbackTitle>Statistics</FeedbackTitle>
        <Statistics textContent={this.states}/>
      </Box>
    );
  }
}
