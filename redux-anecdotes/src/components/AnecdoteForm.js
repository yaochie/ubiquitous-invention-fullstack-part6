import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setMessage, clearMessage } from '../reducers/messageReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const create = async (event) => {
    event.preventDefault()
    const content = event.target.content.value

    const anecdote = await dispatch(createAnecdote(content))

    dispatch(setMessage(`Created new anecdote '${anecdote.content}'`))
    setTimeout(() => dispatch(clearMessage()), 5000)
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

export default AnecdoteForm

