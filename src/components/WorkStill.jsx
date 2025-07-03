import React from 'react'
import Container from './Container'
import mobile from "../assets/5794854.jpg"
import ecommerce from "../assets/6505894.jpg"

const WorkStill = () => {
    return (
        <div className='lg:pt-[158px] pt-[60px] bg-[#FFFFFF]'>
            <Container>
                <div className="lg:mx-0 mx-[30px]">

                    <div className="mt-[50px]">
                        <h5 data-aos='fade-up' data-aos-duration='200' className='text-[20px] font-Poppins font-medium text-[#FF5538] leading-[140%] lg:text-start text-center'>Digital Experience</h5>
                        <div className="lg:flex items-center justify-between">
                            <h4 data-aos='fade-up' data-aos-duration='300' className='lg:text-[48px] text-[35px] font-Poppins font-semibold leading-[140%] lg:w-[693px] lg:text-start text-center'>The hundred of completed works still counting</h4>
                            <div  data-aos='fade-up' data-aos-duration='300' className="flex justify-center lg:justify-start">
                                <a href="#" className='text-[18px] font-Poppins leading-[200%] text-[#FF5538] lg:py-[14px] lg:px-[28px] py-[9px] px-[28px] rounded-[18px] border-[#FF5538] border-[1px] hover:bg-[#ff5638] hover:scale-95 hover:text-[#fff] duration-300'>View All</a>
                            </div>
                        </div>
                    </div>
                    <div className="">

                        <div className="lg:flex justify-between mt-[60px]">
                            <div data-aos='zoom-in' data-aos-duration='200' className='lg:w-[33%]' >
                                <div className="h-[331px] w-full ">
                                    <img src={mobile} className='w-full h-full object-cover shadow-xl' alt="" />
                                </div>
                                <div className="py-[30px] w-full bg-[#FFFFFF] shadow-xl">
                                    <div className="ml-[30px]">
                                        <h3 className='lg:text-[28px] text-[24px] font-Poppins font-semibold text-[#29313D]'>Mobile App</h3>
                                        <a href="#" className='lg:text-[18px] text-[16px] font-Nunito font-medium text-[#FF5538]'>Read more</a>
                                    </div>
                                </div>
                            </div>
                            <div data-aos='zoom-in' data-aos-duration='300' className="lg:w-[64%] lg:mt-0 mt-[25px]">
                                <div className="h-[331px] w-full">
                                    <img src={ecommerce} className='w-full h-full object-cover' alt="" />
                                </div>
                                <div className="py-[30px] w-full bg-[#FFFFFF] shadow-xl">
                                    <div className="ml-[30px]">
                                        <h3 className='lg:text-[28px] text-[24px] font-Poppins font-semibold text-[#29313D]'>ECommerce Solution</h3>
                                        <a href="#" className='lg:text-[18px] text-[16px] font-Nunito font-medium text-[#FF5538]'>Read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex justify-between mt-[60px]">
                            <div data-aos='zoom-in' data-aos-duration='400' className='lg:w-[64%]' >
                                <div className="h-[331px] w-full">
                                    <img src={ecommerce} className='w-full h-full object-cover' alt="" />
                                </div>
                                <div className="py-[30px] w-full bg-[#FFFFFF] shadow-xl">
                                    <div className="ml-[30px]">
                                        <h3 className='lg:text-[28px] text-[24px] font-Poppins font-semibold text-[#29313D]'>ECommerce Solution</h3>
                                        <a href="#" className='lg:text-[18px] text-[16px] font-Nunito font-medium text-[#FF5538]'>Read more</a>
                                    </div>
                                </div>
                            </div>
                        <div data-aos='zoom-in' data-aos-duration='500' className="lg:w-[33%] lg:mt-0 mt-[25px]">
                                <div className="h-[331px] w-full">
                                    <img src={mobile} className='w-full h-full object-cover' alt="" />
                                </div>
                                <div className="py-[30px] w-full bg-[#FFFFFF] shadow-xl">
                                    <div className="ml-[30px]">
                                        <h3 className='lg:text-[28px] text-[24px] font-Poppins font-semibold text-[#29313D]'>Mobile App</h3>
                                        <a href="#" className='lg:text-[18px] text-[16px] font-Nunito font-medium text-[#FF5538]'>Read more</a>
                                    </div>
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