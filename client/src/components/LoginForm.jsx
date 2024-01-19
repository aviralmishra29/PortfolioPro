import React from "react";
import { useState } from "react";

const LoginForm = ({title, desc1, desc2, formType}) => {

  const [formData, setFormData] = useState({
    email:"", password:""
});

function changeHandler(e) {
    setFormData((prevData) => ({
        ...prevData, 
        [e.target.name]:e.target.value,
        [e.target.password]:e.target.value
    }))
};

  return (
    <div>
      <form className="flex flex-col justify-center ">
        <label className="mb-[15px]" >
          <p className="text-sm" >
            Email ID/Mobile No. or User Id <sup>*</sup>
          </p>
          <input
            className="border-2 rounded w-[220px] "
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Email ID/Mobile No. or User Id"
            
          />
        </label>
        <label >
          <div className="flex flex-row justify-between items-center text-sm" >
          <p>Password</p>
          <p>Forgot Password</p>
          </div>
          <input 
          className="border-2 rounded w-[220px] "
          required
          type="password"
          name="password"
          value={formData.password}
          onChange={changeHandler}
          />
        </label>
          <div className="flex flex-row justify-end items-center text-sm mb-[30px]" >Login using OTP</div>
        <button className="border bg-gray-500 h-8">Login</button>
        <div className="text-xs text-gray-500 mt-[10px] flex flex-row justify-center">
          New User?Create an account
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
