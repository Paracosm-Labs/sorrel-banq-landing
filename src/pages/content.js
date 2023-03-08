import React from 'react'

const Content = ({ carouselType }) => {
  return (
    <div className='col-span-1'>
      <div className={`${carouselType === 0 ? '' : 'hidden'}`}>
        <div className='    px-5 lg:py-20  md:flex-row  right-2'>
          <div className=' lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-0 md:mb-0  items-center text-center'>
            <h1 className='title-font sm:text-4xl text-2xl lg:text-2xl mb-4 font-medium text-gray-900 '>
              CONTENT HEADING 1
            </h1>
            <p className='mb-8 leading-relaxed text-lg '>
              Copper mug try-hard pitchfork pour-over freegan heirloom
              <br /> neutra air plant cold-pressed tacos poke beard tote bag.
              <br /> Heirloom echo park mlkshk tote bag selvage hot chicken{' '}
              <br />
              authentic tumeric truffaut hexagon try-hard chambray.
            </p>

            <div className='flex justify-center'>
              <button className='inline-flex text-white bg-green-500 border-0 py-2 px-6  rounded-full text-lg'>
                Button
              </button>
              <button className='ml-4 inline-flex bg-green-500 text-gray-700 bg-gray-100 border-0 py-2 px-6  rounded-full text-lg'>
                Button
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`${carouselType === 1 ? '' : 'hidden'}`}>
        <div className='    px-5 lg:py-20  md:flex-row  right-2'>
          <div className=' lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-0 md:mb-0  items-center text-center'>
            <h1 className='title-font sm:text-4xl text-2xl lg:text-2xl mb-4 font-medium text-gray-900 '>
              CONTENT HEADING 2
            </h1>
            <p className='mb-8 leading-relaxed '>
              Copper mug try-hard pitchfork pour-over freegan heirloom
              <br /> neutra air plant cold-pressed tacos poke beard tote bag.
              <br /> Heirloom echo park mlkshk tote bag selvage hot chicken{' '}
              <br />
              authentic tumeric truffaut hexagon try-hard chambray.
            </p>

            <div className='flex justify-center'>
              <button className='inline-flex text-white bg-green-500 border-0 py-2 px-6  rounded-full text-lg'>
                Button
              </button>
              <button className='ml-4 inline-flex bg-green-500 text-gray-700 bg-gray-100 border-0 py-2 px-6  rounded-full text-lg'>
                Button
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`${carouselType === 2 ? '' : 'hidden'}`}>
        <div className='    px-5 lg:py-20  md:flex-row  right-2'>
          <div className=' lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-0 md:mb-0  items-center text-center'>
            <h1 className='title-font sm:text-4xl text-2xl lg:text-2xl mb-4 font-medium text-gray-900'>
              CONTENT HEADING 3
            </h1>
            <p className='mb-8 leading-relaxed '>
              Copper mug try-hard pitchfork pour-over freegan heirloom
              <br /> neutra air plant cold-pressed tacos poke beard tote bag.
              <br /> Heirloom echo park mlkshk tote bag selvage hot chicken{' '}
              <br />
              authentic tumeric truffaut hexagon try-hard chambray.
            </p>

            <div className='flex justify-center'>
              <button className='inline-flex text-white bg-green-500 border-0 py-2 px-6  rounded-full text-lg'>
                Button
              </button>
              <button className='ml-4 inline-flex bg-green-500 text-gray-700 bg-gray-100 border-0 py-2 px-6  rounded-full text-lg'>
                Button
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`${carouselType === 3 ? '' : 'hidden'}`}>
        <div className='    px-5 lg:py-20  md:flex-row  right-2'>
          <div className=' lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-0 md:mb-0  items-center text-center'>
            <h1 className='title-font sm:text-4xl text-2xl lg:text-2xl mb-4 font-medium text-gray-900'>
              CONTENT HEADING 4
            </h1>
            <p className='mb-8 leading-relaxed '>
              Copper mug try-hard pitchfork pour-over freegan heirloom
              <br /> neutra air plant cold-pressed tacos poke beard tote bag.
              <br /> Heirloom echo park mlkshk tote bag selvage hot chicken{' '}
              <br />
              authentic tumeric truffaut hexagon try-hard chambray.
            </p>

            <div className='flex justify-center'>
              <button className='inline-flex text-white bg-green-500 border-0 py-2 px-6  rounded-full text-lg'>
                Button
              </button>
              <button className='ml-4 inline-flex bg-green-500 text-gray-700 bg-gray-100 border-0 py-2 px-6  rounded-full text-lg'>
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
