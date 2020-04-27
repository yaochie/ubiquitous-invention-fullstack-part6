const messageReducer = (state = null, action) => {
  switch(action.type) {
    case 'SET_MESSAGE':
      return action.data
    default:
      return state
  }
} 

export const setMessage = (message) => {
  return {
    type: 'SET_MESSAGE',
    data: message
  }
}

export const clearMessage = () => {
  return {
    type: 'SET_MESSAGE',
    data: null
  }
}

export default messageReducer
