import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from '../Button';

export default function Signup() {
    const [popup, setPopup] = useState({
        visible: false,
        message: '',
        success: false
    });

    const [signupData, setSignupData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleRegistrationChange = (e) => {
        const { name, value } = e.target;
        setSignupData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleRegistrationSubmit = async (e) => {
        e.preventDefault();
    
        // Confirm password validation
        if (signupData.password !== signupData.confirmPassword) {
            setPopup({
                visible: true,
                message: 'Passwords do not match!',
                success: false
            });
            setTimeout(() => {
                setPopup((prevPopup) => ({ ...prevPopup, visible: false }));
            }, 3000);
            return;
        }
    
        try {
            const response = await axios.post('http://localhost:3000/signup', {
                email: signupData.email,
                password: signupData.password
            }); 

            const { success, message } = response.data;
    
            if (success) {
                setPopup({
                    visible: true,
                    message: 'Signup Successful!',
                    success: true
                });
                console.log('Signup Successful:', message);
            } 
            else {
                setPopup({
                    visible: true,
                    message: message || 'Signup Failed!',
                    success: false
                });
            }
        } 
        catch (error) {
            setPopup({
                visible: true,
                message: 'Signup error, please try again!',
                success: false
            });
            console.log(error);
        }
    
        setSignupData({
            email: '',
            password: '',
            confirmPassword: ''
        });
    
        setTimeout(() => {
            setPopup((prevPopup) => ({ ...prevPopup, visible: false }));
        }, 3000);
    };    

    return (
        <div className='flex justify-center items-center h-screen'>
            <form className='w-full h-full' onSubmit={handleRegistrationSubmit}>
                <div className='flex flex-col justify-center items-center h-full'>

                    {/* Label */}
                    <h1 className='text-3xl p-6 font-semibold'>Sign-Up</h1>

                    {/* email */}
                    <div className='flex flex-col p-4 gap-3 w-80'>
                        <div className='flex flex-col space-y-2'>
                            <label className='font-medium text-left'>E-mail:</label>
                            <input
                                className='border-2 py-2 px-8 rounded-md focus:outline-none border-gray-400'
                                type='email'
                                name='email'
                                placeholder='xyz@gmail.com'
                                value={signupData.email}
                                required
                                onChange={handleRegistrationChange}
                            />
                        </div>

                        {/* password */}
                        <div className='flex flex-col space-y-2'>
                            <label className='font-medium text-left'>Password:</label>
                            <input
                                className='border-2 py-2 px-8 rounded-md focus:outline-none border-gray-400'
                                type='password'
                                name='password'
                                placeholder='password'
                                value={signupData.password}
                                required
                                onChange={handleRegistrationChange}
                            />
                        </div>

                        {/* Confirm password */}
                        <div className='flex flex-col space-y-2'>
                            <label className='font-medium text-left'>Confirm Password:</label>
                            <input
                                className='border-2 py-2 px-8 rounded-md focus:outline-none border-gray-400'
                                type='password'
                                name='confirmPassword'
                                placeholder='password'
                                value={signupData.confirmPassword}
                                required
                                onChange={handleRegistrationChange}
                            />
                        </div>
                    </div>

                    {/* Button */}
                    <Button>Sign-up</Button>

                    {popup.visible && (
                        <div
                            className={`p-5 rounded-md shadow-lg 
                            ${popup.success ? 'bg-green-200 text-green-800 border-green-600' : 'bg-red-200 text-red-800 border-red-600'}`}>
                            <p>{popup.message}</p>
                        </div>
                    )}

                    {/* signup if doesn't login */}
                    <div className='flex gap-4 mt-3'>
                        <p>Already have an account?</p>
                        <Link className='font-normal underline hover:font-medium' to='/'> Login </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}
