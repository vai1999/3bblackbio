import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { useRouter } from 'next/router';
import NavLogo from '../public/truprc-logo.png'

import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

import { Fragment, useRef } from 'react'

function Header() {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3');
    const [linkColor, setLinkColor] = useState('#1f2937');
  
    // const [position, setPosition] = useState('fixed')
    // const router = useRouter();
  
    // useEffect(() => {
    //   if (
    //     router.asPath === '/property' ||
    //     router.asPath === '/crypto' ||
    //     router.asPath === '/netflix' ||
    //     router.asPath === '/twitch'
    //   ) {
    //     setNavBg('transparent');
    //     setLinkColor('#ecf0f3');
    //   } else {
    //     setNavBg('#ecf0f3');
    //     setLinkColor('#1f2937');
    //   }
    // }, [router]);
  
    const handleNav = () => {
      setNav(!nav);
    };
  
    useEffect(() => {
      const handleShadow = () => {
        if (window.scrollY >= 90) {
          setShadow(true);
        } else {
          setShadow(false);
        }
      };
      window.addEventListener('scroll', handleShadow);
    }, []);
  
  return (

  
  <div className='pb-20 md:pb-13'>
    
     <div
    //   style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 bg-white'
          : 'fixed w-full h-20 z-[100] bg-white'
      }
    >
      <div className='flex items-center justify-between w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          
            <Image
              src={NavLogo}
              alt='/'
              width='180'
              height='50'
              className='cursor-pointer'
            />
          
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <li className='ml-10 text-sm  hover:bg-blue-600 p-2 rounded-lg hover:text-white'>
              <Link href='/'>Home</Link>
            </li>
            <li className='relative ml-10 text-sm uppercase hover:border-b group' >
              <button className='text-black rounded-none shadow-none outline-none  hover:bg-blue-600 p-2 rounded-lg hover:text-white focus:outline-none bg-none'>About US</button>
              <div className='absolute hidden p-5 text-center bg-white rounded-md -right-9 group-hover:block hover:block'>
                <ul className='space-y-2 text-center w-28'>
                  <li className='flex p-2 font-medium  hover:bg-blue-600 p-2 rounded-lg hover:text-white text-gray-600  hover:bg-gray-100 hover:text-black '>
                    <Link href={'/team'}>About Us</Link>
                  </li>
                  <li className='flex p-2 font-medium  text-gray-600 rounded-md hover:bg-gray-100 hover:text-black '>
                    <Link href={''}>
                    Gallary
                    </Link>
                  </li>
                  <li className='flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-black '>
                    <Link href={'/team/#our'}>Our Team</Link>
                  </li>
                </ul>
              </div>
            </li>
           
            <li className='ml-10 text-sm uppercase  hover:bg-blue-600 p-2 rounded-lg hover:text-white '>
              <Link href='/#projects'>Our Services</Link>
            </li>
            {/* <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/team'>Our Team</Link>
            </li> */}
            <li className='ml-10 text-sm uppercase  hover:bg-blue-600 p-2 rounded-lg hover:text-white'>
              <Link href='/resume'>Career</Link>
            </li>
            <li className='ml-10 text-sm uppercase  hover:bg-blue-600 p-2 rounded-lg hover:text-white'>
              <Link href='/#contact'>Contact</Link>
            </li>


         

          </ul>





          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex items-center justify-between w-full'>
              <Link href='/'>
                
                  <Image
                    src={NavLogo}
                    width='100'
                    height='35'
                    alt='/'
                  />
                
              </Link>
              <div
                onClick={handleNav}
                className='p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='my-4 border-b border-gray-300'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className='flex flex-col py-4'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/team'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  About
                </li>
              </Link>
              <Link href='/galary'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Galary
                </li>
              </Link>
              <Link href='/team/#our'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Our Team
                </li>
              </Link>
              {/* <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                Skills
                </li>
              </Link> */}
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Our Services
                </li>
              </Link>

              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
             
            </ul>
            <div className='pt-40'>
              <p className='tracking-widest text-red-500 uppercase'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );

  
  
}

export default Header