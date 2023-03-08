import React from 'react'
import a from '../images/a.jpeg'
import b from '../images/b.jpeg'
import c from '../images/c.jpeg'
import d from '../images/d.jpeg'
import Switch from './switch'

const NavigateImage = ({ carouselType }) => {
  return (
    <div className='w-full h-full z-0'>
      {/* <div className='absolute bottom-16 z-10 right-2'>
        <Switch />
      </div> */}
      <img
        className={`${carouselType === 0 ? '' : 'hidden'} w-full h-full`}
        src={a}
        alt=''
      />
      <img
        className={`${carouselType === 1 ? '' : 'hidden'} w-full h-full`}
        src={b}
        alt=''
      />{' '}
      <img
        className={`${carouselType === 2 ? '' : 'hidden'} w-full h-full`}
        src={c}
        alt=''
      />{' '}
      <img
        className={`${carouselType === 3 ? '' : 'hidden'} w-full h-full`}
        src={d}
        alt=''
      />
      {/* <div className='flex lg:w-3/5    md:w-1/2  lg:absolute lg:top-0  lg:right-0  lg:-z-2  invisible  lg:visible'>
        <img
          className={`${
            carouselType === 0 ? '' : 'hidden'
          } rounded-lg lg:min-h-screen shadow-2xl`}
          alt='hero'
          src={a}
        />
      </div>
      <div className='flex lg:w-3/5   md:w-1/2  lg:absolute lg:top-0  lg:right-0  lg:-z-2  invisible  lg:visible'>
        <img
          className={`${
            carouselType === 1 ? '' : 'hidden'
          } rounded-lg lg:min-h-screen shadow-2xl`}
          alt='hero'
          src={b}
        />
      </div>
      <div className='flex lg:w-3/5   md:w-1/2  lg:absolute lg:top-0  lg:right-0  lg:-z-2  invisible  lg:visible'>
        <img
          className={`${
            carouselType === 2 ? '' : 'hidden'
          } rounded-lg lg:min-h-screen shadow-2xl`}
          alt='hero'
          src={c}
        />
      </div>
      <div className='flex lg:w-3/5   md:w-1/2  lg:absolute lg:top-0  lg:right-0  lg:-z-2  invisible  lg:visible'>
        <img
          className={`${
            carouselType === 3 ? '' : 'hidden'
          } rounded-lg lg:min-h-screen shadow-2xl`}
          alt='hero'
          src={d}
        />
      </div> */}
    </div>
  )
}

export default NavigateImage
