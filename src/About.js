import React, { useState } from 'react'
import NavBar from './NavBar'
import { menus } from './data'
import Buttons from './Buttons'
import { Link } from 'react-router-dom'

const myBtn = [
  'all',
  ...new Set(
    menus.map((menu) => {
      return menu.category
    })
  ),
]
const About = () => {
  const [menuItems, setMenuItems] = useState(menus)
  const [btns, setBtn] = useState(myBtn)

  const newItems = (id) => {
    const fill = menus.filter((item) => {
      return item.category === id
    })
    if (id === 'all') {
      return setMenuItems(menus)
    }
    return setMenuItems(fill)
  }

  return (
    <div>
      <NavBar />
      <main>
        <div className='title'>
          <h1>menu project</h1>
        </div>

        <div>
          <Buttons myBtn={myBtn} newItems={newItems} />
        </div>
        {menuItems.map((menu) => {
          const { img, id, price, title, desc } = menu
          return (
            <article id='item-wrapper' key={id}>
              <div className='image'>
                <img src={img} alt={title} />
              </div>
              <div className='item-box'>
                <div className='text'>
                  <h2>{title}</h2>
                  <h3>{`$${price}`}</h3>
                </div>
                <p>{desc}</p>
                <Link to={`/book/${id}`}>Learn More</Link>
              </div>
            </article>
          )
        })}
      </main>
    </div>
  )
}

export default About
