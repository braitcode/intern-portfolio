import React from 'react'
import image1 from '../assets/images/About Me.png'

const About = () => {
  return (
    <div>
        <div className="overflow-hidden bg-[#F5FCFF] w-full xl:h-[100vh] xl:flex xl:flex-row-reverse justify-center flex flex-col gap-16 items-center xl:gap-[32px] p-14">
              <div className="container xl:w-[50%]">

                  <div className="flex flex-col gap-[21.33px]">
                      <h3 className='font-[Roboto] font-semibold text-[21.33px]'>About</h3>
                      <h1 className='text-[55px] font-bold leading-[5rem] w-[700px]'>About Me</h1>
                      <p className='font-[Roboto] xl:text-[26px] md:text-[26px] xl:w-[600px] text-[#1C1E53] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque. <br /><br />Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.</p>
                     
                  </div>
              </div>
              <div className="xl:w-[60%]">
                  <img src={image1} alt="" className=' xl:h-[729.74px] md:h-[500px]' />
            </div>
        </div>
    </div>
  )
}

export default About