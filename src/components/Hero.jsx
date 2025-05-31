import React from 'react'
import Container from './Container'
import ball from "../assets/ball.png"
import grow from "../assets/grow.png"
import marketing from "../assets/marketing.png"
import seo from "../assets/seo.png"

const Hero = () => {
    return (
        <div className='relative' >
            <div className="absolute bottom-[-90px] left-0 z-10">
                <img src={ball} alt="" />
            </div>
            <Container className='pt-[197px] pb-[297px]'>
                <div className="w-[771px] mx-auto">
                    <h1 className='text-[64px] font-Poppins font-bold text-[#29313D] text-center leading-[130%] '>We are a full range design agency</h1>
                    <p className='text-[18px] font-Nunito font-normal text-[#29313D] text-center w-[547px] mx-auto leading-[200%] mt-[24px]'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.</p>
                </div>
                <div className="flex items-center mt-[44px] gap-x-[24px] justify-center">
                    <a href="#" className='text-[18px] leading-[200%] font-Nunito text-[#ffffff] py-[14px] px-[28px] rounded-[18px] bg-[#FF5538] hover:bg-[#ff5638e8] hover:scale-95 duration-300'>Contact Us</a>
                    <a href="#" className='text-[18px] font-Nunito leading-[200%] text-[#FF5538] py-[14px] px-[28px] rounded-[18px] border-[#FF5538] border-[1px] hover:bg-[#ff5638] hover:scale-95 hover:text-[#fff] duration-300'>Showcase</a>

                </div>

            </Container>
            <Container>
                <div className=" absolute bottom-[-140px] left-[216px] z-10">

                    <div className="grid grid-cols-3 grid-rows-1 gap-x-[50px]">
                        <div >
                            <div className="w-[450px] bg-[#fff]">
                                <div className="ml-[30px] pt-[40px] pb-[40px]">

                                    <img src={grow} alt="" />

                                    <div className=" mt-[34px]">
                                        <h4 className='text-[#29313D] text-[28px] font-Poppins leading-[160%] font-semibold'>Grow your business</h4>
                                        <p className='mt-[16px] text-[#29313D] text-[18px] font-Nunito font-normal leading-[200%] '>Nam libero tempore, cum soluta nobis est eligendi optio cumque </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="w-[450px] bg-[#fff]">
                                <div className="ml-[30px] pt-[40px] pb-[40px]">

                                    <img src={marketing} alt="" />

                                    <div className=" mt-[34px]">
                                        <h4 className='text-[#29313D] text-[28px] font-Poppins leading-[160%] font-semibold'>Digital marketing</h4>
                                        <p className='mt-[16px] text-[#29313D] text-[18px] font-Nunito font-normal leading-[200%] '>Nam libero tempore, cum soluta nobis est eligendi optio cumque </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="w-[450px] bg-[#fff]">
                                <div className="ml-[30px] pt-[40px] pb-[40px]">

                                    <img src={seo} alt="" />

                                    <div className=" mt-[34px]">
                                        <h4 className='text-[#29313D] text-[28px] font-Poppins leading-[160%] font-semibold'>Search engine optimization</h4>
                                        <p className='mt-[16px] text-[#29313D] text-[18px] font-Nunito font-normal leading-[200%] '>Nam libero tempore, cum soluta nobis est eligendi optio cumque </p>
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

export default Hero