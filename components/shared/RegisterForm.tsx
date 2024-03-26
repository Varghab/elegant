"use client";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { FormEventHandler, useState } from "react";
import { useToast } from "../ui/use-toast";
import Link from "next/link";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const { isLoaded, signUp, setActive } = useSignUp();
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const [loading, setLaoding] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const router = useRouter();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);

  const registerHandler: FormEventHandler = async (e) => {
    setLaoding(true);
    setError({ name: "", username: "", email: "", password: "" });
    setErrorMessage("");
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const usernameRegex = /^[a-zA-Z]+$/;
    let user;
    if (!usernameRegex.test(formData.username)) {
      setError({
        ...error,
        username: "Username should only contain alphabets.",
      });
      setLaoding(false);
      return;
    }
    if (!emailRegex.test(formData.email)) {
      setError({ ...error, email: "Enter a valid email." });
      setLaoding(false);
      return;
    }
    if (!passwordRegex.test(formData.password)) {
      setError({
        ...error,
        password:
          "Password must contain 8 characters, 1 special character, 1 lower and upper case character.",
      });
      setLaoding(false);
      return;
    }

    // Call server action and check if the username is unique from DB

    try {
      user = await signUp.create({
        username: formData.username,
        emailAddress: formData.email,
        password: formData.password,
        firstName: formData.name,
      });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setPendingVerification(true);
    } catch (err: any) {
      const error = err.errors[0].code;
      if (error == "form_identifier_exists") {
        setErrorMessage(err.errors[0].message);
        setLaoding(false);
        return;
      }
      if (error === "form_password_pwned") {
        setErrorMessage(err.errors[0].message);
        setLaoding(false);
        return;
      } else {
        console.log(err.errors[0]);
        setErrorMessage("Something went wrong.");
      }
    }

    setLaoding(false);
  };

  const onPressVerify: FormEventHandler = async (e) => {
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
        await setActive({ session: completeSignUp.createdSessionId });

        toast({
          title: "Your account has been created",
        });
        router.push("/");
      }
    } catch (err: any) {
      console.log(err.errors[0]);
    }
  };

  return !pendingVerification ? (
    <div className="flex items-center flex-col sm:flex-row min-h-screen md:gap-16 sm:gap-8 ">
      <div className="bg-[url('/assets/images/sofa-login.png')] w-full bg-center bg-cover bg-no-repeat sm:min-h-screen min-h-[300px] flex-1"></div>
      <form
        onSubmit={registerHandler}
        className="flex-1 py-12 flex w-full sm:justify-normal justify-center"
      >
        <div className="max-w-96 w-[90%]">
          <h4 className="text-4xl font-bold">Create your account</h4>
          <p className="mt-3">
            Already have an account?{" "}
            <Link href="/login"><span className="text-[#38CB89]">Sign In</span></Link>
          </p>
          <div className="border-b-2 mt-5 border-b-neutral-200">
            <input
              required={true}
              value={formData.name}
              name="name"
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              type="text"
              placeholder="Your name"
              className="outline-none w-full py-2"
            />
          </div>
          <div className="border-b-2 mt-5 border-b-neutral-200">
            <input
              required={true}
              value={formData.username}
              name="username"
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              type="text"
              placeholder="Username"
              className="outline-none w-full py-2"
            />
          </div>
            {error.username && (
              <p className="text-red-500/80">{error.username}</p>
            )}
          <div className="border-b-2 mt-5 border-b-neutral-200">
            <input
              required={true}
              value={formData.email}
              name="email"
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              type="text"
              placeholder="Email Address"
              className="outline-none w-full py-2"
            />
          </div>
            {error.email && <p className="text-red-500/80">{error.email}</p>}
          <div className="border-b-2 border-b-neutral-200 mt-4 flex justify-between items-center">
            <input
              required={true}
              value={formData.password}
              name="password"
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              type={`${showPassword?'text':'password'}`}
              placeholder="Password"
              className="outline-none w-full py-2"
            />
            <button onClick={()=> setShowPassword(p=>!p)} type="button">
              {!showPassword?<GoEye name="open" className="text-xl" />:<GoEyeClosed name="close" className="text-xl" />}
            </button>
          </div>
          {error.password && (
              <p className="text-red-500/80">{error.password}</p>
            )}
          <div className="flex justify-between items-center mt-5">
            <div className="flex gap-2 items-center">
              <input
                className="w-4 h-4 accent-slate-800"
                id="terms"
                type="checkbox"
              />
              <label htmlFor="terms">
                I agree with Privacy Policy and Terms of Use
              </label>
            </div>
          </div>
          <button disabled={loading} type='submit' className="w-full mt-6 py-3 px-2 text-center rounded-md bg-neutral-800 text-neutral-200">
            Sign up
          </button>
          {errorMessage&&<p className='text-red-500/80 mt-2'>{errorMessage}</p>}
        </div>
      </form>
    </div>
  ) : (
    <div className="min-h-[40rem] flex items-center justify-center text-center">
      <div className="px-2">
        <h5 className="text-xl tracking-tight leading-[1.8rem]">
          We have sent a code to your email, please enter the code and verify
          your email.
        </h5>
        <form className="mt-4">
            <input
                value={code}
                placeholder="Code"
                onChange={(e) => setCode(e.target.value)}
                className="border border-neutral-200 py-2 px-3"
                />
            <button className="bg-green-700 mt-4 sm:mt-0 ml-3 text-neutral-200 py-2 px-4 rounded-md" onClick={onPressVerify}>
            Verify Email
            </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;

// <div className='flex justify-center items-center h-screen'>
//             {!pendingVerification&&<form onSubmit={registerHandler} className='flex flex-col gap-2 w-96'>
//                 <input required={true} value={formData.name} name="name" onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})} type='text' className='py-2 px-4 bg-gray-100 rounded-lg focus:outline-none' placeholder='Your name'></input>

//                 <input required={true} value={formData.username} name="username" onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})} type='text' className='py-2 px-4 bg-gray-100 rounded-lg focus:outline-none' placeholder='Username'></input>
//                 {error.username&&<p className='text-red-500/80'>{error.username}</p>}

//                 <input required={true} value={formData.email} name="email" onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})} type='text' className='py-2 px-4 bg-gray-100 rounded-lg focus:outline-none' placeholder='Your email address'></input>
//                 {error.email&&<p className='text-red-500/80'>{error.email}</p>}

//                 <input required={true} value={formData.password} name='password' onChange={(e)=> setFormData({...formData, [e.target.name]: e.target.value})} type='password' className='py-2 px-4 bg-gray-100 rounded-lg focus:outline-none' placeholder='Password'></input>
//                 {error.password&&<p className='text-red-500/80'>{error.password}</p>}

//                 <button disabled={loading} type='submit' className='py-2 disabled:cursor-not-allowed disabled:bg-neutral-500 rounded-md bg-neutral-700 px-4 text-neutral-200'>Submit</button>
//                 {errorMessage&&<p className='text-red-500/80'>{errorMessage}</p>}
//             </form>}
//             {pendingVerification&&
//             <form>
//                 <input
//                 value={code}
//                 placeholder="Code..."
//                 onChange={(e) => setCode(e.target.value)}
//                 />
//                 <button onClick={onPressVerify}>
//                 Verify Email
//                 </button>
//             </form>
//             }
//         </div>

{/* <div className="max-w-[40rem] w-[100%] py-8 px-12 bg-neutral-100 rounded">
        <h5 className="text-2xl tracking-tight leading-[1.8rem]">
          We have sent a code to your email, please enter the code and verify
          your email.
        </h5>
        <form className=" mt-3 max-w-96 w-full mx-auto">
          <div className="flex items-center flex-wrap bg-white  py-1 rounded-md px-2">
          <input
            value={code}
            placeholder="Code"
            onChange={(e) => setCode(e.target.value)}
            className="flex-1 py-2 outline-none text-xl rounded-s-md"
          />
          <button className="bg-green-700 h-full text-neutral-200 py-2 px-4 rounded-md" onClick={onPressVerify}>Verify Email</button>
          </div>
        </form>
      </div> */}