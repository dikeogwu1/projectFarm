import React from 'react'
import Home from './Home'
import Modal from './Modal'
import SideBar from './SideBar'
import './sideBar.css'

const Index = () => {
  return (
    <div className='index-container'>
      <Modal />
      <Home />
      <SideBar />
    </div>
  )
}

export default Index
