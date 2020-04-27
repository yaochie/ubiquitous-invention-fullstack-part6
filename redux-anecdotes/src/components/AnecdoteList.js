import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setMessage } from '../reducers/messageReducer'

const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    dispatch(voteAnecdote(anecdote.id)) 

    dispatch(setMessage(`Voted for '${anecdote.content}'`, 5))
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
  const anecdotes = useSelector(state => {
    if (state.filter === '') {
      return state.anecdotes
    }
    return state.anecdotes.filter(a =>
      a.content.toLowerCase().includes(state.filter.toLowerCase())
    )
  })
  anecdotes.sort((a, b) => a.votes < b.votes)

  return (
    <div>
      {anecdotes.map(anecdote =>
        <Anecdote key={anecdote.id} anecdote={anecdote} />
      )}
    </div>
  )
}

export default AnecdoteList

