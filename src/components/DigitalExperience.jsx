import React from 'react'
import Container from './Container'
import digital from "../assets/digital.jpg"
import frame1 from "../assets/Frame_22.png"
import frame2 from "../assets/Frame_21.png"

const DigitalExperience = () => {
    return (
        <div className='bg-[#FAFAFA] mt-[-27px] relative '>
            
            <Container className="relative">
                <div className="pt-[280px]">
                    <h5 className='text-[20px] font-Poppins font-medium text-[#FF5538] leading-[140%]'>Digital Experience</h5>
                    <h3 className='text-[48px] font-Poppins font-semibold text-[#29313D] leading-[140%] mt-[10px]'>Connect People In<br /> Digital Life</h3>
                </div>
                <div className="absolute top-[380px] left-[500px]">
                    <div class="relative w-32 h-32 flex items-center justify-center ">
                        <div class="w-28 h-28 rounded-full border-2 border-[#FFABBA]"></div>
                        <div class="absolute w-5 h-5 bg-[#FFABBA] rounded-full orbit"></div>
                    </div>
                </div>
            </Container>

    <div className=" w-full   ">
      <div className=" mx-auto flex items-center  justify-between">
        <div className="w-full md:w-1/2 mb-10 md:mb-0 ml">
          <div className="w-full h-[300px] md:h-[520px] bg-[#C4C4C4]">
            <img src={digital} className='w-full h-full object-cover' alt="" />
          </div>
        </div>
        <div className="w-full bg-[#FCF5F3] md:w-1/2 ">
          <div className="py-[100px] ml-[100px]">
            <h2 className="text-[36px] font-Poppins font-semibold text-[#29313D] leading-[140%]">
            More Than Just An Ad Agency, <br />
            We Harness The Tools Of <br />
            Traditional And Digital.
          </h2>
          <p className="mt-[20px] font-Nunito text-[18px] text-[#29313D] leading-[200%] font-normal ">
            With over 25 years of experience, we have crafted <br /> thousands of strategic discovery processes 
            that enable us <br /> to peel back the layers which help us understand,<br /> connect, represent, and 
            dominate your market.
          </p>
          <button className=" mt-[48px] bg-[#FF5538] text-white py-[14px] px-[28px] rounded-[18px] cursor-pointer font-Nunito hover:scale-95 font-semibold hover:bg-[#e14e32] transition duration-200">
            More About Us
          </button>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute bottom-[-500px] -z-10 left-0">
                <img src={frame1} alt="" />
            </div>
    <div className="absolute bottom-[-220px] right-0">
                <img src={frame2} alt="" />
            </div>

        </div>
    )
}

export default DigitalExperience