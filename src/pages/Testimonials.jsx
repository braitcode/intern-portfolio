import React from 'react'
import stars from '../assets/icons/Stars.png'
import dianne from '../assets/images/Avatar dianne.png'
import kristin from '../assets/images/kristin avatar.png'
import kathryn from '../assets/images/kathryn avatar.png'


const Testimonials = () => {
  return (
    <div>
        <div className="overflow-hidden bg-[#F5FCFF] w-full xl:h-[902.18px] p-8 xl:flex xl:flex-col xl:justify-center xl:items-center flex flex-col gap-10 xl:gap-[106.67px]">
            <div className="w-full h-[130.33px] gap-[21.33px] xl:flex xl:flex-row xl:justify-between xl:items-center md:flex md:flex-row md:justify-between md:items-center flex flex-col">
                  <div className="">
                      <p className='font-[Roboto] font-semibold text-[21.33px]'>Clients Feedback</p>
                      <h1 className='font-[Roboto] xl:text-[4rem] text-[2rem] font-bold'>Customer Testimonials</h1>
                  </div>
            </div>
            
            <div className=" xl:flex xl:flex-row xl:justify-center xl:items-center flex flex-col gap-8 w-full xl:gap-10">
                <div className="xl:w-[400px] xl:h-[366.26px] p-11 flex flex-col gap-10 border border-[#006B6A] rounded-md">
                    <div className="">
                    <img src={stars} alt="" className='w-[154px.67px] h-[25.19px]' />
                    </div>
                    <p className='xl:w-[280.33px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                    <div className="flex items-center gap-6">
                        <img src={dianne} alt="" className='w-[74.67px] h-[74.67px]' />
                        <div className="">
                            <h3 className='font-[Roboto] font-semibold xl:text-[21.33px]'>Dianne Russel</h3>
                            <p className='font-[Roboto] text-[21.33px]'>Starbucks</p>
                        </div>
                    </div>
                </div>
                <div className="xl:w-[400px] h-[366.26px] p-11 flex flex-col gap-10 border border-[#006B6A] rounded-md">
                    <div className="">
                    <img src={stars} alt="" className='w-[154px.67px] h-[25.19px]' />
                    </div>
                    <p className='xl:w-[280.33px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                    <div className="flex items-center gap-6">
                        <img src={kristin} alt="" className='w-[74.67px] h-[74.67px]' />
                        <div className="">
                            <h3 className='font-[Roboto] font-semibold xl:text-[21.33px]'>Kriston Watson</h3>
                            <p className='font-[Roboto] text-[21.33px]'>Louis Vuiton</p>
                        </div>
                    </div>
                </div>
                <div className="xl:w-[400px] h-[366.26px] p-11 flex flex-col gap-10 border border-[#006B6A] rounded-md">
                    <div className="">
                    <img src={stars} alt="" className='w-[154px.67px] h-[25.19px]' />
                    </div>
                    <p className='xl:w-[280.33px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                    <div className="flex items-center gap-6">
                        <img src={kathryn} alt="" className='w-[74.67px] h-[74.67px]' />
                        <div className="">
                            <h3 className='font-[Roboto] font-semibold xl:text-[21.33px]'>Kathryn Murphy</h3>
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