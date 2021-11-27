import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import { paragraph } from './data'

const Contact = () => {
  const [param, setParam] = useState()
  const [paramValue, setParamValue] = useState(paragraph)

  useEffect(() => {
    setParamValue(paragraph.slice(0, 1))
  }, [])

  const handleSub = (e) => {
    e.preventDefault()
    let newParam = paragraph.slice(0, param)

    if (param && param <= 0) {
      setParamValue(paragraph.slice(0, 1))
    }
    if (param > paragraph.length) {
      setParamValue(paragraph.slice(0, paragraph.length))
    }

    if (param > 0 && param < paragraph.length) {
      setParamValue(newParam)
    }
    setParam('')
  }
  return (
    <>
      <NavBar />

      <h1 className='slider-title'>paragraph generator</h1>
      <div className='form-container'>
        <form onSubmit={handleSub}>
          <label htmlFor='number'>How Many Paragraph :</label>
          <input
            type='number'
            id='number'
            className='param-input'
            value={param}
            onChange={(e) => {
              setParam(e.target.value)
            }}
          />
          <button type='submit' className='submit-btn'>
            Generate
          </button>
        </form>
      </div>

      <section className='param-wrapper'>
        {paramValue.map((param) => {
          const { text, id } = param
          return (
            <div key={id} className='param'>
              <p>{text}</p>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Contact
