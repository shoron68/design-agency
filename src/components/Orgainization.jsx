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
        <div className='py-[100px]'>
            <Container>
                <div className="">
                    <h3 className='text-[48px] font-Poppins font-semibold text-[#29313D] text-center'>Trusted by top global companies<br /> And orginizations</h3>
                </div>
                <div className=" mt-[60px]">

                    <div className="grid grid-cols-6 grid-rows-1 gap-4">
                        <div>
                            <div className="h-[130px] w-[210px] bg-[#FDF9F8] flex items-center justify-center">
                                <img src={wapkiu} className="max-w-full max-h-full object-contain" alt="" />
                            </div>
                        </div>
                        <div >
                            <div className="h-[130px] w-[210px] bg-[#FDF9F8] flex items-center justify-center">
                                <img src={creone} className="max-w-full max-h-full object-contain" alt="" />
                            </div>
                        </div>
                        <div >
                            <div className="h-[130px] w-[210px] bg-[#FDF9F8] flex items-center justify-center">
                                <img src={rainfall} className="max-w-full max-h-full object-contain" alt="" />
                            </div>
                        </div>
                        <div >
                            <div className="h-[130px] w-[210px] bg-[#FDF9F8] flex items-center justify-center">
                                <img src={ulabs} className="max-w-full max-h-full object-contain" alt="" />
                            </div>
                        </div>
                        <div >
                            <div className="h-[130px] w-[210px] bg-[#FDF9F8] flex items-center justify-center">
                                <img src={spiders} className="max-w-full max-h-full object-contain" alt="" />
                            </div>
                        </div>
                        <div >
                            <div className="h-[130px] w-[210px] bg-[#FDF9F8] flex items-center justify-center">
                                <img src={widegde} className="max-w-full max-h-full object-contain" alt="" />
                            </div>
                        </div>
                    </div>

                </div>

            </Container>
        </div>
    )
}

export default Orgainization