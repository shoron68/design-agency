import React from 'react'
import Container from './Container'
import logo from"../assets/logo.png"
const Footer = () => {
  return (
    <div>
        <Container className='pt-[140px]'>
            <div className="flex">
                <div className="w-[449px]">
                    <img src={logo} alt="" />
                    <p className='mt-[44px] text-[18px] text-[#29313D] font-Nunito font-normal leading-[180%]'>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
                </div>
                <div className="ml-[255px]">
                    <h3 className='text-[24px] font-OpenSans font-semibold text-[#29313D] leading-[140%]'>Features</h3>
                    <ul className='mt-[34px]'>
                        <li className='text-[20px] font-Nunito font-semibold text-[#29313D] leading-[120%]'>Home</li>
                        <li className='text-[20px] font-Nunito font-semibold text-[#29313D] leading-[120%] mt-[30px]'>About</li>
                        <li className='text-[20px] font-Nunito font-semibold text-[#29313D] leading-[120%] mt-[30px]'>Benifit</li>
                        <li className='text-[20px] font-Nunito font-semibold text-[#29313D] leading-[120%] mt-[30px]'>Pricing</li>
                        <li className='text-[20px] font-Nunito font-semibold text-[#29313D] leading-[120%] mt-[30px]'>Blog</li>
                        
                    </ul>
                </div>
                <div className="ml-[195px]">
                    <h3 className='text-[24px] font-OpenSans font-semibold text-[#29313D] leading-[140%]'>Products</h3>
                    <ul className='mt-[34px]'>
                        <li className='text-[20px] font-Nunito font-semibold text-[#29313D] leading-[120%]'>Task Management</li>
                        <li className='text-[20px] font-Nunito font-semibold text-[#29313D] leading-[120%] mt-[30px]'>Company growth</li>
                        <li className='text-[20px] font-Nunito font-semibold text-[#29313D] leading-[120%] mt-[30px]'>Company growth</li>
                        <li className='text-[20px] font-Nunito font-semibold text-[#29313D] leading-[120%] mt-[30px]'>Pricing</li>
                        <li className='text-[20px] font-Nunito font-semibold text-[#29313D] leading-[120%] mt-[30px]'>Blog</li>
                        
                    </ul>
                </div>
                <div className="ml-[195px]">
                    <h3 className='text-[24px] font-OpenSans font-semibold text-[#29313D] leading-[140%]'>Support</h3>
                    <ul className='mt-[34px]'>
                        <li className='text-[20px] font-Nunito font-semibold text-[#29313D] leading-[120%]'>Customer service</li>
                        <li className='text-[20px] font-Nunito font-semibold text-[#29313D] leading-[120%] mt-[30px]'>Accessibility</li>
                        <li className='text-[20px] font-Nunito font-semibold text-[#29313D] leading-[120%] mt-[30px]'>Contact us</li> 
                    </ul>
                </div>
            </div>
            <div className="flex justify-between py-[60px]">
                <div className="">
                    <h3 className='text-[18px] font-Nunito font-normal text-[#29313D] leading-[180%]'>@20201 Innovate.All rights reserved.</h3>
                </div>
                <div className="flex gap-x-[60px]">
                    <p className='text-[18px] font-Nunito font-normal text-[#29313D] leading-[180%]'>Privacy policy</p>
                    <p className='text-[18px] font-Nunito font-normal text-[#29313D] leading-[180%]'> Terms & condition</p>
                </div>

            </div>
        </Container>
    </div>
  )
}

export default Footer