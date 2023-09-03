import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-slate-900 flex justify-center items-center p-4'>
       <form method='POST' action='https://getform.io/f/150dd161-f315-4460-9d94-78217a5b3799' className='flex flex-col max-w-[600px] w-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#FF6100] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - contact.sahatech.info</p>
            </div>

            <input type='text' name='name' placeholder='Name' className='bg-[#ccd6f6] my-2 p-2'/>
            <input type='text' name='email' placeholder='Email' className='bg-[#ccd6f6] my-2 p-2'/>
            <textarea name='message' rows='8' placeholder='Message' className='bg-[#ccd6f6] p-2 my-2'></textarea>
            <button type='submit' className='text-center text-white border-2 px-4 py-3 my-8 font-bold hover:bg-[#FF6100] hover:border-[#FF6100] mx-auto flex items-center' >Let's Colaborate</button>
        </form> 
    </div>
  )
}

export default Contact