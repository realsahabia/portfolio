import React from 'react'

import CSS from '../Assets/css.png';
import Github from '../Assets/github.png';
import HTML from '../Assets/html.png';
import Reactimg from '../Assets/react.png';
import Tailwind from '../Assets/tailwind.png';
import Javascript from '../Assets/javascript.png';
import Npm from '../Assets/npm.png';
import Figma from '../Assets/Figma.png';

const Skills = () => {
  return (
    <div name='skills' className='sm:h-screen w-full bg-slate-900 text-gray-300'>

        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#FF6100]'>Skills</p>
                <p className='py-4'>// These are the technologies I've worked with</p>
            </div>
            
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
                    <p className='my-4'>HTML</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt='CSS icon' />
                    <p className='my-4'>CSS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Javascript} alt='Javascript icon' />
                    <p className='my-4'>Javascript</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Reactimg} alt='React icon' />
                    <p className='my-4'>React</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt='Tailwind icon' />
                    <p className='my-4'>Tailwind</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Npm} alt='Npm icon' />
                    <p className='my-4'>NPM</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt='Github icon' />
                    <p className='my-4'>Github</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Figma} alt='Figma icon' />
                    <p className='my-4'>Figma</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills