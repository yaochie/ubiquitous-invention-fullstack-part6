import anecdoteService from '../services/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'INIT_ANECDOTES':
      return action.data

    case 'CREATE':
      return state.concat(action.data)

    case 'VOTE':
      const idToVote = action.data.id
      const a = state.find(a => a.id === idToVote)
      const newAnecdote = {
        ...a,
        votes: a.votes + 1
      }

      return state.map(a => a.id === idToVote ? newAnecdote : a)

    default:
      return state
  }
}

export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const anecdote = await anecdoteService.addAnecdote(content)
    dispatch({
      type: 'CREATE',
      data: anecdote
    })
    return anecdote
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const data = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data
    })
  }
}

export default anecdoteReducer
