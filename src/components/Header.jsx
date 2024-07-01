import React from 'react'
import image1 from '../assets/images/Group 11 1.png'

const Header = () => {
  return (
    <div>
        <div className="overflow-hidden bg-[#F5FCFF] w-full h-[996.41px] xl:flex xl:justify-center xl:items-center xl:gap-[32px] xl:flex-row p-14 flex flex-col gap-16 ">
              <div className="container xl:w-[50%]">

                  <div className="flex flex-col gap-[21.33px]">
                      <h3 className='font-[Roboto] font-semibold text-[21.33px]'>Hey, my name is John</h3>
                      <h1 className='xl:text-[55px] text-[30px] font-bold xl:leading-[5rem] xl:w-[700px]'>I develop dynamic and User-Centered Web Application</h1>
                      <p className='font-[Roboto] text-[26px] xl:w-[600px] text-[#1C1E53] font-normal'>My expertise spans both front-end and back-end development, enabling me to build comprehensive solutions that meet diverse client needs.</p>
                      <button className='bg-[#5E3BEE] w-[120px] h-[40px] rounded-md text-white font-[Roboto]'>Get In Touch</button>
                  </div>
              </div>
              <div className="xl:w-[60%]">
                  <img src={image1} alt="" className=' xl:h-[729.74px]' />
            </div>
        </div>
    </div>
  )
}

export default Header