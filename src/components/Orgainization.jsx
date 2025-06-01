import React from 'react'
import Container from './Container'
import wapkiu from "../assets/wapkiu.png"
import creone from "../assets/creone.png"
import rainfall from "../assets/rainfall.png"
import ulabs from "../assets/ulabs.png"
import spiders from "../assets/spiders.png"
import widegde from "../assets/widegde.png"

const Orgainization = () => {
    return (
        <div className='lg:py-[100px] py-[60px]'>
            <Container>
                <div className="lg:mx-0 mx-[30px]">

                <div className="">
                    <h3 className='lg:text-[48px] text-[36px] font-Poppins font-semibold text-[#29313D] text-center'>Trusted by top global companies<br className='lg:block hidden' /> And orginizations</h3>
                </div>
                <div className=" mt-[60px]">

                    <div className="grid lg:grid-cols-6 grid-cols-2 lg:grid-rows-1 grid-rows-3 gap-4">
                        <div>
                            <div className="lg:h-[130px] h-[80px] lg:w-[210px] bg-[#FDF9F8] flex items-center justify-center">
                                <img src={wapkiu} className="max-w-full max-h-full object-contain" alt="" />
                            </div>
                        </div>
                        <div >
                            <div className="lg:h-[130px] h-[80px] lg:w-[210px] bg-[#FDF9F8] flex items-center justify-center">
                                <img src={creone} className="max-w-full max-h-full object-contain" alt="" />
                            </div>
                        </div>
                        <div >
                            <div className="lg:h-[130px] h-[80px] lg:w-[210px] bg-[#FDF9F8] flex items-center justify-center">
                                <img src={rainfall} className="max-w-full max-h-full object-contain" alt="" />
                            </div>
                        </div>
                        <div >
                            <div className="lg:h-[130px] h-[80px] lg:w-[210px] bg-[#FDF9F8] flex items-center justify-center">
                                <img src={ulabs} className="max-w-full max-h-full object-contain" alt="" />
                            </div>
                        </div>
                        <div >
                            <div className="lg:h-[130px] h-[80px] lg:w-[210px] bg-[#FDF9F8] flex items-center justify-center">
                                <img src={spiders} className="max-w-full max-h-full object-contain" alt="" />
                            </div>
                        </div>
                        <div >
                            <div className="lg:h-[130px] h-[80px] lg:w-[210px] bg-[#FDF9F8] flex items-center justify-center">
                                <img src={widegde} className="max-w-full max-h-full object-contain" alt="" />
                            </div>
                        </div>
                    </div>

                </div>
                </div>

            </Container>
        </div>
    )
}

export default Orgainization