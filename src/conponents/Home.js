import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import sahabia from '../Assets/sahabia.png';

const Home = () => {
  return (
    <div name="home" className="bg-slate-900 w-full h-screen flex justify-center items-center  ">
      
{/* container */}
<div className='max-w-[1000px] mx-auto px-8 h-full grid grid-cols-6 items-center'>
  
  {/* Content div (60%) */}
  <div className='col-span-5 z-2 sm:col-span-3'>
    <div className='h-full mr-1 flex flex-col justify-center'>
      <p className='text-[#FF6100]'>Hi, my name is</p>
      <h1 className='text-5xl sm:text-6xl font-bold text-[#ccd6f6]'>Sahabia Yakubu</h1>
      <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>I am a Web Developer</h2>
      <p className='py-4 text-[#8892b0] max-w-[700px]'>I’m a web developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building responsive frontend web applications.</p>
      <div>
        <button className='text-white border-2 px-6 py-3 my-2 group flex items-center hover:bg-[#FF6100] hover:border-[#FF6100]'>View Work 
          <span className='group-hover:rotate-90'>
            <HiArrowNarrowRight className='ml-3' /> 
          </span>
        </button>
      </div>
       </div>
       </div>

        {/* Image div (40%) */}
        <div className='hidden col-span-3 sm:flex  h-full justify-center items-center ml-5 grid-pic bg-[#8892b0] rounded-tl-[70px] rounded-tr-[70px]'>
          <img src={sahabia} alt='./' className='w-full object-cover sm:flex-col' />
        </div>
      </div>

          
  </div>
  )
}

export default Home