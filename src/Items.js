import React from 'react'
import Tour from './Tour'
import { books } from './data'
import NavBar from './NavBar'
import Slider from './Slider'

const Items = () => {
  return (
    <div>
      <NavBar />
      <div className='box'>
        {books.map((book) => {
          return (
            <article className='ques' key={book.id}>
              <Tour {...book} />
            </article>
          )
        })}
      </div>
      <Slider />
    </div>
  )
}

export default Items
