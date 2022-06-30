import { MdOutlineClose } from 'react-icons/md'
import { useTrustFundContext } from '../../context/context'

interface MobileDropdownProps {
  closeMenu: () => void
}

const MobileDropdown = ({ closeMenu }: MobileDropdownProps) => {
  const { toggleAuth } = useTrustFundContext()

  const handleAuthClick = () => {
    toggleAuth()
    closeMenu()
  }
  return (
    <div className='px-4 bg-white fixed top-0 w-full z-50 h-screen overflow-hidden'>
      <div className='flex justify-end py-4'>
        <button
          className='flex md:hidden hover:bg-gray-100 rounded-full h-12 w-12 items-center justify-center transition duration-150 ease-in-out'
          onClick={closeMenu}
        >
          <MdOutlineClose className='text-xl' />
        </button>
      </div>
      <div className='mt-5'>
        <h1>TRUST FUND Mobile</h1>
        <div className='mt-10'>
          <div className='mb-10'>
            <ul className='flex flex-col space-y-5'>
              <li>For individuals</li>
              <li>Charities</li>
              <li>Companies</li>
            </ul>
          </div>
          <div>
            <button className='btn-primary w-full' onClick={handleAuthClick}>
              Start a trust fund
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileDropdown
