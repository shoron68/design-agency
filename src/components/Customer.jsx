import React from 'react'
import Container from './Container'
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"

const Customer = () => {
  return (
    <div className='bg-[#FDF9F8]'>
<Container className="py-[120px]">
    <div className="flex gap-x-[150px]">
        <div className="">
            <h3 className='text-[48px] font-Poppins font-semibold trxt-[#29313D] leading-[140%]'>Our customer say</h3>
            <div className="flex gap-x-[28px] mt-[60px]">
                <div className="h-[100px] w-[100px]  ">
                    <img src={image2} className='w-full h-full object-cover rounded-[20px] shadow-xl' alt="" />
                </div>
                <div className="h-[100px] w-[100px]  ">
                    <img src={image2} className='w-full h-full object-cover rounded-[20px] shadow-xl' alt="" />
                </div>
                <div className="h-[100px] w-[100px]  ">
                    <img src={image2} className='w-full h-full object-cover rounded-[20px] shadow-xl' alt="" />
                </div>
                <div className="h-[100px] w-[100px]  ">
                    <img src={image2} className='w-full h-full object-cover rounded-[20px] shadow-xl' alt="" />
                </div>
                
            </div>
            <p className='mt-[60px] text-[20px] font-Nunito font-normal text-[#29313D] leading-[180%]'>As a leading digital platform in Paris, we look to engage with our clientsbeyond the conventional design and development agency relationship,<br/> becoming a partner to the people and companies we work with.</p>
            <h5 className='mt-[60px] text-[36px] font-OpenSans font-semibold text-[#29313D] leading-[180%]' >Jonathon</h5>
        </div>
        <div className="">
            <div className="w-[501px] h-[557px] ">
                <img src={image1} className='w-full h-full object-cover rounded-[30px] shadow-2xl' alt="" />
            </div>
        </div>
    </div>
</Container>
    </div>
  )
}

export default Customer