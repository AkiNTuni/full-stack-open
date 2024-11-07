import { useState } from 'react'
import { useEffect } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  
  const [voteMap, setVoteMap] = useState(new Map())
  const [mostVoted, setMostVoted] = useState('')
  useEffect(() => {
    let maxVotes = 0;
    let maxVotedAnecdote = '';
    voteMap.forEach((votes, key) => {
      if (votes > maxVotes) {
        maxVotes = votes;
        maxVotedAnecdote = key;
        setMostVoted(maxVotedAnecdote);
      }
    });
    
  }, [voteMap]);
  
  const handleNextClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  const handleVoteClick = () => {
    console.log(new Map(voteMap).set(anecdotes[selected], (voteMap.get(anecdotes[selected]) || 0) + 1))
    setVoteMap(new Map(voteMap).set(anecdotes[selected], (voteMap.get(anecdotes[selected]) || 0) + 1))
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {voteMap.get(anecdotes[selected]) || 0} votes</p>
      <Button clickHandler={handleNextClick} text="next anecdote"/>
      <Button clickHandler={handleVoteClick} text="vote"/>
      <h1>Anecdote with most votes</h1>
{voteMap.size !== 0 && (
  <>
    <p>{mostVoted}</p>
    <p>has {voteMap.get(mostVoted) || 0} votes</p>
  </>
)}
    </div>
    
  )
}
const Button = ({clickHandler, text}) => {
  return (
    <button onClick={clickHandler}>{text}</button>
  )
}
export default App