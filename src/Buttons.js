import React from 'react'

const Buttons = ({ myBtn, newItems }) => {
  return (
    <div className='btns'>
      {myBtn.map((btn, index) => {
        return (
          <button key={index} onClick={() => newItems(btn)}>
            {btn}
          </button>
        )
      })}
    </div>
  )
}

export default Buttons
