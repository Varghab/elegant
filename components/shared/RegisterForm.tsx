"use client"
import { useSignUp } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import React, { FormEventHandler, useState } from 'react'
import { useToast } from '../ui/use-toast';
import { createUser } from '@/lib/actions/user.action';

const RegisterForm = () => {
    const [formData, setFormData] = useState({name:"",username:"" ,email:"", password:""});
    const { isLoaded, signUp, setActive } = useSignUp();
    const [pendingVerification, setPendingVerification] = useState(false);
    const [code, setCode] = useState("");
    const [loading, setLaoding] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [error, setError] = useState({name:"",username:"" ,email:"", password:""});
    const router = useRouter();
    const { toast } = useToast();

    const registerHandler:FormEventHandler = async(e) => {
        setLaoding(true);
        setError({name:"",username:"" ,email:"", password:""});
        setErrorMessage("");
        e.preventDefault();
        if (!isLoaded) {
            return;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const usernameRegex = /^[a-zA-Z]+$/;
        let user;
        if(!usernameRegex.test(formData.username)){
            setError({...error, username:"Username should only contain alphabets."});
            setLaoding(false);
            return;
        }
        if(!emailRegex.test(formData.email)){
            setError({...error, email:"Enter a valid email."});
            setLaoding(false);
            return;
        }     
        if(!passwordRegex.test(formData.password)){
            setError({...error, password:"Password must contain 8 characters, 1 special character, 1 lower and upper case character."});
            setLaoding(false);
            return;
        }

        // Call server action and check if the username is unique from DB

        try {
            user = await signUp.create({
                username: formData.username,
                emailAddress: formData.email,
                password: formData.password,
                firstName: formData.name
            });
            await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
            setPendingVerification(true);
        } catch (err: any) {
            const error = err.errors[0].code;
            if(error == "form_identifier_exists") {
                setErrorMessage(err.errors[0].message)
                setLaoding(false)
                return;
            }
            if(error === "form_password_pwned") {
                setErrorMessage(err.errors[0].message);
                setLaoding(false)
                return;
            }
            else{
                console.log(err.errors[0]);                
                setErrorMessage("Something went wrong.")
            }
        }


        setLaoding(false)
    } 

    // const saveUserToDatabase = async () => {
    //     const userDetails = {...formData, userId:"das"}
    //     const userData = await createUser(userDetails);
    //     if(!userData?.success){
    //         toast({
    //             title:"Something went wrong!",
    //         })
    //         return;
    //     }
    // }

    const onPressVerify:FormEventHandler = async (e) => {
        e.preventDefault();
        if (!isLoaded) {
            return;
        }

        try {
            const completeSignUp = await signUp.attemptEmailAddressVerification({
            code,
        });
            if (completeSignUp.status !== "complete") {
            /*  investigate the response, to see if there was an error
            or if the user needs to complete more steps.*/
            console.log(JSON.stringify(completeSignUp, null, 2));
        }
            if (completeSignUp.status === "complete") {
                await setActive({ session: completeSignUp.createdSessionId })
            
            toast({
                title:"Your account has been created",
            })
            router.push("/");
        }
        } catch (err: any) {
            console.log(err.errors[0]);
        }
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            {!pendingVerification&&<form onSubmit={registerHandler} className='flex flex-col gap-2 w-96'>
                <input required={true} value={formData.name} name="name" onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})} type='text' className='py-2 px-4 bg-gray-100 rounded-lg focus:outline-none' placeholder='Your name'></input>


                <input required={true} value={formData.username} name="username" onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})} type='text' className='py-2 px-4 bg-gray-100 rounded-lg focus:outline-none' placeholder='Username'></input>
                {error.username&&<p className='text-red-500/80'>{error.username}</p>}

                <input required={true} value={formData.email} name="email" onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})} type='text' className='py-2 px-4 bg-gray-100 rounded-lg focus:outline-none' placeholder='Your email address'></input>
                {error.email&&<p className='text-red-500/80'>{error.email}</p>}

                <input required={true} value={formData.password} name='password' onChange={(e)=> setFormData({...formData, [e.target.name]: e.target.value})} type='password' className='py-2 px-4 bg-gray-100 rounded-lg focus:outline-none' placeholder='Password'></input>
                {error.password&&<p className='text-red-500/80'>{error.password}</p>}

                <button disabled={loading} type='submit' className='py-2 disabled:cursor-not-allowed disabled:bg-neutral-500 rounded-md bg-neutral-700 px-4 text-neutral-200'>Submit</button>
                {errorMessage&&<p className='text-red-500/80'>{errorMessage}</p>}
            </form>}
            {pendingVerification&&
            <form>
                <input
                value={code}
                placeholder="Code..."
                onChange={(e) => setCode(e.target.value)}
                />
                <button onClick={onPressVerify}>
                Verify Email
                </button>
            </form>
            }
        </div>
    )
}

export default RegisterForm
