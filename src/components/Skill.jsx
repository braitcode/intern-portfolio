import React from 'react'
import img1 from '../assets/icons/Strategy & Direction.png'
import img2 from '../assets/icons/Branding & Logo.png'
import img3 from '../assets/icons/UI & UX Design.png'
import img4 from '../assets/icons/Webflow Development.png'

const Skill = () => {
  return (
    <div>
        <div className=" xl:w-full h-[906.33px] p-8 flex flex-col justify-center gap-[106px]">
            <div className="flex flex-col gap-24 xl:w-[100%]">

            <div className="w-[1024px] h-[130.33px] gap-[21.33px]">
                <p className='font-[Roboto] font-semibold text-[21.33px]'>My Skills</p>
                <h1 className='font-[Roboto] text-[4rem] font-bold'>My Expertise</h1>
            </div>
            <div className="flex justify-center gap-10 w-full">
                <div className="bg-[#F5FCFF] w-[370.33px] h-[369.33px] rounded-md p-4 border-b-4 border-[#5E3BEE]">
                    <img src={img1} alt="" className='w-[79.33px] h-[79.33px] mt-4' />
                    <div className="w-[341.33px] h-[194.33px]">
                        <h3 className='text-[32px] font-bold text-[#282938] my-4 font-[Roboto]'>Responsive Design</h3>
                        <p className='font-[Roboto] font-normal leading-[1.5rem] text-[21.33px] text-[#1C1E53]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum, nunc vel consectetur posuere, justo enim laoreet justo, non volutpat velit felis vel ipsum.</p>
                    </div>
                </div>
                <div className="bg-[#F5FCFF] w-[370.33px] h-[369.33px] rounded-md p-4">
                    <img src={img2} alt="" className='w-[79.33px] h-[79.33px] mt-4' />
                    <div className="w-[341.33px] h-[194.33px]">
                        <h3 className='text-[32px] font-bold text-[#282938] my-4 font-[Roboto]'>Front-End Frameworks</h3>
                        <p className='font-[Roboto] font-normal leading-[1.5rem] text-[21.33px] text-[#1C1E53]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum, nunc vel consectetur posuere, justo enim laoreet justo, non volutpat velit felis vel ipsum.</p>
                    </div>
                </div>
                <div className="bg-[#F5FCFF] w-[370.33px] h-[369.33px] rounded-md p-4">
                    <img src={img3} alt="" className='w-[79.33px] h-[79.33px] mt-4' />
                    <div className="w-[341.33px] h-[194.33px]">
                        <h3 className='text-[32px] font-bold text-[#282938] my-4 font-[Roboto]'>Testing and Debugging</h3>
                        <p className='font-[Roboto] font-normal leading-[1.5rem] text-[21.33px] text-[#1C1E53]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum, nunc vel consectetur posuere, justo enim laoreet justo, non volutpat velit felis vel ipsum.</p>
                    </div>
                </div>
                <div className="bg-[#F5FCFF] w-[370.33px] h-[369.33px] rounded-md p-4">
                    <img src={img4} alt="" className='w-[79.33px] h-[79.33px] mt-4' />
                    <div className="w-[341.33px] h-[194.33px]">
                        <h3 className='text-[32px] font-bold text-[#282938] my-4 font-[Roboto]'>Cloud Services</h3>
                        <p className='font-[Roboto] font-normal leading-[1.5rem] text-[21.33px] text-[#1C1E53]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum, nunc vel consectetur posuere, justo enim laoreet justo, non volutpat velit felis vel ipsum.</p>
                    </div>
                </div>
                
            </div>
            </div>

        </div>
    </div>
  )
}

export default Skill