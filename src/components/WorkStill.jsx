import React from 'react'
import Container from './Container'
import mobile from "../assets/5794854.jpg"
import ecommerce from "../assets/6505894.jpg"

const WorkStill = () => {
  return (
    <div className='pt-[158px] bg-[#FFFFFF]'>
        <Container>
            <div className="mt-[50px]">
                <h5 className='text-[20px] font-Poppins font-medium text-[#FF5538] leading-[140%]'>Digital Experience</h5>
                <div className="flex items-center justify-between">
                    <h4 className='text-[48px] font-Poppins font-semibold leading-[140%] w-[693px]'>The hundred of completed works still counting</h4>
                    <a href="#" className='text-[18px] font-Poppins leading-[200%] text-[#FF5538] py-[14px] px-[28px] rounded-[18px] border-[#FF5538] border-[1px] hover:bg-[#ff5638] hover:scale-95 hover:text-[#fff] duration-300'>View All</a>
                </div>
            </div>
            <div className="">
                
<div className="flex justify-between mt-[60px]">
        <div className='w-[33%]' >
            <div className="h-[331px] w-full ">
                <img src={mobile} className='w-full h-full object-cover shadow-xl' alt="" />
            </div>
            <div className="py-[30px] w-full bg-[#FFFFFF] shadow-xl">
               <div className="ml-[30px]">
                 <h3 className='text-[28px] font-Poppins font-semibold text-[#29313D]'>Mobile App</h3>
                <a href="#" className='text-[18px] font-Nunito font-medium text-[#FF5538]'>Read more</a>
               </div>
            </div>
        </div>
    <div className="w-[64%]">
        <div className="h-[331px] w-full">
                <img src={ecommerce} className='w-full h-full object-cover' alt="" />
            </div>
            <div className="py-[30px] w-full bg-[#FFFFFF] shadow-xl">
               <div className="ml-[30px]">
                 <h3 className='text-[28px] font-Poppins font-semibold text-[#29313D]'>ECommerce Solution</h3>
                <a href="#" className='text-[18px] font-Nunito font-medium text-[#FF5538]'>Read more</a>
               </div>
            </div>
    </div>
</div>
<div className="flex justify-between mt-[60px]">
        <div className='w-[64%]' >
            <div className="h-[331px] w-full">
                <img src={ecommerce} className='w-full h-full object-cover' alt="" />
            </div>
            <div className="py-[30px] w-full bg-[#FFFFFF] shadow-xl">
               <div className="ml-[30px]">
                 <h3 className='text-[28px] font-Poppins font-semibold text-[#29313D]'>ECommerce Solution</h3>
                <a href="#" className='text-[18px] font-Nunito font-medium text-[#FF5538]'>Read more</a>
               </div>
            </div>
        </div>
    <div className="w-[33%]">
        <div className="h-[331px] w-full">
                <img src={mobile} className='w-full h-full object-cover' alt="" />
            </div>
            <div className="py-[30px] w-full bg-[#FFFFFF] shadow-xl">
               <div className="ml-[30px]">
                 <h3 className='text-[28px] font-Poppins font-semibold text-[#29313D]'>Mobile App</h3>
                <a href="#" className='text-[18px] font-Nunito font-medium text-[#FF5538]'>Read more</a>
               </div>
            </div>
    </div>
</div>
    
            </div>
        </Container>
    </div>
  )
}

export default WorkStill