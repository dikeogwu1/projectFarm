import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { appContext, useGlobalContext } from './AppProvider'

const Modal = () => {
  const { modal, closeModal } = useGlobalContext()

  return (
    <div className={modal ? 'modal-wrapper display-modal' : 'modal-wrapper'}>
      <div className='modal-content'>
        <div>
          <h2>modal content</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            dignissimos maiores culpa libero est eaque!
          </p>
        </div>
        <button className='close-modal' onClick={closeModal}>
          <FaTimes className='modal-times' />
        </button>
      </div>
    </div>
  )
}

export default Modal
