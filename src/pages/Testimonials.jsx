import React from 'react'
import stars from '../assets/icons/Stars.png'
import dianne from '../assets/images/Avatar dianne.png'
import kristin from '../assets/images/kristin avatar.png'
import kathryn from '../assets/images/kathryn avatar.png'


const Testimonials = () => {
  return (
    <div>
        <div className="bg-[#F5FCFF] w-full h-[902.18px] p-8 flex flex-col justify-center items-center gap-[106.67px]">
            <div className="w-full h-[130.33px] gap-[21.33px] flex justify-between items-center">
                  <div className="">
                      <p className='font-[Roboto] font-semibold text-[21.33px]'>Clients Feedback</p>
                      <h1 className='font-[Roboto] text-[4rem] font-bold'>Customer Testimonials</h1>
                  </div>
            </div>
            <div className="flex justify-center items-center w-full gap-10">
                <div className="w-[512px] h-[366.26px] p-11 flex flex-col gap-10 border border-[#006B6A] rounded-md">
                    <div className="">
                    <img src={stars} alt="" className='w-[154px.67px] h-[25.19px]' />
                    </div>
                    <p className='w-[450.33px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                    <div className="flex items-center gap-6">
                        <img src={dianne} alt="" className='w-[74.67px] h-[74.67px]' />
                        <div className="">
                            <h3 className='font-[Roboto] font-semibold text-[21.33px]'>Dianne Russel</h3>
                            <p className='font-[Roboto] text-[21.33px]'>Starbucks</p>
                        </div>
                    </div>
                </div>
                <div className="w-[512px] h-[366.26px] p-11 flex flex-col gap-10 border border-[#006B6A] rounded-md">
                    <div className="">
                    <img src={stars} alt="" className='w-[154px.67px] h-[25.19px]' />
                    </div>
                    <p className='w-[450.33px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                    <div className="flex items-center gap-6">
                        <img src={kristin} alt="" className='w-[74.67px] h-[74.67px]' />
                        <div className="">
                            <h3 className='font-[Roboto] font-semibold text-[21.33px]'>Kriston Watson</h3>
                            <p className='font-[Roboto] text-[21.33px]'>Louis Vuiton</p>
                        </div>
                    </div>
                </div>
                <div className="w-[512px] h-[366.26px] p-11 flex flex-col gap-10 border border-[#006B6A] rounded-md">
                    <div className="">
                    <img src={stars} alt="" className='w-[154px.67px] h-[25.19px]' />
                    </div>
                    <p className='w-[450.33px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                    <div className="flex items-center gap-6">
                        <img src={kathryn} alt="" className='w-[74.67px] h-[74.67px]' />
                        <div className="">
                            <h3 className='font-[Roboto] font-semibold text-[21.33px]'>Kathryn Murphy</h3>
                            <p className='font-[Roboto] text-[21.33px]'>Mc Donald's</p>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default Testimonials