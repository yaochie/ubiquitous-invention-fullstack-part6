const messageReducer = (state = null, action) => {
  switch(action.type) {
    case 'SET_MESSAGE': {
      if (state !== null && state.timeoutId !== null) {
        clearTimeout(state.timeoutId)
      }
      return action.data
    }
    default:
      return state
  }
} 

export const setMessage = (message, timeout) => {
  return async dispatch => {
    const timeoutId = setTimeout(() => dispatch({
      type: 'SET_MESSAGE',
      data: null
    }), timeout * 1000)

    dispatch({
      type: 'SET_MESSAGE',
      data: {
        message,
        timeoutId
      }
    })
  }
}

export default messageReducer
