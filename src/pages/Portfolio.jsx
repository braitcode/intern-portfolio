import React from 'react'
import img1 from '../assets/images/Image.png'
import img2 from '../assets/icons/Vector.png'
import img3 from '../assets/icons/rightup arrow.png'
import img4 from '../assets/icons/rightarrow green.png'
import img5 from '../assets/images/appdash.png'
import img6 from '../assets/images/easyrent.png'

const Portfolio = () => {
  return (
    <div>
        <div className=" w-full h-[1190px] p-8 flex flex-col justify-center gap-[106px]">
            <div className="w-full h-[130.33px] gap-[21.33px] flex justify-between items-center">
                  <div className="">
                      <p className='font-[Roboto] font-semibold text-[21.33px]'>Recent Projects</p>
                      <h1 className='font-[Roboto] text-[4rem] font-bold'>My Portfolio</h1>
                  </div>
                  <div className="flex">
                      <button className='bg-[#7E69D3] flex justify-center gap-1 items-center w-[120px] h-[40px] rounded-md text-white font-[Roboto]'>
                        <img src={img2} alt="" className='w-[21.78px] flex items-center h-[21.1px]' />
                        Get In Touch
                        </button>
                  </div>
            </div>
            <div className="flex justify-center w-full gap-20 h-[654px]">
                <div className="w-[554.67px] h-[654.33px] shadow-lg rounded-md">
                    <img src={img1} alt="" className='w-[554.67px] h-[400px]' />
                    <div className="w-[341.33px] h-[194.33px] p-6">
                        <h3 className='text-[32px] font-bold text-[#282938] font-[Roboto]'>Ahuse</h3>
                        <p className='font-[Roboto] w-[420px] font-normal leading-[1.5rem] my-4 text-[21.33px] text-[#1C1E53]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        <button className='border-b-4 border-[#5E3BEE] flex items-center text-[18px] gap-4 font-semibold'>
                            View Website
                            <img src={img3} alt="" className='w-4 h-4 flex justify-center items-center' />
                        </button>
                    </div>
                </div>
                <div className="w-[554.67px] h-[654.33px] shadow-lg rounded-md">
                    <img src={img5} alt="" className='w-[554.67px] h-[400px]' />
                    <div className="w-[341.33px] h-[194.33px] p-6">
                        <h3 className='text-[32px] font-bold text-[#282938] font-[Roboto]'>App Dashboard</h3>
                        <p className='font-[Roboto] w-[420px] font-normal leading-[1.5rem] my-4 text-[21.33px] text-[#1C1E53]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        <button className='border-b-4 border-[#5E3BEE] flex items-center text-[18px] gap-4 font-semibold'>
                            View Project
                            <img src={img4} alt="" className='w-4 h-4 flex justify-center items-center text-[#006B6A]' />
                        </button>
                    </div>
                </div>
                <div className="w-[554.67px] h-[654.33px] shadow-lg rounded-md">
                    <img src={img6} alt="" className='w-[554.67px] h-[400px]' />
                    <div className="w-[341.33px] h-[194.33px] p-6">
                        <h3 className='text-[32px] font-bold text-[#282938] font-[Roboto]'>Easy Rent</h3>
                        <p className='font-[Roboto] w-[420px] font-normal leading-[1.5rem] my-4 text-[21.33px] text-[#1C1E53]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        <button className='border-b-4 border-[#5E3BEE] flex items-center text-[18px] gap-4 font-semibold'>
                            View Website
                            <img src={img4} alt="" className='w-4 h-4 flex justify-center items-center' />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Portfolio