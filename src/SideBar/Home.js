import React from 'react'
import { FaBars } from 'react-icons/fa'
import { appContext, useGlobalContext } from './AppProvider'

const Home = () => {
  const { openSideBar, openModal } = useGlobalContext()

  return (
    <div className='home-container'>
      <button className='sideBar-btn' onClick={openSideBar}>
        <FaBars className='home-icon' />
      </button>
      <div className='show-modal'>
        <button className='submit-btn' onClick={openModal}>
          Show modal
        </button>
      </div>
    </div>
  )
}

export default Home
