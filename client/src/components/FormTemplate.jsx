import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

const FormTemplate = ({title, desc1, desc2, formType}) => {
  return (
    <div className='flex justify-center '>
        <div className='flex flex-col justify-center items-center bg-slate-800 w-[55vw] h-[50vh]'>
            <h1 className='text-2xl mt-[-40px] font-semibold'>{title}</h1>
            <div className='text-xs text-gray-500 mt-[10px]' >{desc1}</div>
            <div className='flex justify-center gap-6 mt-[6px]'>
                <FcGoogle />
                <BsApple />
                <FaFacebook />
            </div>
            <div className='flex flex-row mt-[12px] justify-center items-center'>
              <div>--------------</div>
              <div>OR</div>
              <div>--------------</div>
            </div>
            
            {formType=== 'SignUp' ?
            (<SignUpForm />)
            :
            (<LoginForm />)}

          <div>- - - - - - - - - - - - - - - - - - - - -</div>
            
            <div className='text-xs text-gray-500' >{desc2}</div>
        </div>
    </div>
  )
}

export default FormTemplate