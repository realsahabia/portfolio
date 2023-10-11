import React from 'react'
import Drum from '../Assets/Projects/drum.png';
import MarkDownImg from '../Assets/Projects/markdownImg.png'
import Calculator from '../Assets/Projects/calculator.png'
import Quote from '../Assets/Projects/quote.png'
import DFA from '../Assets/Projects/dfa.png'

const Work = () => {
  return (
    <div name='work' className='md:h-[800px] w-full text-gray-300 bg-slate-900'>
    
    {/* container */}
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#FF6100]'>
                Work
            </p>
             <p className='py-6'> //Check out some of my recent work</p>
        </div>

        {/* container for projects */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          
          {/* Item/project */}
          <div style={{backgroundImage: `url(${Drum})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div'>
            
            {/* Card hover effects */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Drum Machine
              </span>
              <div className='pt-8 text-center'>
                <a href='https://drum-machine-two-dun.vercel.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/realsahabia/drum-machine.git'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Item/project */}
          <div style={{backgroundImage: `url(${MarkDownImg})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div'>
            
            {/* Card hover effects */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Mackdown Previewer
              </span>
              <div className='pt-8 text-center'>
                <a href='./'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/realsahabia/markdown-previewer.git'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Item/project */}
          <div style={{backgroundImage: `url(${Calculator})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div'>
            
            {/* Card hover effects */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Javascript Calculator
              </span>
              <div className='pt-8 text-center'>
                <a href='./'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/realsahabia/javascript-calculator.git' target='_black'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Item/project */}
          <div style={{backgroundImage: `url(${Quote})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div'>
            
            {/* Card hover effects */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Quote Machine
              </span>
              <div className='pt-8 text-center'>
                <a href='./'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/realsahabia/markdown-previewer.git'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Item/project */}
          <div style={{backgroundImage: `url(${DFA})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div'>
            
            {/* Card hover effects */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Javascript Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://defiafrica.net/' target='_black'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='./'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Item/project */}
          {/* <div style={{backgroundImage: `url(${realestate})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div'>
            
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Javascript Application
              </span>
              <div className='pt-8 text-center'>
                <a href='./'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='./'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div> */}

        </div>
    </div>

    </div>
  )
}

export default Work