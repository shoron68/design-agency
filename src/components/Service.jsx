import React from 'react'
import Container from './Container'

const Service = () => {
    return (
        <div className='bg-[url(./assets/service.png)] mt-[100px] bg-no-repeat'>
            <Container className='lg:pt-[140px] pt-[50px] lg:pb-[120px] relative z-20'>
                <div className="lg:mx-0 mx-[30px]">
                    <div className="absolute lg:top-[260px] top-[200px] left-[100px] lg:left-[-140px] -z-10">
                        <div class="relative w-[200px] h-[200px] flex items-center justify-center ">
                            <div class="w-[200px] h-[200px] rounded-full border-2 border-[#ffabbac5]"></div>
                            <div class="absolute w-5 h-5 bg-[#ffabbac5] rounded-full orbit"></div>
                        </div>
                    </div>
                    <div className="lg:flex gap-x-[100px]">
                        <div className="">
                            <div className="flex gap-x-[30px] ">
                                <div data-aos='zoom-in' data-aos-duration='200' className="lg:py-[74px] py-[37px] px-[30px] lg:px-[60px] bg-[#fff]">
                                    <h3 className='lg:text-[40px] text-[30px] font-Poppins font-semibold text-[#29313D] leading-[140%] text-center'>19+</h3>
                                    <p className='lg:text-[18px] text-[14px] font-Nunito font-normal text-[#29313D] leading-[100%] lg:text-start text-center'>Total top service</p>
                                </div>

                                <div data-aos='zoom-in' data-aos-duration='300' className="lg:py-[74px] py-[37px] px-[30px] lg:px-[60px] bg-[#fff]">
                                    <h3 className='lg:text-[40px] text-[30px] font-Poppins font-semibold text-[#29313D] leading-[140%] text-center'>27+</h3>
                                    <p className='lg:text-[18px] text-[14px] font-Nunito font-normal text-[#29313D] leading-[100%] lg:text-start text-center'>Total top service</p>
                                </div>
                            </div>

                            <div className="flex gap-x-[30px] mt-[30px] ">
                                <div data-aos='zoom-in' data-aos-duration='400'  className="lg:py-[74px] py-[37px] px-[30px] lg:px-[60px] bg-[#fff]">
                                    <h3 className='lg:text-[40px] text-[30px] font-Poppins font-semibold text-[#29313D] leading-[140%] text-center'>98%</h3>
                                    <p className='lg:text-[18px] text-[14px] font-Nunito font-normal text-[#29313D] leading-[100%] lg:text-start text-center'>Total top service</p>
                                </div>
                                <div data-aos='zoom-in' data-aos-duration='500' className="lg:py-[74px] py-[37px] px-[30px] lg:px-[75px] bg-[#fff]">
                                    <h3 className='lg:text-[40px] text-[30px] font-Poppins font-semibold text-[#29313D] leading-[140%] text-center'>1,458</h3>
                                    <p className='lg:text-[18px] text-[14px] font-Nunito font-normal text-[#29313D] leading-[100%] lg:text-start text-center'>Usual users</p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <h2 data-aos='fade-up' data-aos-duration='200' className='lg:text-start text-center  text-[36px] lg:text-[48px] font-Poppins font-semibold text-[#29313D]  leading-[140%]'>The hundred of <br className='lg:block hidden' /> completed works still <br className='lg:block hidden' /> counting</h2>
                            <p data-aos='fade-up' data-aos-duration='300' className='lg:text-[18px] text-[16px] lg:text-start text-center font-Nunito font mt-[20px] lg:w-[550px]'>Through strategy, design, and planning we build brand identities that connect with your Nesi. We then fine-tune a marketing plan that allows us to laser focus and target your audience through the right channels.</p>
                            <div data-aos='fade-up' data-aos-duration='300' className="mt-[40px] flex justify-center lg:justify-start">
                                <a href="#" className='text-[18px] leading-[200%] font-Nunito text-[#ffffff] lg:py-[14px] lg:px-[28px] py-[9px] px-[20px] rounded-[18px] bg-[#FF5538] hover:bg-[#ff5638e8] hover:scale-95 duration-300'>More about us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Service