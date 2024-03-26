"use client"
import DemoCredentials from '@/components/shared/DemoCredentials';
import { SignIn, SignInButton, UserButton, useSignIn } from '@clerk/nextjs'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { FormEventHandler, useState } from 'react'
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";

const Login = () => {
    const [formData, setFormData] = useState({email:"", password:""});
    const {signIn, setActive, isLoaded} = useSignIn();
    const [errorMessage, setErrorMessage] = useState('');
    const [emailError, setEmailError] = useState('');
    // const [passwordError, setPasswordError] = useState('');
    const [loading, setLaoding] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter();


    const loginHandler:FormEventHandler = async(e) => {
        e.preventDefault();
        console.log(formData);
        
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
        <div className='flex items-center flex-col sm:flex-row min-h-screen md:gap-16 sm:gap-8 '>
            <div className="bg-[url('/assets/images/sofa-login.png')] w-full bg-center bg-cover bg-no-repeat sm:min-h-screen min-h-[300px] flex-1 ">
                
            </div>
            <form onSubmit={loginHandler} className='flex-1 py-12 flex w-full sm:justify-normal justify-center'>
                <div className='max-w-96 w-[90%]'>
                    <h4 className='text-4xl font-bold'>Sign in</h4>
                    <p className='mt-3'>Don’t have an account yet? 
                    <Link className='ml-1' href="/register"><span className='text-[#38CB89]'>Sign Up</span></Link>
                    </p>
                    <div className='border-b-2 mt-5 border-b-neutral-200'>
                        <input required={true} value={formData.email} name="email" onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})} type='text' placeholder='Your email' className='outline-none w-full py-2' />
                    </div>
                    {emailError&&<p className='text-red-500'>{emailError}</p>}
                    <div className='border-b-2 border-b-neutral-200 mt-4 flex items-center justify-between'>
                        <input required={true} value={formData.password} name='password' onChange={(e)=> setFormData({...formData, [e.target.name]: e.target.value})} type={`${showPassword?'text':'password'}`} placeholder='Password' className='outline-none w-full py-2' />
                        <button onClick={()=> setShowPassword(p=>!p)} type="button">
                        {!showPassword?<GoEye name="open" className="text-xl" />:<GoEyeClosed name="close" className="text-xl" />}
            </button>
                    </div>
                    <div className='flex justify-between items-center mt-5'>
                        <div className='flex gap-2 items-center'>
                            <input className='w-4 h-4 accent-slate-800' id="remember" type='checkbox' />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <p className='tracking-wide font-[500] underline underline-offset-4 cursor-pointer'>Forget Password?</p>
                    </div>
                    <button disabled={loading} type='submit' className='w-full mt-6 py-3 px-2 text-center rounded-md bg-neutral-800 text-neutral-200'>
                        Sign in
                    </button>
                   {errorMessage&&<p className='text-red-500 mt-2'>{errorMessage}</p>}

                    <DemoCredentials />
                </div>
                
            </form>
        </div>
    )
}

export default Login


// <form onSubmit={loginHandler} className='flex flex-col gap-2 w-96'>
//                 <input required={true} value={formData.email} name="email" onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})} type='text' className='py-2 px-4 bg-gray-100 rounded-lg focus:outline-none' placeholder='Your email address'></input>
//                 {emailError&&<p className='text-red-500'>{emailError}</p>}
//                 <input required={true} value={formData.password} name='password' onChange={(e)=> setFormData({...formData, [e.target.name]: e.target.value})} type='password' className='py-2 px-4 bg-gray-100 rounded-lg focus:outline-none' placeholder='Password'></input>
//                 {/* {passwordError&&<p className='text-red-500'>{passwordError}</p>} */}
//                 <button disabled={loading} type='submit' className='py-2 disabled:cursor-not-allowed disabled:bg-neutral-500 rounded-md bg-neutral-700 px-4 text-neutral-200'>Submit</button>
//                 {errorMessage&&<p className='text-red-500'>{errorMessage}</p>}
//             </form>