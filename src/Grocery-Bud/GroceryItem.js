import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/all'

const GroceryItem = ({ stock, displayAlert, delStock, editItem, setValue }) => {
  return (
    <>
      {stock.map((newStock, index) => {
        const { title, id } = newStock

        return (
          <section className='grocery-item' key={index}>
            <div>
              <h2>{title}</h2>
            </div>
            <div className='bud-btn-wrapper'>
              <button
                className='bud-btn'
                onClick={() => {
                  editItem(id)
                  setValue(title)
                }}
              >
                <FaEdit className='bud-icon' />
              </button>
              <button
                className='bud-btn'
                onClick={() => {
                  delStock(id)
                  displayAlert(true, 'item deleted', 'danger')
                }}
              >
                <FaTrash className='bud-icon' />
              </button>
            </div>
          </section>
        )
      })}
    </>
  )
}

export default GroceryItem
