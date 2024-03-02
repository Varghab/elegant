"use client"
import { SignIn, SignInButton, UserButton, useSignIn } from '@clerk/nextjs'
import { useRouter } from 'next/navigation';
import React, { FormEventHandler, useState } from 'react'

const Login = () => {
    const [formData, setFormData] = useState({email:"", password:""});
    const {signIn, setActive, isLoaded} = useSignIn();
    const [errorMessage, setErrorMessage] = useState('');
    const [emailError, setEmailError] = useState('');
    // const [passwordError, setPasswordError] = useState('');
    const [loading, setLaoding] = useState(false);
    const router = useRouter();
    const loginHandler:FormEventHandler = async(e) => {
        e.preventDefault();
        
        if (!isLoaded) {
            return;
        }

        setLaoding(true);
        setErrorMessage('');
        // setPasswordError("");
        setEmailError('');

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/;
        // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        
        if(!emailRegex.test(formData.email)){
            setEmailError('Enter a valid email.')
            setLaoding(false);
            return;
        }
        // if(!passwordRegex.test(formData.password)){
        //     setPasswordError("Password must contain 8 characters, 1 special character, 1 lower and upper case character.");
        //     setLaoding(false);
        //     return;
        // }
        try {
            const result = await signIn?.create({
                strategy: 'password',
                identifier: formData.email,
                password: formData.password
            })
            if(result?.status === 'complete'){
                setActive && await setActive({ session: result.createdSessionId });
                router.push('/');
            }else{
                setErrorMessage("Something went wrong!")
            }
        } catch (error:any) {
            if(error.errors[0].code === 'form_password_incorrect' || error.errors[0].code === 'form_identifier_not_found'){
                setErrorMessage("Either email or password is entered incorrectly!")
            }else{
                setErrorMessage("Something went wrong!")
            }
        }
        setLaoding(false);

        
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <form onSubmit={loginHandler} className='flex flex-col gap-2 w-96'>
                <input required={true} value={formData.email} name="email" onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})} type='text' className='py-2 px-4 bg-gray-100 rounded-lg focus:outline-none' placeholder='Your email address'></input>
                {emailError&&<p className='text-red-500'>{emailError}</p>}
                <input required={true} value={formData.password} name='password' onChange={(e)=> setFormData({...formData, [e.target.name]: e.target.value})} type='password' className='py-2 px-4 bg-gray-100 rounded-lg focus:outline-none' placeholder='Password'></input>
                {/* {passwordError&&<p className='text-red-500'>{passwordError}</p>} */}
                <button disabled={loading} type='submit' className='py-2 disabled:cursor-not-allowed disabled:bg-neutral-500 rounded-md bg-neutral-700 px-4 text-neutral-200'>Submit</button>
                {errorMessage&&<p className='text-red-500'>{errorMessage}</p>}
            </form>
        </div>
    )
}

export default Login
