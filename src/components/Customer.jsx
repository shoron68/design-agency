import React from 'react'
import Container from './Container'
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"

const Customer = () => {
    return (
        <div className='bg-[#FDF9F8]'>
            <Container className="py-[120px]">
                <div className="lg:mx-0 mx-[30px]">
                    <div className="lg:flex gap-x-[150px]">
                        <div className="">
                            <h3 data-aos='fade-up' data-aos-duration='200' className='lg:text-[48px] text-[36px] lg:text-start text-center font-Poppins font-semibold text-[#29313D] leading-[140%]'>Our Customer Say</h3>

                            <div className="lg:w-[500px] flex justify-center">
                                <div className="grid lg:grid-cols-4 grid-cols-2 lg:grid-rows-1 grid-rows-2 mt-[60px] lg:ml-0 ml-[40px] ">
                                    <div ><div data-aos='zoom-in' data-aos-duration='200' className="h-[100px] w-[100px] lg:mr-0 mr-[40px]  ">
                                        <img src={image2} className='w-full h-full object-cover rounded-[20px] shadow-xl' alt="" />
                                    </div></div>
                                    <div ><div data-aos='zoom-in' data-aos-duration='300' className="h-[100px] w-[100px] mr-[40px]  ">
                                        <img src={image2} className='w-full h-full object-cover rounded-[20px] shadow-xl' alt="" />
                                    </div></div>
                                    <div ><div data-aos='zoom-in' data-aos-duration='400' className="h-[100px] w-[100px]  lg:mt-0 mt-[20px] ">
                                        <img src={image2} className='w-full h-full object-cover rounded-[20px] shadow-xl' alt="" />
                                    </div></div>
                                    <div ><div data-aos='zoom-in' data-aos-duration='500' className="h-[100px] w-[100px] lg:mt-0 mt-[20px] ">
                                        <img src={image2} className='w-full h-full object-cover rounded-[20px] shadow-xl' alt="" />
                                    </div></div>
                                </div>
                            </div>

                            <p data-aos='fade-up' data-aos-duration='200' className='lg:mt-[60px] mt-[20px] lg:text-[20px] text-[16px] font-Nunito font-normal text-[#29313D] leading-[180%] text-center lg:text-start'>As a leading digital platform in Paris, we look to engage with our clientsbeyond the conventional design and development agency relationship,<br className='lg:block hidden' /> becoming a partner to the people and companies we work with.</p>
                            <h5 data-aos='fade-up' data-aos-duration='300' className='mt-[60px] text-[36px] font-OpenSans font-semibold text-[#29313D] leading-[180%] lg:text-start text-center' >Jonathon</h5>
                        </div>
                        <div className="">
                            <div data-aos='zoom-in' data-aos-duration='400' className="lg:w-[501px] h-[557px] ">
                                <img src={image1} className='w-full h-full object-cover rounded-[30px] shadow-2xl' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Customer