import React from 'react'
import Container from './Container'

const GotProject = () => {
  return (
    <div className='bg-[url(./assets/gotproject.png)]'>
        <Container className="py-[50px]">
<div className="">
    <h4 className='text-[20px] font-Poppins font-normal text-[#29313D]'>Lets talk</h4>
    <div className="flex justify-between items-center border-b-[1px] border-[#29313D] pb-[48px]">
        <h2 className='text-[48px] text-[#29313D] font-Poppins font-semibold leading-[140%]'>Got a project?</h2>
        <a href="#" className='text-[18px] leading-[200%] font-Nunito text-[#ffffff] py-[14px] px-[28px] rounded-[18px] bg-[#FF5538] hover:bg-[#ff5638e8] hover:scale-95 duration-300'>Contact Us</a>
    </div>
    <div className="mt-[24px]">
        <p className='text-[20px] font-Nunito font-normal text-[#29313D] leading-[180%]'>As a leading digital platform in Paris, we look to engage with our clients beyond the conventional design and development agency<br/> relationship, becoming a partner to the people and companies we work with.</p>
    </div>
</div>
        </Container>
    </div>
  )
}

export default GotProject