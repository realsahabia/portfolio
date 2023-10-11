import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import sahabia from '../Assets/sahabia2.png';

const Home = () => {
  return (
    <div name="home" className='sm:bg-slate-900 w-full h-screen flex justify-center items-center'>
      
{/* container */}
<div className='max-w-[1000px] mx-auto sm:p-8 grid grid-cols-10 sm:grid-cols-6 items-center'>
  
  {/* Content div */}
  <div className='col-span-10 sm:col-span-3 sm:h-[70vh]'>
    <div className='h-[100vh] mr-1 flex flex-col justify-center sm:mt-0 bg-[#0000007e] sm:bg-[#0000] sm:col-span-5 
    p-2 pr-4 pt-24 sm:pr-0 sm:pt-0'>
      <p className='text-[#FF6100]'>Hi, my name is</p>
      <h1 className='text-4xl sm:text-6xl font-bold text-[#ffffff]'>Sahabia Yakubu</h1>
      <h2 className='text-4xl sm:text-6xl font-bold text-[#ccc]'>I am a Web Developer</h2>
      <p className='py-4 text-[#ffffff] max-w-[700px]'>I’m a web developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building responsive frontend websites.</p>
      <div>
        <button className='text-white border-2 px-6 py-3 my-2 group flex items-center hover:bg-[#FF6100] hover:border-[#FF6100]'>View Work 
          <span className='group-hover:rotate-90'>
            <HiArrowNarrowRight className='ml-3' /> 
          </span>
        </button>
      </div>
    </div>
  </div>

        {/* Image div */}
  <div className='sm:col-span-3 flex h-full sm:h-[90vh] justify-center items-center sm:ml-5 
  grid-pic sm:rounded-tl-[70px] sm:rounded-tr-[70px] bg-slate-900 w-full'>
    <img src={sahabia} alt='./' className='w-full h-full object-cover object-top sm:flex-col' />
  </div>
</div>

</div>
  )
}

export default Home;