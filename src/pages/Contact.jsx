import { React, useState } from 'react'
import Form from 'react-bootstrap/Form';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.message) newErrors.message = 'Message is required';
    if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept the terms';

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Form is valid, submit the data
      console.log('Form data:', formData);
    }
  };
  return (
    <div>
        <div className="overflow-hidden w-full h-[1315px] flex flex-col gap-16 justify-center items-center">
            <div className="gap-4 w-[1024px] flex flex-col justify-center items-center">
                <p className='font-[Roboto] font-semibold text-[21.33px]'>Get In Touch</p>
                <h1 className='font-[Roboto] font-bold text-[64px] text-[#282938]'>Contact Me</h1>
                <p className='font-[Roboto] xl:text-[24px] text-[#1C1E53]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            
            <div className='xl:w-[1024px] md:w-[90%] w-[90%] xl:flex xl:flex-col xl:gap-6 flex flex-col gap-4'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 xl:flex xl:flex-row xl:justify-center xl:gap-8 flex flex-col gap-6" controlId="exampleForm.ControlInput1">
          <div className="xl:flex xl:flex-col xl:w-[50%] gap-2">
            <Form.Label className='font-[Roboto] text-[21.33px]'>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-[100%] border ${errors.firstName ? 'border-red-500' : 'border-black'} rounded-md`}
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          </div>
          <div className="xl:flex xl:flex-col xl:w-[50%] gap-2">
            <Form.Label className='font-[Roboto] text-[21.33px]'>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-[100%] border ${errors.lastName ? 'border-red-500' : 'border-black'} rounded-md`}
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
          </div>
        </Form.Group>

        <Form.Group className="mb-3 xl:flex xl:flex-row xl:justify-center xl:gap-8 flex flex-col gap-6" controlId="exampleForm.ControlInput1">
          <div className="flex flex-col xl:w-[50%] gap-2">
            <Form.Label className='font-[Roboto] text-[21.33px]'>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-[100%] border ${errors.email ? 'border-red-500' : 'border-black'} rounded-md`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="flex flex-col xl:w-[50%] gap-2">
            <Form.Label className='font-[Roboto] text-[21.33px]'>Phone Number</Form.Label>
            <Form.Control
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={`border ${errors.phoneNumber ? 'border-red-500' : 'border-black'} rounded-md`}
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
          </div>
        </Form.Group>

        <Form.Group className="mb-3 flex flex-col gap-2" controlId="exampleForm.ControlTextarea1">
          <Form.Label className='font-[Roboto] text-[21.33px]'>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`h-[240px] border ${errors.message ? 'border-red-500' : 'border-black'} rounded-md`}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </Form.Group>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="formBasicCheckbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            className={`form-checkbox h-5 w-5 text-blue-600 ${errors.termsAccepted ? 'border-red-500' : ''}`}
          />
          <label htmlFor="formBasicCheckbox" className="ml-2 text-gray-700 font-[Roboto] text-[21.33px]">
            I accept the terms
          </label>
        </div>
        {errors.termsAccepted && <p className="text-red-500 text-sm">{errors.termsAccepted}</p>}

        <button type="submit" className='bg-[#5E3BEE] w-full flex justify-center h-[50px] items-center rounded-md font-[Roboto] text-[21.33px] text-white mt-4'>
          Submit
        </button>
      </Form>
    </div>

        </div>
    </div>
  )
}

export default Contact