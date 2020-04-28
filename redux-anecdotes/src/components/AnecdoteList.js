import React from 'react'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
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

const AnecdoteList = (props) => {
  let anecdotes
  if (props.filter === '') {
    anecdotes = props.anecdotes
  } else {
    anecdotes = props.anecdotes.filter(a =>
    a.content.toLowerCase().includes(props.filter.toLowerCase()))
  }
  anecdotes.sort((a, b) => a.votes < b.votes)

  return (
    <div>
      {anecdotes.map(anecdote =>
        <Anecdote key={anecdote.id} anecdote={anecdote} />
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

export default connect(mapStateToProps)(AnecdoteList)

