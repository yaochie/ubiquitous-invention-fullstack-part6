const messageReducer = (state = 'message', action) => {
  switch(action.type) {
    case 'SET_MESSAGE':
      return action.data
    default:
      return state
  }
} 

export default messageReducer
