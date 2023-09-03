import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../Assets/logo1.png';
import { Link } from 'react-scroll';
 
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
  return (
    <div className='fixed w-full h-[50px] flex justify-between items-center px-4 bg-slate-900 text-gray-300 z-20'>
        <div>
            <img src={Logo} alt="Logo-Imag" style={{width: '200px'}}/>
        </div>
        
        {/* Menu */}
        <div>
            <ul className='hidden md:flex'>
                <li>
                    <Link activeClass="active" to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>

        {/* Hanburger */}
        <div  onClick={handleClick} className='md:hidden z-10'>
            { !nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-950 flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} activeClass="active" to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} activeClass="active" to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} activeClass="active" to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} activeClass="active" to="work" smooth={true} duration={500}>
                    Work
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} activeClass="active" to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
            </ul>            

        {/* Socials */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0 z-10'>
            <ul >
                <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 p-3'>
                    <a className="flex justify-between items-center w-full h-[50px] text-gray-300" 
                    href="./">
                        Linkedin <FaLinkedin size={'30px'} />
                    </a>
                </li>

                <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] p-3'>
                    <a className="flex justify-between items-center w-full h-[50px] text-gray-300" 
                    href="./">
                        Github <FaGithub size={'30px'} />
                    </a>
                </li>

                <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6FC2b0] p-3'>
                    <a className="flex justify-between items-center w-full h-[50px] text-gray-300" 
                    href="./">
                        Mail <HiOutlineMail size={'30px'} />
                    </a>
                </li>

                <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] p-3'>
                    <a className="flex justify-between items-center w-full h-[50px] text-gray-300" 
                    href="./">
                        Resume <BsFillPersonLinesFill size={'30px'} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;