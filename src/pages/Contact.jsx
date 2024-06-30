import React from 'react'
import Form from 'react-bootstrap/Form';


const Contact = () => {
  return (
    <div>
        <div className="w-full h-[1315px] flex flex-col gap-16 justify-center items-center">
            <div className="gap-4 w-[1024px] flex flex-col justify-center items-center">
                <p className='font-[Roboto] font-semibold text-[21.33px]'>Get In Touch</p>
                <h1 className='font-[Roboto] font-bold text-[64px] text-[#282938]'>Contact Me</h1>
                <p className='font-[Roboto] text-[24px] text-[#1C1E53]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            
            <div class='w-[1024px] flex flex-col gap-6'>
                  <Form.Group className="mb-3 flex justify-center gap-8" controlId="exampleForm.ControlInput1">
                    <div className="flex flex-col w-[50%] gap-2">
                      <Form.Label className='font-[Roboto] text-[21.33px]'>First Name</Form.Label>
                      <Form.Control type="text" placeholder="" className='border border-black rounded-md'/>
                    </div>
                    <div className="flex flex-col w-[50%] gap-2">
                      <Form.Label className='font-[Roboto] text-[21.33px]'>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="" className='border border-black rounded-md'/>
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-3 flex justify-center gap-8" controlId="exampleForm.ControlInput1">
                    <div className="flex flex-col w-[50%] gap-2">
                      <Form.Label className='font-[Roboto] text-[21.33px]'>Email</Form.Label>
                      <Form.Control type="email" placeholder="" className='border border-black rounded-md'/>
                    </div>
                    <div className="flex flex-col w-[50%] gap-2">
                      <Form.Label className='font-[Roboto] text-[21.33px]'>Phone Number</Form.Label>
                      <Form.Control type="text" placeholder="" className='border border-black rounded-md'/>
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-3 flex flex-col gap-2" controlId="exampleForm.ControlTextarea1">
                      <Form.Label className='font-[Roboto] text-[21.33px]'>Message</Form.Label>
                      <Form.Control as="textarea" rows={3} className='h-[240px] border border-black rounded-md' />
                  </Form.Group>
                  <div className="flex items-center">
                      <input
                          type="checkbox"
                          id="formBasicCheckbox"
                          className="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <label htmlFor="formBasicCheckbox" className="ml-2 text-gray-700 font-[Roboto] text-[21.33px]">
                          I accept the terms
                      </label>
                  </div>
                  <button className='bg-[#5E3BEE] w-full flex justify-center h-[50px] items-center rounded-md font-[Roboto] text-[21.33px] text-white'>Submit</button>
                  
              </div>

        </div>
    </div>
  )
}

export default Contact