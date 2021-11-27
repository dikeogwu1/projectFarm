import React from 'react'

const Alert = ({ alert }) => {
  const { type, msg } = alert
  return (
    <div>
      <h2 className={`bud-alert ${type}`}>{msg}</h2>
    </div>
  )
}

export default Alert
