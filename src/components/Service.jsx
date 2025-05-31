import React from 'react'
import Container from './Container'

const Service = () => {
    return (
        <div className='bg-[url(./assets/service.png)] mt-[100px]'>
            <Container className='pt-[140px] pb-[120px] relative z-20'>
                 <div className="absolute top-[260px] left-[-140px] -z-10">
                    <div class="relative w-[200px] h-[200px] flex items-center justify-center ">
                        <div class="w-[200px] h-[200px] rounded-full border-2 border-[#ffabbac5]"></div>
                        <div class="absolute w-5 h-5 bg-[#ffabbac5] rounded-full orbit"></div>
                    </div>
                </div>
                <div className="flex gap-x-[100px]">
                    <div className="">
                        <div className="flex gap-x-[30px] ">
                            <div className="py-[74px] px-[60px] bg-[#fff]">
                                <h3 className='text-[40px] font-Poppins font-semibold text-[#29313D] leading-[140%] text-center'>19+</h3>
                                <p className='text-[18px] font-Nunito font-normal text-[#29313D] leading-[100%]'>Total top service</p>
                            </div>

                            <div className="py-[74px] px-[60px] bg-[#fff]">
                                <h3 className='text-[40px] font-Poppins font-semibold text-[#29313D] leading-[140%] text-center'>27+</h3>
                                <p className='text-[18px] font-Nunito font-normal text-[#29313D] leading-[100%]'>Total top service</p>
                            </div>
                        </div>

                        <div className="flex gap-x-[30px] mt-[30px]">
                            <div className="py-[74px] px-[60px] bg-[#fff]">
                                <h3 className='text-[40px] font-Poppins font-semibold text-[#29313D] leading-[140%] text-center'>98%</h3>
                                <p className='text-[18px] font-Nunito font-normal text-[#29313D] leading-[100%]'>Total top service</p>
                            </div>

                            <div className="py-[74px] px-[76px] bg-[#fff]">
                                <h3 className='text-[40px] font-Poppins font-semibold text-[#29313D] leading-[140%] text-center'>1,458</h3>
                                <p className='text-[18px] font-Nunito font-normal text-[#29313D] leading-[100%]'>Usual users</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h2 className='text-[48px] font-Poppins font-semibold text-[#29313D]  leading-[140%]'>The hundred of <br/> completed works still <br/> counting</h2>
                        <p className='text-[18px] font-Nunito font mt-[20px] w-[550px]'>Through strategy, design, and planning we build brand identities that connect with your Nesi. We then fine-tune a marketing plan that allows us to laser focus and target your audience through the right channels.</p>
                        <div className="mt-[40px]">
                            <a href="#" className='text-[18px] leading-[200%] font-Nunito text-[#ffffff] py-[14px] px-[28px] rounded-[18px] bg-[#FF5538] hover:bg-[#ff5638e8] hover:scale-95 duration-300'>More about us</a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Service