import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setMessage, clearMessage } from '../reducers/messageReducer'

const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    dispatch(voteAnecdote(anecdote.id)) 

    dispatch(setMessage(`Voted for '${anecdote.content}'`))
    setTimeout(() => dispatch(clearMessage()), 5000)
  }

  return (
    <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => vote(anecdote)}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = () => {
  const anecdotes = useSelector(state =>
    state.anecdotes.sort((a, b) => a.votes < b.votes)
  )

  return (
    <div>
      {anecdotes.map(anecdote =>
        <Anecdote key={anecdote.id} anecdote={anecdote} />
      )}
    </div>
  )
}

export default AnecdoteList

