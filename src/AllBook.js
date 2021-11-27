import React from 'react'
import { menus } from './data'
import { Link, useParams } from 'react-router-dom'
import NavBar from './NavBar'

const AllBook = () => {
  const { id } = useParams()
  const single = menus.find((book) => {
    return book.id == parseInt(id)
  })

  const { img, price } = single
  return (
    <div>
      <NavBar />
      <h1>Take a good look</h1>
      <img src={img} alt='' />
      <h2>At affordable price of ${price}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatum
        id eligendi? Quaerat quasi eaque inventore?
      </p>
    </div>
  )
}

export default AllBook
