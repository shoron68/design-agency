import React, { useState } from 'react';
import Container from './Container';
import logo from '../assets/Logo.png';
import { Menu, X } from 'lucide-react'; // optional: or use your own icons

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='py-6'>
      <Container className="">
        <div className='flex justify-between items-center lg:mx-0 mx-[30px]'>
          <div>
            <img src={logo} alt='Logo' className='lg:w-[120px] ' />
          </div>

          {/* Desktop Nav */}
          <ul className='hidden lg:flex items-center gap-x-12'>
            {['Home', 'About', 'Service', 'Portfolio', 'Price', 'Blog'].map((item) => (
              <li key={item}>
                <a
                  href='#'
                  className='text-base font-OpenSans font-semibold text-[#29313D] hover:text-[#FF5538] transition duration-300'
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className='hidden lg:block'>
            <a
              href='#'
              className='text-base font-Nunito font-semibold text-white py-3 px-6 rounded-xl bg-[#FF5538]'
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className='lg:hidden '>
            <button onClick={toggleMenu}>
              {isOpen ? <X size={28} className='absolute top-[30px] right-[30px] z-30' /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className='lg:hidden absolute top-0 right-0 w-[70%] h-[100dvh] bg-white shadow-md pt-[50px] px-[30px] space-y-4'>
            {['Home', 'About', 'Service', 'Portfolio', 'Price', 'Blog'].map((item) => (
              <a
                key={item}
                href='#'
                className='block text-base font-OpenSans font-semibold text-[#29313D] hover:text-[#FF5538] transition duration-300'
              >
                {item}
              </a>
            ))}
            <a
              href='#'
              className='block text-center text-base font-Nunito font-semibold text-white py-3 px-6 rounded-xl bg-[#FF5538]'
            >
              Contact Us
            </a>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Nav;
