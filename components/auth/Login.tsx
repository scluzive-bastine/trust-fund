import React from 'react'

const Login = () => {
  return (
    <div className='mt-10'>
      <div className='mb-4 flex flex-col'>
        <input type='text' className='form-control' placeholder='Email Address' />
      </div>
      <div className='mb-2 flex flex-col'>
        <input type='password' className='form-control' placeholder='Password' />
      </div>
      <p className='text-xs text-gray-500 mb-5 text-left'>
        Enter your login details, email and password to login to your account.
      </p>
      <div className='w-full mb-5'>
        <button className='btn-primary w-full'>Continue</button>
      </div>
      <div className='underline text-sm font-normal text-gray-700 text-left'>Forgot password</div>
    </div>
  )
}

export default Login
