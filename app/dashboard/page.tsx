import { auth } from '@clerk/nextjs'
import React from 'react'

const Dashboard = () => {
    auth().protect()
  return (
    <div>
      This is my Dashboard
    </div>
  )
}

export default Dashboard
