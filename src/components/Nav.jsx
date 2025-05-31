import React, { useState } from 'react';
import Container from './Container';
import logo from '../assets/Logo.png';
import { Menu, X } from 'lucide-react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    "Home",
    "About",
    "Service",
    "Portfolio",
    "Price",
    "Blog"
  ];

  return (
    <div className='py-[30px] relative z-50'>
      <Container>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <img src={logo} alt="Logo" className="w-[120px]" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className='flex items-center gap-x-[48px]'>
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className='text-[18px] font-OpenSans font-semibold text-[#29313D] hover:text-[#FF5538] duration-300'
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <a href="#" className='text-[18px] font-Nunito font-semibold leading-[200%] text-[#fff] py-[14px] px-[28px] rounded-[18px] bg-[#FF5538]'>
              Contact Us
            </a>
          </div>

          {/* Mobile Burger Icon */}
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 w-[250px] h-full bg-white shadow-md transition-transform duration-300 z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center px-4 py-5 border-b">
          <img src={logo} alt="Logo" className="w-[100px]" />
          <button onClick={toggleMenu}>
            <X size={24} />
          </button>
        </div>
        <ul className='flex flex-col gap-y-5 px-6 py-6'>
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a
                href="#"
                onClick={toggleMenu}
                className='text-[18px] font-OpenSans font-semibold text-[#29313D] hover:text-[#FF5538] duration-300'
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              onClick={toggleMenu}
              className='block mt-4 text-center text-[18px] font-Nunito font-semibold leading-[200%] text-[#fff] py-[14px] px-[28px] rounded-[18px] bg-[#FF5538]'
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
};

export default Nav;
