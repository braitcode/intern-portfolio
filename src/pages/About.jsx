import React from 'react'
import image1 from '../assets/images/About Me.png'

const About = () => {
  return (
    <div>
        <div className="w-full h-[1262.41px] flex justify-center items-center gap-[114px] p-14">
        <div className="">
                <img src={image1} alt="" className='w-[813.33px] h-[996px]' />
            </div>
            <div className="w-[50%] flex flex-col gap-[32px]">
                <p className='font-[Roboto] font-semibold text-[21.33px]'>About</p>
                <h1 className='text-[4rem] font-bold leading-[5rem] w-[900px]'>About Me</h1>
                <p className='font-[Roboto] text-[1.5rem] w-[760px] text-[#1C1E53]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque. Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.</p>
            </div>
            
        </div>
    </div>
  )
}

export default About