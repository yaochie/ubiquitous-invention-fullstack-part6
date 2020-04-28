import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setMessage } from '../reducers/messageReducer'

const AnecdoteForm = (props) => {
  const create = async (event) => {
    event.preventDefault()
    const content = event.target.content.value

    const anecdote = await props.createAnecdote(content)

    props.setMessage(`Created new anecdote '${anecdote.content}'`, 5)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={create}>
        <div><input name="content" /></div>
        <button>create</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = { createAnecdote, setMessage }

export default connect(null, mapDispatchToProps)(AnecdoteForm)

