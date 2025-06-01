import React from 'react'
import Container from './Container'

const GotProject = () => {
  return (
    <div className='bg-[url(./assets/gotproject.png)]'>
        <Container className="py-[50px]">
<div className=" lg:mx-0 mx-[30px]">
    <h4 data-aos='fade-up' data-aos-duration='200' className='text-[20px] font-Poppins font-normal text-[#29313D] lg:text-start text-center'>Lets talk</h4>
    <div className="lg:flex justify-between items-center border-b-[1px] border-[#29313D] pb-[48px]">
        <h2 data-aos='fade-up' data-aos-duration='300' className='lg:text-[48px] text-[36px] lg:text-start text-center text-[#29313D] font-Poppins font-semibold leading-[140%]'>Got a project?</h2>
        <div data-aos='zoom-in' data-aos-duration='400' className="flex justify-center lg:justify-start lg:mt-0 mt-[20px]">
          <a href="#"  className='text-[18px] leading-[200%] font-Nunito text-[#ffffff] lg:py-[14px] py-[9px] px-[20px] lg:px-[28px] rounded-[18px] bg-[#FF5538] hover:bg-[#ff5638e8] hover:scale-95 duration-300'>Contact Us</a>
        </div>
    </div>
    <div data-aos='fade-up' data-aos-duration='400' className="mt-[24px]">
        <p  className='lg:text-[20px] text-[16px] font-Nunito font-normal text-[#29313D] leading-[180%] lg:text-start text-center'>As a leading digital platform in Paris, we look to engage with our clients beyond the conventional design and development agency<br className='lg:block hidden'/> relationship, becoming a partner to the people and companies we work with.</p>
    </div>
</div>
        </Container>
    </div>
  )
}

export default GotProject