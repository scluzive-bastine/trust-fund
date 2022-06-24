import Image from 'next/image'
import Link from 'next/link'
import { IoIosSend } from 'react-icons/io'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='bg-gray-100 border-t border-gray-200 py-10 px-4'>
      <div className='mx-auto max-w-screen-xl'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
          <div>
            <h1>TrustFund</h1>
            <p className='mt-3 leading-5 text-gray-800 dark:text-gray-500'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis soluta iusto sed,
              Qui, quisquam.
            </p>
          </div>
          <div>
            <h1 className='text-sm font-light uppercase tracking-wider'>Resources</h1>
            <ul className='mt-5'>
              <li className='pb-4'>
                <Link href='/'>All Categories</Link>
              </li>
              <li className='pb-4'>
                <Link href='/'>Create</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className='text-sm font-light uppercase tracking-wider'>Resources</h1>
            <ul className='mt-5'>
              <li className='pb-4'>
                <Link href='/'>Help Center</Link>
              </li>
              <li className='pb-4'>
                <Link href='/'>About Us</Link>
              </li>
              <li className='pb-4'>
                <Link href='/'>Contact us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className='text-sm font-light uppercase tracking-wider'>Our Communities</h1>
            <div className='flex space-x-3 mt-4'>
              <div className='w-12 h-12 rounded-full flex items-center justify-center border border-gray-200 hover:bg-white transition duration-150 ease-in-out cursor-pointer'>
                <FaFacebookF className='text-xl text-[#3e5b9a]' />
              </div>
              <div className='w-12 h-12 rounded-full flex items-center justify-center border border-gray-200 hover:bg-white transition duration-150 ease-in-out cursor-pointer'>
                <FaTwitter className='text-xl text-[#1ea1f1]' />
              </div>
              <div className='w-12 h-12 rounded-full flex items-center justify-center border border-gray-200 hover:bg-white transition duration-150 ease-in-out cursor-pointer'>
                <AiFillInstagram className='text-xl text-[#833AB4]' />
              </div>
            </div>
          </div>
        </div>
        <div className='br-light br-dark mt-10 border-t pt-5'>
          <span className='text-gray-500'>© TrustFund, Inc. All rights reserved.</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
