import React from 'react'
import a from '../images/a.jpeg'
import b from '../images/b.jpeg'
import c from '../images/c.jpeg'
import d from '../images/d.jpeg'
import Switch from './switch'

const Navigatesm = ({ carouselType }) => {
  return (
    <div className=''>
      <div className='lg:hidden md:hidden pr-260  shadow-2xl'>
        <img
          className={`${
            carouselType === 0 ? '' : 'hidden'
          }  lg:min-h-screen absolute  -z-10 shadow-2xl border-b-8 border-green-700 `}
          alt='hero'
          src={a}
        />
      </div>
      <div className='lg:hidden md:hidden mr-100 pr-260 shadow-2xl'>
        <img
          className={`${
            carouselType === 1 ? '' : 'hidden'
          } lg:min-h-screen absolute   -z-10 shadow-2xl border-b-8 border-green-700`}
          alt='hero'
          src={b}
        />
      </div>
      <div className='lg:hidden md:hidden mr-100 pr-260 '>
        <img
          className={`${
            carouselType === 2 ? '' : 'hidden'
          } lg:min-h-screen absolute  -z-10  shadow-2xl border-b-8 border-green-700`}
          alt='hero'
          src={c}
        />
      </div>
      <div className='lg:hidden md:hidden mr-100 pr-260 shadow-2xl '>
        <img
          className={`${
            carouselType === 3 ? '' : 'hidden'
          } lg:min-h-screen absolute   -z-10 shadow-2xl border-b-8 border-green-700`}
          alt='hero'
          src={d}
        />
      </div>
    </div>
  )
}

export default Navigatesm
