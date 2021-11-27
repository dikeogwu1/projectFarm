import React, { useState, useEffect } from 'react'
import Alert from './Alert'
import GroceryItem from './GroceryItem'

const getLocal = () => {
  let get = localStorage.getItem('stock')
  if (get) {
    return JSON.parse(localStorage.getItem('stock'))
  } else {
    return []
  }
}
const Grocery = () => {
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })
  const [value, setValue] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [stock, setStock] = useState(getLocal())
  const [editId, setEditId] = useState(null)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      displayAlert(false, '', '')
    }, 3000)
    return () => {
      clearTimeout(timeOut)
    }
  }, [alert])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value) {
      // display alert
      displayAlert(true, 'please add item', 'danger')
    } else if (value && isEditing) {
      // display alert
      setStock(
        stock.map((change) => {
          if (change.id === editId.id) {
            return { ...change, title: value }
          }
          return change
        })
      )
      setIsEditing(false)
      setValue('')
      setEditId(null)
      displayAlert(true, 'item changed', 'success')
    } else {
      // display alert
      const stockItem = { title: value, id: new Date().getTime().toString() }
      setStock([...stock, stockItem])
      setValue('')
      displayAlert(true, 'item added to list', 'success')
    }
  }

  const displayAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type })
  }

  const delStock = (id) => {
    const fil = stock.filter((oneItem) => {
      return oneItem.id !== id
    })
    return setStock(fil)
  }

  const editItem = (id) => {
    const findIt = stock.find((single) => {
      return single.id === id
    })
    setEditId(findIt)
    setIsEditing(true)
    return findIt
  }

  useEffect(() => {
    localStorage.setItem('stock', JSON.stringify(stock))
  }, [stock])

  return (
    <>
      <div className='form-container'>
        <p>{alert.show && <Alert alert={alert} />}</p>
        <form className='form' onSubmit={handleSubmit}>
          <input
            type='text'
            className='bud-input'
            placeholder='e.g egg'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'Edit' : 'Submit'}
          </button>
        </form>

        {stock.length > 0 && (
          <div className='item-wrapper'>
            <div className='bud-item'>
              <div>
                <GroceryItem
                  stock={stock}
                  displayAlert={displayAlert}
                  delStock={delStock}
                  setValue={setValue}
                  editItem={editItem}
                />
              </div>
            </div>
            <button
              className='clear-all'
              onClick={() => {
                setStock([])
                displayAlert(true, 'List Empty', 'danger')
              }}
            >
              Clear All
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default Grocery
