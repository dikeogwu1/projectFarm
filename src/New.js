import React from 'react'
import Index from './SideBar/Index'
import NavBar from './NavBar'
import AppProvider from './SideBar/AppProvider'

const New = () => {
  return (
    <div>
      <NavBar />
      <AppProvider>
        <Index />
      </AppProvider>
    </div>
  )
}

export default New
