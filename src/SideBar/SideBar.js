import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { appContext, useGlobalContext } from './AppProvider'

const SideBar = () => {
  const { sideBar, closeSideBar } = useGlobalContext()

  return (
    <div
      className={sideBar ? 'sideBar-wrapper show-sideBar' : 'sideBar-wrapper'}
    >
      <ul>
        <li>Home</li>
        <li>Avout</li>
        <li>Contact</li>
        <li>Info</li>
        <li>Services</li>
        <li>News</li>
      </ul>
      <button className='close-sideBar' onClick={closeSideBar}>
        <FaTimes />
      </button>
    </div>
  )
}

export default SideBar
