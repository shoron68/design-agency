import React from 'react'
import Container from './Container'
import digital from "../assets/digital.jpg"
import frame1 from "../assets/Frame_22.png"
import frame2 from "../assets/Frame_21.png"

const DigitalExperience = () => {
    return (
        <div className='bg-[#FAFAFA] mt-[-27px] relative '>
            
            <Container className="relative">
                <div  className="lg:pt-[280px] pt-[60px]">
                    <h5 data-aos='fade-up' data-aos-duration='200' className='text-[20px] font-Poppins font-medium text-[#FF5538] leading-[140%] lg:text-start text-center'>Digital Experience</h5>
                    <h3 data-aos='fade-up' data-aos-duration='350' className='lg:text-[48px] text-[36px] font-Poppins font-semibold text-[#29313D] leading-[140%] mt-[10px] lg:text-start text-center'>Connect People In<br /> Digital Life</h3>
                </div>
                <div data-aos='zoom-in' data-aos-duration='200' className="absolute  top-[370px] left-[500px] lg:block hidden">
                    <div class="relative w-32 h-32 flex items-center justify-center ">
                        <div class="w-28 h-28 rounded-full border-2 border-[#FFABBA]"></div>
                        <div class="absolute w-5 h-5 bg-[#FFABBA] rounded-full orbit"></div>
                    </div>
                </div>
            </Container>

    <div className=" w-full   ">
      <div className=" lg:mx-auto lg:flex items-center  justify-between">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <div data-aos='zoom-in' data-aos-duration='200' className="w-full h-[300px] md:h-[520px] bg-[#C4C4C4]">
            <img src={digital} className='w-full h-full object-cover ' alt="" />
          </div>
        </div>
        <div data-aos='zoom-in' data-aos-duration='200' className="w-full bg-[#FCF5F3] md:w-1/2 ">
          <div className="lg:py-[100px] py-[50px] lg:ml-[100px] lg:mx-0 mx-[30px]">
            <h2 className="lg:text-[36px] text-[28px] font-Poppins font-semibold lg:text-start text-center text-[#29313D] leading-[140%]">
            More Than Just An Ad Agency, <br className='lg:block hidden' />
            We Harness The Tools Of <br className='lg:block hidden' />
            Traditional And Digital.
          </h2>
          <p className="mt-[20px] font-Nunito lg:text-[18px] text-[16px] text-[#29313D] leading-[200%] font-normal lg:text-start text-center ">
            With over 25 years of experience, we have crafted <br className='lg:block hidden' /> thousands of strategic discovery processes 
            that enable us <br className='lg:block hidden' /> to peel back the layers which help us understand,<br className='lg:block hidden' /> connect, represent, and 
            dominate your market.
          </p>
          <div className="lg:justify-start justify-center flex">
            <button className=" lh:mt-[48px] mt-[30px] bg-[#FF5538] text-white lg:py-[14px] lg:px-[28px] py-[10px] px-[20px] rounded-[18px] cursor-pointer font-Nunito hover:scale-95 font-semibold hover:bg-[#e14e32] transition duration-200">
            More About Us
          </button>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute bottom-[-500px] -z-10 left-0">
                <img src={frame1} alt="" />
            </div>
    <div className="absolute bottom-[-220px] lg:z-0 -z-10 right-0">
                <img src={frame2} alt="" />
            </div>

        </div>
    )
}

export default DigitalExperience