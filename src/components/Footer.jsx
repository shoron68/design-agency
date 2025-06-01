import React from 'react'
import Container from './Container'
import logo from "../assets/Logo.png"
const Footer = () => {

    return (
        <div>
            <Container className='lg:pt-[140px] pt-[60px]'>
                <div className="lg:mx-0 mx-[30px]">
                    <div className="lg:flex">
                        <div data-aos='zoom-in' data-aos-duration='200' className="lg:w-[449px]">
                            <div className="flex justify-center lg:justify-start">
                                <img src={logo} alt="" />
                            </div>
                            <p className='lg:mt-[44px] mt-[20px] lg:text-start text-center lg:text-[18px] text-[16px] text-[#29313D] font-Nunito font-normal leading-[180%]'>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
                        </div>
                        <div className="flex justify-center lg:justify-start">
                            <div data-aos='zoom-in' data-aos-duration='300' className="lg:ml-[255px] lg:mt-0 mt-[40px]">
                                <h3 className='text-[24px] font-OpenSans font-semibold text-[#29313D] leading-[140%] lg:text-start text-center'>Features</h3>
                                <ul className='lg:mt-[34px] mt-[15px]'>
                                    <li className='lg:text-[20px] text-[18px] font-Nunito lg:font-semibold text-[#29313D] leading-[120%] lg:text-start text-center hover:text-[#FF5538] duration-300 cursor-pointer'>Home</li>
                                    <li className='lg:text-[20px] text-[18px] font-Nunito lg:font-semibold  text-[#29313D] leading-[120%] lg:mt-[30px] mt-[10px] lg:text-start text-center hover:text-[#FF5538] duration-300 cursor-pointer'>About</li>
                                    <li className='lg:text-[20px] text-[18px] font-Nunito lg:font-semibold  text-[#29313D] leading-[120%] lg:mt-[30px] mt-[10px] lg:text-start text-center hover:text-[#FF5538] duration-300 cursor-pointer'>Benifit</li>
                                    <li className='lg:text-[20px] text-[18px] font-Nunito lg:font-semibold  text-[#29313D] leading-[120%] lg:mt-[30px] mt-[10px] lg:text-start text-center hover:text-[#FF5538] duration-300 cursor-pointer'>Pricing</li>
                                    <li className='lg:text-[20px] text-[18px] font-Nunito lg:font-semibold  text-[#29313D] leading-[120%] lg:mt-[30px] mt-[10px] lg:text-start text-center hover:text-[#FF5538] duration-300 cursor-pointer'>Blog</li>

                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-center lg:justify-start">

                            <div data-aos='zoom-in' data-aos-duration='400' className="lg:ml-[195px] lg:mt-0  mt-[40px]">
                                <h3 className='text-[24px] font-OpenSans font-semibold text-[#29313D] leading-[140%] lg:text-start text-center'>Products</h3>
                                <ul className='lg:mt-[34px] mt-[15px]'>
                                    <li className='lg:text-[20px] text-[18px] font-Nunito lg:font-semibold  text-[#29313D] leading-[120%] lg:text-start hover:text-[#FF5538] duration-300 text-center cursor-pointer'>Task Management</li>
                                    <li className='lg:text-[20px] text-[18px] font-Nunito lg:font-semibold  text-[#29313D] leading-[120%] lg:mt-[30px] mt-[10px] lg:text-start text-center hover:text-[#FF5538] duration-300 cursor-pointer'>Company growth</li>
                                    <li className='lg:text-[20px] text-[18px] font-Nunito lg:font-semibold  text-[#29313D] leading-[120%] lg:mt-[30px] mt-[10px] lg:text-start text-center hover:text-[#FF5538] duration-300 cursor-pointer'>Company growth</li>
                                    <li className='lg:text-[20px] text-[18px] font-Nunito lg:font-semibold  text-[#29313D] leading-[120%] lg:mt-[30px] mt-[10px] lg:text-start text-center hover:text-[#FF5538] duration-300 cursor-pointer'>Pricing</li>
                                    <li className='lg:text-[20px] text-[18px] font-Nunito lg:font-semibold  text-[#29313D] leading-[120%] lg:mt-[30px] mt-[10px] lg:text-start text-center hover:text-[#FF5538] duration-300 cursor-pointer'>Blog</li>

                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-center lg:justify-start">

                            <div data-aos='zoom-in' data-aos-duration='500' className="lg:ml-[195px] lg:mt-0  mt-[40px]">
                                <h3 className='text-[24px] font-OpenSans font-semibold text-[#29313D] leading-[140%] lg:text-start text-center'>Support</h3>
                                <ul className='lg:mt-[34px] mt-[15px]'>
                                    <li className='lg:text-[20px] text-[18px] font-Nunito lg:font-semibold  text-[#29313D] leading-[120%] lg:text-start text-center hover:text-[#FF5538] duration-300 cursor-pointer'>Customer service</li>
                                    <li className='lg:text-[20px] text-[18px] font-Nunito lg:font-semibold text-[#29313D] leading-[120%] lg:mt-[30px] mt-[10px] lg:text-start text-center hover:text-[#FF5538] duration-300 cursor-pointer'>Accessibility</li>
                                    <li className='lg:text-[20px] text-[18px] font-Nunito lg:font-semibold  text-[#29313D] leading-[120%] lg:mt-[30px] mt-[10px] lg:text-start text-center hover:text-[#FF5538] duration-300 cursor-pointer'>Contact us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:mx-0 mx-[30px]">
                    <div className="lg:flex justify-between py-[60px]">
                        <div className="">
                            <h3 className='lg:text-[18px] font-Nunito font-normal text-[#29313D] leading-[180%] lg:text-start text-center'>@20201 Innovate.All rights reserved.</h3>
                        </div>
                        <div className="flex gap-x-[60px] lg:justify-start justify-center">
                            <p className='lg:text-[18px] font-Nunito font-normal text-[#29313D] leading-[180%] '>Privacy policy</p>
                            <p className='lg:text-[18px] font-Nunito font-normal text-[#29313D] leading-[180%]'> Terms & condition</p>
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer