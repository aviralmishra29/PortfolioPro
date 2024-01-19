import React, { useState } from 'react'

const SignUpForm = () => {

    const [formData, setFormData] = useState({
        email:""
    });

    function changeHandler(e) {
        setFormData((prevData) => ({
            ...prevData, 
            [e.target.name]:e.target.value
        }))
    };

  return (
    <form className='flex flex-col justify-center gap-y-2'>
        <label >
            <p>Email ID <sup>*</sup></p>
            <input 
            className='border-2 rounded'
            required
            type='email'
            name='email'
            value={formData.email}
            onChange={changeHandler}
            placeholder='e.g. yourname@abc.com'
            /> 
        </label>
        <button className='border bg-gray-500' >Continue</button>
        <button className='border bg-gray-500' >Get OTP on mobile</button>
        <div className='text-xs text-gray-500 mt-[10px]'>Already have an account? Login</div>
    </form>
  )
}

export default SignUpForm