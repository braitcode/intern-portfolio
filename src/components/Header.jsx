import React from 'react'
import image1 from '../assets/images/Group 11 1.png'

const Header = () => {
  return (
    <div>
        <div className="bg-[#F5FCFF] w-full h-[996.41px] flex justify-center items-center gap-[32px] p-14">
            <div className="w-[50%] flex flex-col gap-[21.33px]">
                <h3 className='font-[Roboto] font-semibold text-[21.33px]'>Hey, my name is John</h3>
                <h1 className='text-[74.67px] font-bold leading-[5rem] w-[900px]'>I develop dynamic and User-Centered Web Application</h1>
                <p className='font-[Roboto] text-[26px] w-[760px] text-[#1C1E53] font-normal'>My expertise spans both front-end and back-end development, enabling me to build comprehensive solutions that meet diverse client needs.</p>
                <button className='bg-[#5E3BEE] w-[120px] h-[40px] rounded-md text-white font-[Roboto]'>Get In Touch</button>
            </div>
            <div className="">
                <img src={image1} alt="" className='w-[917.33px] h-[729.74px]' />
            </div>
        </div>
    </div>
  )
}

export default Header