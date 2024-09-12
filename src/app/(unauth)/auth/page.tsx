import SignIn from '@/components/sign-in'
import React, { FC } from 'react'

const AuthPage:FC = () => {
  return (
    <div className='h-screen bg-gray-200 flex items-center justify-center'>
        <SignIn />
    </div>
  )
}

export default AuthPage
