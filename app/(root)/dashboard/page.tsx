import { updataUser } from '@/lib/actions/user.action'
import { auth } from '@clerk/nextjs'
import React from 'react'

const Dashboard = async() => {
  auth().protect();
  return (
    <div>
      This is my Dashboard
    </div>
  )
}

export default Dashboard
