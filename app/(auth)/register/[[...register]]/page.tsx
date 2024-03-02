"use client"
import RegisterForm from '@/components/shared/RegisterForm'
import { SignUp } from '@clerk/nextjs'
import React from 'react'

const Register = () => {
  return (
    <div>
      <RegisterForm />
    </div>
  )
}

export default Register
