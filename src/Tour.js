import React, { useState } from 'react'
import { FaChevronUp, FaChevronDown } from 'react-icons/all'

const Tour = ({ question, answer }) => {
  const [value, setValue] = useState(false)

  return (
    <div>
      <div className='ques-box'>
        <h1>{question}</h1>
        <button className='btn' onClick={() => setValue(!value)}>
          {value ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      {value && <p>{answer}</p>}
    </div>
  )
}

export default Tour
