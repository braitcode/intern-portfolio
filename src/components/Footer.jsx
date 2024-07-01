import React from 'react'
import logo from '../assets/icons/image 1.png'
import facebook from '../assets/icons/Facebook.png'
import instagram from '../assets/icons/Instagram.png'
import twitter from '../assets/icons/Twitter.png'
import linkedin from '../assets/icons/LinkedIn.png'
import divider from '../assets/icons/Divider.png'
import love from '../assets/icons/love icon.png'

const Footer = () => {
  return (
    <div>
        <div className="w-full bg-[#F5FCFF] p-12 md:p-8 xl:flex xl:flex-col xl:gap-10 xl:justify-center md:flex md:flex-col ">
              <div className="xl:flex xl:flex-col xl:gap-28 flex flex-col gap-10">
                  <div className="xl:flex xl:flex-row xl:justify-between md:gap-4 md:flex md:flex-row flex flex-col gap-4">
                      <div className="flex">
                          <img src={logo} alt="" className='w-[44px] h-[40px]' />
                          <p className='font-[Roboto] text-[25.21px] font-semibold'>JohnDev,</p>
                      </div>
                      <div className="">
                          <ul className='xl:flex md:flex md:gap-4 gap-11 font-[Roboto] text-[21.33px]'>
                              <li>Home</li>
                              <li>Portfolio</li>
                              <li>About Me</li>
                              <li>Contact</li>
                              <li>Testimonials</li>
                          </ul>
                      </div>
                      <div className="flex">
                          <img src={facebook} alt="" className='w-8 h-8' />
                          <img src={instagram} alt="" className='w-8 h-8' />
                          <img src={twitter} alt="" className='w-8 h-8' />
                          <img src={linkedin} alt="" className='w-8 h-8' />
                      </div>
                  </div>
                  <div className="">
                      <img src={divider} alt="" />
                  </div>
            </div>
            <div className="xl:flex xl:flex-row xl:justify-between md:flex md:flex-row md:justify-between flex flex-col gap-4">
                <p className='font-[Roboto] text-[18px]'>Made with 💖 by braitcode</p>
                <div className=""> 
                    <ul className='xl:flex xl:flex-row xl:gap-11 md:flex md:flex-row flex flex-col gap-2 font-[Roboto] text-[18px]'>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Cookies Settings</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer