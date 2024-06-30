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
        <div className="w-full h-[432px] bg-[#F5FCFF] p-12 flex flex-col gap-10 justify-center">
              <div className="flex flex-col gap-28">
                  <div className="flex justify-between">
                      <div className="flex">
                          <img src={logo} alt="" className='w-[44px] h-[40px]' />
                          <p className='font-[Roboto] text-[25.21px] font-semibold'>JohnDev,</p>
                      </div>
                      <div className="">
                          <ul className='flex gap-11 font-[Roboto] text-[21.33px]'>
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
            <div className="flex justify-between">
                <p className='font-[Roboto] text-[18px]'>Made with 💖 by Airdokan</p>
                <div className=""> 
                    <ul className='flex gap-11 font-[Roboto] text-[18px]'>
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