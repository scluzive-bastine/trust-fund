import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <section className='mx-auto max-w-screen-xl px-4 md:px-0'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 py-20'>
          <div className='flex items-center'>
            <div>
              <span>We believe that</span>
              <h1 className='mt-4 text-2xl md:text-6xl font-semibold text-gray-700'>
                Do good for others and change lives
              </h1>

              <div className='mt-4'>
                <button className='btn-primary'>Start a trust fund</button>
              </div>
            </div>
          </div>
          <div className='grow-0'>
            <div className='h-[500px] bg-gray-300'></div>
          </div>
        </div>
      </section>
      <section className='md:mt-20 mx-auto max-w-screen-xl px-4 md:px-0 py-10'>
        <div>
          <span>How to start</span>
          <div className='mt-3 max-w-screen-md'>
            <h1 className='text-2xl md:text-5xl font-semibold text-gray-700'>
              Generating funds on TrustFund takes just a few steps
            </h1>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 mt-12 gap-10'>
            <div className='relative'>
              <span className='relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-teal-500 mb-3 px-4'>
                <span className='relative text-sm uppercase italic text-white font-semibold'>
                  Step 1
                </span>
              </span>
              <h1 className='text-xl text-gray-700 font-semibold'>Create an account</h1>
              <p className='text-gray-500'>Sign up and get verified by submitting KYC documents</p>
            </div>
            <div className='relative'>
              <span className='relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-teal-500 mb-3 px-4'>
                <span className='relative text-sm uppercase italic text-white font-semibold'>
                  Step 1
                </span>
              </span>
              <h1 className='text-xl text-gray-700 font-semibold'>Tell your story</h1>
              <p className='text-gray-500'>Share your story with the world </p>
            </div>
            <div className='relative'>
              <span className='relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-teal-500 mb-3 px-4'>
                <span className='relative text-sm uppercase italic text-white font-semibold'>
                  Step 1
                </span>
              </span>
              <h1 className='text-xl text-gray-700 font-semibold'>Share with others</h1>
              <p className='text-gray-500'>Let people know about your story and support</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
