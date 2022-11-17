import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaGoogle,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Curriculum from '../assets/CV-Julian-Moreyra.pdf';
import Logo from '../assets/lawyers.svg';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed z-10 w-full h-[80px] flex justify-between items-center px-4 bg-[#f6f5e2] text-stone-800	'>
      <div>
        <img src={Logo} alt='Logo Image' style={{ width: '50px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            Sobre nosotros
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Servicios
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            Profesionales
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contactenos
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#f6f5e2] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Inicio
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            Sobre mi
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Servicios
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Profesional
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contacto
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-stone-800'
              href='https://wa.me/+5491144776913 ' target='_blank'
            >
              WhatsApp <FaWhatsapp size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-stone-800'
              href='/'
            >
              Email <FaGoogle size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-stone-800'
              href={Curriculum} download="Curriculum Vitae Julian Moreyra"
            >
              Instagram <FaInstagram size={30} />


            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
