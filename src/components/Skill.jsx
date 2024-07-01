import React from 'react'
import img1 from '../assets/icons/Strategy & Direction.png'
import img2 from '../assets/icons/Branding & Logo.png'
import img3 from '../assets/icons/UI & UX Design.png'
import img4 from '../assets/icons/Webflow Development.png'

const Skill = () => {
  return (
    <div>
        <div className="overflow-hidden xl:w-full xl:h-[100vh]  p-8 xl:flex xl:flex-col xl:justify-center gap-[106px]">
              <div className="container xl:flex xl:flex-col md:flex md:flex-col md:justify-center  gap-24 xl:w-[100%]">

                  <div className="xl:w-[1024px] md:w-full xl:h-[130.33px] xl:gap-[21.33px] md:flex md:flex-col md:justify-center md:items-center">
                      <p className='font-[Roboto] font-semibold xl:text-[21.33px]'>My Skills</p>
                      <h1 className='font-[Roboto] xl:text-[4rem] text-[3rem] font-bold'>My Expertise</h1>
                  </div>
                  <div className="xl:flex xl:flex-row xl:justify-center xl:gap-10 xl:w-[100%] md:w-full md:flex md:justify-center md:items-center flex flex-col gap-8">
                    
                      <div className="bg-[#F5FCFF] w-[340.33px] md:w-full h-[3650x] rounded-md p-2 border-b-4 border-[#5E3BEE]">
                          <img src={img1} alt="" className='w-[79.33px] h-[79.33px] mt-4' />
                          <div className="w-[341.33px] h-[194.33px] md:w-full">
                              <h3 className='text-[28px] font-bold text-[#282938] my-4 font-[Roboto]'>Responsive Design</h3>
                              <p className='font-[Roboto] font-normal leading-[1.5rem] md:leading-[2.5rem] md:w-[90%] xl:w-[90%] xl:text-[18px] md:text-[40px]  text-[#1C1E53]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                          </div>
                      </div>
                      <div className="bg-[#F5FCFF] w-[340.33px] md:w-full h-[350px] rounded-md p-2">
                          <img src={img2} alt="" className='w-[79.33px] h-[79.33px] mt-4' />
                          <div className="w-[341.33px] h-[194.33px] md:w-full">
                              <h3 className='text-[28px] font-bold text-[#282938] my-4 font-[Roboto]'>Front-End Frameworks</h3>
                              <p className='font-[Roboto] font-normal leading-[1.5rem] md:leading-[2.5rem] md:w-[90%] xl:w-[90%] xl:text-[18px] md:text-[40px]  text-[#1C1E53]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                          </div>
                      </div>
                      <div className="bg-[#F5FCFF] w-[340.33px] md:w-full h-[350px] rounded-md p-2">
                          <img src={img3} alt="" className='w-[79.33px] h-[79.33px] mt-4' />
                          <div className="w-[341.33px] h-[194.33px] md:w-full">
                              <h3 className='text-[28px] font-bold text-[#282938] my-4 font-[Roboto]'>Testing and Debugging</h3>
                              <p className='font-[Roboto] font-normal leading-[1.5rem] md:leading-[2.5rem] md:w-[90%] xl:w-[90%] xl:text-[18px] md:text-[40px]  text-[#1C1E53]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                          </div>
                      </div>
                      <div className="bg-[#F5FCFF] w-[340.33px] md:w-full h-[350px] rounded-md p-2">
                          <img src={img4} alt="" className='w-[79.33px] h-[79.33px] mt-4' />
                          <div className="w-[341.33px] h-[194.33px] md:w-full">
                              <h3 className='text-[28px] font-bold text-[#282938] my-4 font-[Roboto]'>Cloud Services</h3>
                              <p className='font-[Roboto] font-normal leading-[1.5rem] md:leading-[2.5rem] md:w-[90%] xl:w-[90%] xl:text-[18px] md:text-[40px]  text-[#1C1E53]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                          </div>
                      </div>

                  </div>
              </div>

        </div>
    </div>
  )
}

export default Skill