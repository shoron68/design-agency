import React, { useEffect } from 'react'
import Container from './Container'
import ball from "../assets/ball.png"
import grow from "../assets/grow.png"
import marketing from "../assets/marketing.png"
import seo from "../assets/seo.png"
import AOS from 'aos'
import 'aos/dist/aos.css';

const Hero = () => {
     useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      once: false,
    });

    setTimeout(() => {
      AOS.refreshHard();
    }, 100);
  }, []);
    return (
        <div className='relative ' >
            <div className="absolute lg:block hidden bottom-[-90px] left-0 z-10">
                <img src={ball} alt="" />
            </div>
            <div className="lg:mx-0 mx-[30px]">

                <Container className='lg"pt-[197px] pt-[60px] lg:pb-[297px] pb-[50px] '>
                    <div className="lg:w-[771px] mx-auto ">
                        <h1 data-aos='fade-up' data-aos-duration='300' className='lg:text-[64px] text-[35px] font-Poppins font-bold text-[#29313D] text-center leading-[130%] '>We are a full range design agency</h1>
                        <p data-aos='fade-up' data-aos-duration='400' className='lg:text-[18px] text-[16px] font-Nunito font-normal text-[#29313D] text-center lg:w-[547px] mx-auto leading-[200%] mt-[24px]'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.</p>
                    </div>
                    <div data-aos='fade-up' data-aos-duration='500' className="flex items-center mt-[44px] gap-x-[24px] justify-center">
                        <a href="#" className='text-[18px] leading-[200%] font-Nunito text-[#ffffff] lg:py-[14px] py-[8px] px-[20px] lg:px-[28px] rounded-[18px] bg-[#FF5538] hover:bg-[#ff5638e8] hover:scale-95 duration-300'>Contact Us</a>
                        <a href="#" className='text-[18px] font-Nunito leading-[200%] text-[#FF5538] lg:py-[14px] py-[8px] px-[20px] lg:px-[28px] rounded-[18px] border-[#FF5538] border-[1px] hover:bg-[#ff5638] hover:scale-95 hover:text-[#fff] duration-300'>Showcase</a>

                    </div>

                </Container>
            </div>
            <Container>
                <div className=" lg:absolute bottom-[-140px] left-[230px] z-10 lg:mx-0 mx-[30px] lg:pb-0 pb-[100px]">

                    <div className="grid lg:grid-cols-3 grid-cols-1 lg:grid-rows-1 grid-rows-3 gap-x-[50px]">
                        <div >
                            <div data-aos='zoom-in' data-aos-duration='200' className="lg:w-[450px] bg-[#fff] shadow-xl lg:shadow-none">
                                <div className="lg:ml-[30px] pt-[40px] pb-[40px]">
                                    <div className='lg:justify-staer flex justify-center'>
                                        <img src={grow} alt="" />
                                    </div>

                                    <div className=" mt-[34px]">
                                        <h4 className='text-[#29313D] lg:text-[28px] text-[24px] font-Poppins leading-[160%] font-semibold lg:text-start text-center'>Grow your business</h4>
                                        <p className='mt-[16px] text-[#29313D] lg:text-[18px] text-[16px] font-Nunito font-normal leading-[200%] lg:text-start text-center '>Nam libero tempore, cum soluta nobis est eligendi optio cumque </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div data-aos='zoom-in' data-aos-duration='300' className="lg:w-[450px] bg-[#fff] shadow-xl lg:shadow-none mt-[20px] lg:mt-0">
                                <div className="lg:ml-[30px] pt-[40px] pb-[40px]">
                                    <div className='lg:justify-staer flex justify-center'>
                                        <img src={marketing} alt="" />
                                    </div>


                                    <div className=" mt-[34px] ">
                                        <h4 className='text-[#29313D] lg:text-[28px] text-[24px] font-Poppins leading-[160%] font-semibold lg:text-start text-center'>Digital marketing</h4>
                                        <p className='mt-[16px] text-[#29313D] lg:text-[18px] text-[16px] font-Nunito font-normal leading-[200%] lg:text-start text-center'>Nam libero tempore, cum soluta nobis est eligendi optio cumque </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div data-aos='zoom-in' data-aos-duration='400' className="lg:w-[450px] bg-[#fff] shadow-xl lg:shadow-none mt-[20px] lg:mt-0">
                                <div className="lg:ml-[30px] pt-[40px] pb-[40px]">
                                    <div className='lg:justify-staer flex justify-center'>
                                        <img src={seo} alt="" />
                                    </div>


                                    <div className=" mt-[34px]">
                                        <h4 className='text-[#29313D] lg:text-[28px] text-[24px] font-Poppins leading-[160%] font-semibold lg:text-start text-center'>Search engine optimization</h4>
                                        <p className='mt-[16px] text-[#29313D] lg:text-[18px] text-[16px] font-Nunito font-normal leading-[200%] lg:text-start text-center '>Nam libero tempore, cum soluta nobis est eligendi optio cumque </p>
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