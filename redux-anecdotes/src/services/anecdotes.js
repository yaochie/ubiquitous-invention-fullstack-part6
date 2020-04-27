import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const addAnecdote = async (content) => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const voteAnecdote = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  const newVotes = response.data.votes + 1
  await axios.patch(`${baseUrl}/${id}`, { votes: newVotes })
}

export default {
  getAll,
  addAnecdote,
  voteAnecdote
}
