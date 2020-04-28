import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state =>
    state.message === null ? null : state.message.message
  )
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: notification === null ? 'none': '',
  }

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification
