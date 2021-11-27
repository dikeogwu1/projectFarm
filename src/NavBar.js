import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/all'
import { navItem } from './data'

const NavBar = () => {
  const [show, setShow] = useState(false)
  const containerRef = useRef(null)
  const ulRef = useRef(null)
  useEffect(() => {
    let ulHeight = ulRef.current.getBoundingClientRect().height
    let containerHeight = containerRef.current.getBoundingClientRect().height

    if (show) {
      containerRef.current.style.height = `${ulHeight}px`
    } else {
      containerRef.current.style.height = 0
    }
  }, [show])

  return (
    <div className='nav-container'>
      <div className='nav-header'>
        <b>LOGO</b>
        <button className='nav-btn' onClick={() => setShow(!show)}>
          <FaBars className='nav-icon' />
        </button>
      </div>
      <div className='ul-wrapper' ref={containerRef}>
        <ul className='nav-ul' ref={ulRef}>
          {navItem.map((item) => {
            const { id, url, text } = item
            return (
              <Link to={url} key={id} className='link'>
                {text}
              </Link>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default NavBar
