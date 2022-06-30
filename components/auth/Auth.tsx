import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import Login from './Login'
import Register from './Register'

interface Props {
  isOpen: boolean
  setIsOpen: () => void
}

const Auth = ({ isOpen, setIsOpen }: Props) => {
  const [authType, setAuthType] = useState('login')

  const showAuthType = () => {
    if (authType === 'login') {
      return <Login />
    } else {
      return <Register />
    }
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black/90' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto mx-auto max-w-screen-xl'>
          <div className='flex items-center justify-center p-4 text-center w-full min-h-screen'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <div className='w-full transform overflow-hidden flex flex-col md:flex-row space-y-10'>
                <div className='w-full md:w-4/5 flex items-end'>
                  <div className='w-full max-w-md text-left'>
                    <h1 className='text-white text-2xl font-semibold mb-4'>
                      Providing funds for Family, Friends, Charity, Projects and many more
                    </h1>
                    <p className='text-gray-300'>
                      Create and account, tell your story and share it with the world, Set up a
                      fundraiser for your new project
                    </p>
                  </div>
                </div>
                <Dialog.Panel className='w-full md:w-2/5 bg-white rounded-xl p-4 md:p-8'>
                  <div className='flex justify-between'>
                    <div className='text-left font-semibold text-xl'>
                      <h1>{authType === 'login' ? 'Sign in' : 'Sign up'}</h1>
                      <div
                        className='underline text-sm font-normal text-gray-700 cursor-pointer'
                        onClick={() =>
                          authType === 'login' ? setAuthType('register') : setAuthType('login')
                        }
                      >
                        {authType === 'login' ? 'Create an account' : 'Login to your account'}
                      </div>
                    </div>
                    <button
                      className='flex hover:bg-gray-100 rounded-full h-12 w-12 items-center justify-center transition duration-150 ease-in-out'
                      onClick={setIsOpen}
                    >
                      <MdOutlineClose className='text-xl' />
                    </button>
                  </div>
                  {showAuthType()}
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Auth
