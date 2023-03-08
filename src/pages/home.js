import { useState } from 'react'
import { Link } from 'react-router-dom'
import NavigateImage from './navigateImage'
import Navigatesm from './navigatesm'
import logo from '../images/Logo.png'


const Home = () => {
  const [carouselType, setCarouselType] = useState(0)


  return (
    <div
      className='relative w-screen h-screen font-poppins text-white grid md:grid-cols-3'
      style={{
        backgroundImage: 'linear-gradient(to bottom, #2e3349, #142325)',
      }}
    >
      <header className='fixed text-gray-600 body-font w-full'>
        <div className='sm:mb-0 container mx-auto flex flex-wrap md:flex-row items-center  '>
          <Link className=' hidden lg:visible lg:flex title-font font-medium text-gray-900  mb-4 sm:mb-0 md:mb-0 ml-0 sm:left-0 '>
            <img className=' ml-25 mt-2  w-110  h-120 ' alt='hero' src={logo} />
          </Link>
          <div className='lg:hidden visible mb-4'>
            <div className='grid  grid-flow-row w-full px-2'>
              <Link className=' title-font pl-10 mt-1  ml-25 font-medium  text-gray-900  '>
                <img className='w-18 h-21  mx-2' alt='logo' src={logo} />
              </Link>
            </div>
          </div>
          <div className='sm:mt-10 sm:mb-0'>
            <Navigatesm carouselType={carouselType} />
          </div>
        </div>
      </header>
      <div className='sm:hidden mt-260  z-10 grid grid-cols-4 place-items-center'>
        <Link
          className='mb-0 pb-0 mr-5 hover:text-gray-900'
          onClick={() => setCarouselType(0)}
        >
          Point 1
        </Link>
        <Link
          className='mb-0 pb-0 mr-5 hover:text-gray-900'
          onClick={() => setCarouselType(1)}
        >
          Point 1
        </Link>
        <Link
          className='mb-0 pb-0 mr-5 hover:text-gray-900'
          onClick={() => setCarouselType(2)}
        >
          Point 1
        </Link>
        <Link
          className='mb-0 pb-0 mr-5 hover:text-white'
          to='/'
          onClick={() => setCarouselType(3)}
        >
          Point 1
        </Link>
      </div>
      <div className=' pl-5 sm:col-span-1  pt-0 mt-0 md:pt-15   md:border-r-8 border-green-700 '>
        <div className={`${carouselType === 0 ? '' : 'hidden'}`}>
          <div className=' md:px-5 lg:py-20 '>
            <div className='mt-2 lg:pr-2  sm:text-left    '>
              <h1 className=' text-lg lg:text-2xl  font-semibold text-gray-900  '>
                Essential Banking For Anyone Anywhere
              </h1>
              <p className='mb-8  leading-relaxed text-md  '>
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom echo
                park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.
              </p>

              <div className='flex justify-center md:justify-start gap-4 '>
                <button className='text-white  bg-purple-500 border-0 py-2 px-6  rounded-full text-lg'>
                  Launch App
                </button>
                <button className='bg-green-500 text-gray-700 bg-gray-100 border-0 py-2 px-6  rounded-full text-lg'>
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <nav className='lg:mt-0    font-bold text-linkcolor  mr-20  md:ml-auto lg:flex flex-wrap items-center text-base justify-center z-10 lg:visible hidden'>
            <Link
              className=' mr-5 hover:text-gray-900'
              onClick={() => setCarouselType(0)}
            >
              Point 1
            </Link>
            <Link
              className='mr-5 hover:text-gray-900'
              onClick={() => setCarouselType(1)}
            >
              Point 1
            </Link>
            <Link
              className='mr-5 hover:text-gray-900'
              onClick={() => setCarouselType(2)}
            >
              Point 1
            </Link>
            <Link
              className='mr-5 hover:text-white'
              to='/'
              onClick={() => setCarouselType(3)}
            >
              Point 1
            </Link>
          </nav>
        </div>

        <div className={`${carouselType === 1 ? '' : 'hidden'}`}>
          <div className=' md:px-5 lg:py-20 '>
            <div className='mt-2 lg:pr-2  sm:text-left    '>
              <h1 className=' text-lg lg:text-2xl  font-semibold text-gray-900  '>
                Essential Banking For Anyone Anywhere
              </h1>
              <p className='mb-8  leading-relaxed text-md  '>
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom echo
                park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.
              </p>

              <div className='flex justify-center md:justify-start gap-4 '>
                <button className='text-white  bg-purple-500 border-0 py-2 px-6  rounded-full text-lg'>
                  Launch App
                </button>
                <button className='bg-green-500 text-gray-700 bg-gray-100 border-0 py-2 px-6  rounded-full text-lg'>
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <nav className='lg:mt-0    font-bold text-linkcolor  mr-20  md:ml-auto lg:flex flex-wrap items-center text-base justify-center z-10 lg:visible hidden'>
            <Link
              className=' mr-5 hover:text-gray-900'
              onClick={() => setCarouselType(0)}
            >
              Point 1
            </Link>
            <Link
              className='mr-5 hover:text-gray-900'
              onClick={() => setCarouselType(1)}
            >
              Point 1
            </Link>
            <Link
              className='mr-5 hover:text-gray-900'
              onClick={() => setCarouselType(2)}
            >
              Point 1
            </Link>
            <Link
              className='mr-5 hover:text-white'
              to='/'
              onClick={() => setCarouselType(3)}
            >
              Point 1
            </Link>
          </nav>
        </div>

        <div className={`${carouselType === 2 ? '' : 'hidden'}`}>
          <div className=' md:px-5 lg:py-20 '>
            <div className='mt-2 lg:pr-2  sm:text-left    '>
              <h1 className=' text-lg lg:text-2xl  font-semibold text-gray-900  '>
                Essential Banking For Anyone Anywhere
              </h1>
              <p className='mb-8  leading-relaxed text-md  '>
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom echo
                park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.
              </p>

              <div className='flex justify-center md:justify-start gap-4 '>
                <button className='text-white  bg-purple-500 border-0 py-2 px-6  rounded-full text-lg'>
                  Launch App
                </button>
                <button className='bg-green-500 text-gray-700 bg-gray-100 border-0 py-2 px-6  rounded-full text-lg'>
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <nav className='lg:mt-0    font-bold text-linkcolor  mr-20  md:ml-auto lg:flex flex-wrap items-center text-base justify-center z-10 lg:visible hidden'>
            <Link
              className=' mr-5 hover:text-gray-900'
              onClick={() => setCarouselType(0)}
            >
              Point 1
            </Link>
            <Link
              className='mr-5 hover:text-gray-900'
              onClick={() => setCarouselType(1)}
            >
              Point 1
            </Link>
            <Link
              className='mr-5 hover:text-gray-900'
              onClick={() => setCarouselType(2)}
            >
              Point 1
            </Link>
            <Link
              className='mr-5 hover:text-white'
              to='/'
              onClick={() => setCarouselType(3)}
            >
              Point 1
            </Link>
          </nav>
        </div>
        <div className={`${carouselType === 3 ? '' : 'hidden'}`}>
          <div className=' md:px-5 lg:py-20 '>
            <div className='mt-2 lg:pr-2  sm:text-left    '>
              <h1 className=' text-lg lg:text-2xl  font-semibold text-gray-900  '>
                Essential Banking For Anyone Anywhere
              </h1>
              <p className='mb-8  leading-relaxed text-md  '>
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom echo
                park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.
              </p>

              <div className='flex justify-center md:justify-start gap-4 '>
                <button className='text-white  bg-purple-500 border-0 py-2 px-6  rounded-full text-lg'>
                  Launch App
                </button>
                <button className='bg-green-500 text-gray-700 bg-gray-100 border-0 py-2 px-6  rounded-full text-lg'>
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <nav className='lg:mt-0    font-bold text-linkcolor  mr-20  md:ml-auto lg:flex flex-wrap items-center text-base justify-center z-10 lg:visible hidden'>
            <Link
              className=' mr-5 hover:text-gray-900'
              onClick={() => setCarouselType(0)}
            >
              Point 1
            </Link>
            <Link
              className='mr-5 hover:text-gray-900'
              onClick={() => setCarouselType(1)}
            >
              Point 1
            </Link>
            <Link
              className='mr-5 hover:text-gray-900'
              onClick={() => setCarouselType(2)}
            >
              Point 1
            </Link>
            <Link
              className='mr-5 hover:text-white'
              to='/'
              onClick={() => setCarouselType(3)}
            >
              Point 1
            </Link>
          </nav>
        </div>
      </div>
     
      <div className='col-span-2 hidden md:block'>
        <NavigateImage carouselType={carouselType} />
      </div>
    </div>
  )
}

export default Home
