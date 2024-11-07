import React, { useState } from 'react';
const App = () => {
  const [reviews, setReviews] = useState({
    good: 0, neutral: 0, bad: 0
  });

  const handleGoodClick = () => {
    setReviews({...reviews, good: reviews.good + 1});
  }
  const handleNeutralClick = () => {
    setReviews({...reviews, neutral: reviews.neutral + 1});
  }
  const handleBadClick = () => {
    setReviews({...reviews, bad: reviews.bad + 1});
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button eventHandler={handleGoodClick} text="good" />
      <Button eventHandler={handleNeutralClick} text="neutral" />
      <Button eventHandler={handleBadClick} text="bad" />
      <h1>statistics</h1>
      <Statistics reviews={reviews}/>
    </div>
  );
}

const Button = ({ eventHandler, text }) => {
  return (
    <button onClick={eventHandler}>{text}</button>
  );
}
const Statistics = ({reviews}) => {
  if(reviews.good === 0 && reviews.neutral === 0 && reviews.bad === 0) {
    return (
      <p>No feedback given</p>
    );
  }
  return (
    <table>
      <tbody>
        <StatisticLine text={'good'} value={reviews.good}/>
        <StatisticLine text={'neutral'} value={reviews.neutral}/>
        <StatisticLine text={'bad'} value={reviews.bad}/>
        <StatisticLine text={'all'} value={reviews.good + reviews.neutral + reviews.bad}/>
        <StatisticLine text={'average'} value={(reviews.good - reviews.bad) / (reviews.good + reviews.neutral + reviews.bad)}/>
        <StatisticLine text={'positive'} value={((reviews.good / (reviews.good + reviews.neutral + reviews.bad)) * 100) + ' %'}/>
      </tbody>
    </table>
  );
}
const StatisticLine = ({text, value}) => {
  return (
    <tr>
    <td>{text} </td>
    <td>{value}</td>
    </tr>
  );
}
export default App