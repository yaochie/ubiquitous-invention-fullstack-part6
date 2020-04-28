import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setMessage } from '../reducers/messageReducer'

const Anecdote = (props) => {
  const vote = async (anecdote) => {
    await props.voteAnecdote(anecdote.id)
    props.setMessage(`Voted for '${anecdote.content}'`, 5)
  }

  return (
    <div key={props.anecdote.id}>
      <div>
        {props.anecdote.content}
      </div>
      <div>
        has {props.anecdote.votes}
        <button onClick={() => vote(props.anecdote)}>vote</button>
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
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          voteAnecdote={props.voteAnecdote}
          setMessage={props.setMessage}
        />
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

const mapDispatchToProps = { voteAnecdote, setMessage }

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)

