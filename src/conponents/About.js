import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-slate-900 text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full px-4'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
              <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-[#FF6100]'>
                  About
                </p>
              </div>
              <div>
              </div>
            </div>

            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8'> 
                <div className='sm:text-right text-4xl font-bold'>
                  <p>Hi. I'm Sahabia Yakubu, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                  <p>I am passionate about building excellent web applications that improve
              the lives of those around me. I specialize in creating functional websites
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a web design expert available at your fingertips?</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;