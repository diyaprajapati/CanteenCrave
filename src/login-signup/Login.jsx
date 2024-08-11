import React from 'react';
// import axios from 'axios'
import {Link} from 'react-router-dom';
import Button from '../Button';

export default function Login() {
  return (
    <div className='flex justify-center items-center h-screen'>
    <form className='w-full h-full'>
        <div className='flex flex-col justify-center items-center h-full'>

            {/* Label */}
            <h1 className='text-3xl p-6 font-semibold'>Log-In</h1>

            {/* email */}
            <div className='flex flex-col p-4 gap-3 w-80'>
                <div className='flex flex-col space-y-2'>
                    <label className='font-medium text-left'>E-mail:</label>
                    <input className='border-2 py-2 px-8 rounded-md focus:outline-none border-gray-400' type='email' placeholder='xyz@gmail.com'/>
                </div>

                {/* password */}
                <div className='flex flex-col space-y-2'>
                    <label className='font-medium text-left'>Password:</label>
                    <input className='border-2 py-2 px-8 rounded-md focus:outline-none border-gray-400' type='password' placeholder='password'/>
                </div>

            </div>

            {/* Button */}
                <Button>Log-in</Button>

            {/* signup if doesn't login */}
            <div className='flex gap-4 mt-3'>
                <p>Don't have an account?</p>
                <Link className='font-normal underline hover:font-medium' to='/signup'> Signup </Link>
            </div>
        </div>
    </form>
    </div>
  )
}
