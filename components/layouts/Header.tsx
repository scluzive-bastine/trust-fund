import React from 'react'

const Header = () => {
  return (
    <nav className='px-4 '>
      <div className='mx-auto max-w-screen-xl flex justify-between flex-grow-0 py-4 items-center'>
        <div>
          <ul className='flex space-x-4'>
            <li>For individuals</li>
            <li>Charities</li>
            <li>Companies</li>
          </ul>
        </div>
        <div>
          <h1 className=''>TRUST FUND</h1>
        </div>
        <div>
          <button className='bg-teal-500 hover:bg-teal-600 transition duration-150 ease-in-out text-white px-4 py-2 rounded font-semibold'>
            Start a Trust Fund
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header
