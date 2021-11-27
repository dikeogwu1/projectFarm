import React, { useState, useEffect } from 'react'
import { Nslider } from './data'
import { FaChevronLeft, FaChevronRight } from 'react-icons/all'

const Slider = () => {
  const [slids, setSlids] = useState(Nslider)
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (value < 0) {
      setValue(Nslider.length - 1)
    }
    if (value > Nslider.length - 1) {
      setValue(0)
    }
  }, [value])

  useEffect(() => {
    let inter = setInterval(() => {
      setValue(value + 1)
    }, 3000)
    return () => {
      clearInterval(inter)
    }
  }, [value])

  return (
    <>
      <h1 className='slider-title'>dynamic slider</h1>
      <main className='g-container'>
        <div className='sild-container'>
          {slids.map((slid, index) => {
            const { id, img, name, desc } = slid
            let position = 'next-slid'
            if (index === value) {
              position = 'active-slid'
            }
            if (
              index === value - 1 ||
              (value === 0 && index === Nslider.length - 1)
            ) {
              position = 'prev-slid'
            }
            return (
              <article className={position}>
                <section className='slid-wrapper'>
                  <div className='image-wrapper'>
                    <img src={img} alt={name} />
                  </div>
                  <div className='description'>
                    <h2>{name}</h2>
                    <p>{desc}</p>
                  </div>
                </section>
              </article>
            )
          })}
        </div>
        <button className='left'>
          <FaChevronLeft
            className='silde-icon'
            onClick={() => setValue(value - 1)}
          />
        </button>
        <button className='right'>
          <FaChevronRight
            className='silde-icon'
            onClick={() => setValue(value + 1)}
          />
        </button>
      </main>
    </>
  )
}

export default Slider
