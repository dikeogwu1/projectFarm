import React, { useContext, useState } from 'react'

export const appContext = React.createContext()

const AppProvider = ({ children }) => {
  const [modal, setModal] = useState(false)
  const [sideBar, setSideBar] = useState(false)

  const openSideBar = () => {
    setSideBar(true)
  }
  const closeSideBar = () => {
    setSideBar(false)
  }
  const openModal = () => {
    setModal(true)
  }
  const closeModal = () => {
    setModal(false)
  }

  return (
    <appContext.Provider
      value={{
        sideBar,
        modal,
        openModal,
        openSideBar,
        closeModal,
        closeSideBar,
      }}
    >
      {children}
    </appContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(appContext)
}

export default AppProvider
