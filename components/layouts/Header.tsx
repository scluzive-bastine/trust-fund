import Link from 'next/link'
import { useState } from 'react'
import { RiMenu5Fill } from 'react-icons/ri'
import Auth from '../auth/Auth'
import MobileDropdown from './MobileDropdown'
import { useTrustFundContext } from '../../context/context'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  // const [isAuthOpen, setIsAuthOpen] = useState(false)
  const { isAuthOpen, toggleAuth } = useTrustFundContext()

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      {isOpen && <MobileDropdown closeMenu={handleClick} />}
      <nav className='px-4 sticky top-0 z-20 bg-white border-b border-gray-200'>
        <div className='mx-auto max-w-screen-xl flex justify-between flex-grow-0 py-4 items-center'>
          <div className='hidden md:flex'>
            <ul className='flex space-x-5'>
              <li>For individuals</li>
              <li>Charities</li>
              <li>Companies</li>
              <li>
                <Link href='/discover'>Discover</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className=''>TRUST FUND</h1>
          </div>
          <div>
            <button className='btn-primary hidden md:flex' onClick={toggleAuth}>
              Start a Trust Fund
            </button>
            <button
              className='flex md:hidden hover:bg-gray-100 rounded-full h-12 w-12 items-center justify-center transition duration-150 ease-in-out'
              onClick={handleClick}
            >
              <RiMenu5Fill className='text-xl' />
            </button>
          </div>
        </div>
      </nav>
      {isAuthOpen && <Auth isOpen={isAuthOpen} setIsOpen={toggleAuth} />}
    </>
  )
}

export default Header
