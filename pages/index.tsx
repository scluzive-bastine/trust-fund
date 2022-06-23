import type { NextPage } from 'next'
import Image from 'next/image'
import RecentDonations from '../components/donations/RecentDonations'
import bg from '../images/bg.png'

const Home: NextPage = () => {
  const img1 =
    'https://images.unsplash.com/photo-1618754580230-dc55ba127aa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
  const img2 =
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80'
  const img3 =
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
  const img4 =
    'https://images.unsplash.com/photo-1605664041954-fc778c387c02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80'
  return (
    <>
      <section className='mx-auto max-w-screen-xl px-4 xl:px-0'>
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
      <section className='md:mt-20 mx-auto max-w-screen-xl px-4 xl:px-0 py-10'>
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
                  Step 2
                </span>
              </span>
              <h1 className='text-xl text-gray-700 font-semibold'>Tell your story</h1>
              <p className='text-gray-500'>Share your story with the world </p>
            </div>
            <div className='relative'>
              <span className='relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-teal-500 mb-3 px-4'>
                <span className='relative text-sm uppercase italic text-white font-semibold'>
                  Step 3
                </span>
              </span>
              <h1 className='text-xl text-gray-700 font-semibold'>Share with others</h1>
              <p className='text-gray-500'>Let people know about your story and support</p>
            </div>
          </div>
        </div>
      </section>
      <section className='mx-auto max-w-screen-xl py-20 px-4 xl:px-0'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-20'>
          <div>
            <div className='h-[400px] bg-gray-300'></div>
          </div>
          <div>
            <h1 className='text-2xl md:text-5xl text-gray-500 mb-4 font-semibold'>
              Tell your story and share it with the world
            </h1>
            <p className='text-gray-500 text-sm leading-6'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, minus doloremque
              exercitationem soluta praesentium veniam quidem vitae voluptate dicta totam quibusdam,
              laboriosam nisi dolores sequi quod accusantium sint excepturi eos maiores quo facere.
              Accusamus laboriosam voluptas recusandae praesentium in nulla.
            </p>
            <button className='bg-teal-50 text-teal-500 rounded px-4 py-2 mt-4 font-semibold hover:bg-teal-500 hover:text-white transition duration-150 ease-in-out'>
              Learn more
            </button>
          </div>
          <div>
            <h1 className='text-2xl md:text-5xl text-gray-500 mb-4 font-semibold'>
              Set up a fundraiser for your new project
            </h1>
            <p className='text-gray-500 text-sm leading-6'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, minus doloremque
              exercitationem soluta praesentium veniam quidem vitae voluptate dicta totam quibusdam,
              laboriosam nisi dolores sequi quod accusantium sint excepturi eos maiores quo facere.
              Accusamus laboriosam voluptas recusandae praesentium in nulla.
            </p>
            <button className='bg-teal-50 text-teal-500 rounded px-4 py-2 mt-4 font-semibold hover:bg-teal-500 hover:text-white transition duration-150 ease-in-out'>
              Learn more
            </button>
          </div>
          <div>
            <div className='h-[400px] bg-gray-300'></div>
          </div>
        </div>
      </section>

      <section className='py-20 px-4 md:px-0 bg-teal-500 relative xl:bg-transparent'>
        <Image src={bg} layout='fill' objectFit='contain' className='hidden xl:block' />
        <div className='mx-auto max-w-screen-xl relative'>
          <div className=' items-center flex xl:hidden mb-10'>
            <div className='mt-20'>
              <div className='text-center text-white'>
                <h1 className='text-2xl font-bold mb-4'>
                  Register as professional and earn money providing services
                </h1>
                <p className='text-gray-200'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laudantium doloribus
                  laboriosam quidem enim quis porro, deleniti voluptas natus veritatis.
                </p>
                <button className='text-white bg-teal-800 rounded px-4 py-2 font-semibold mt-5'>
                  Become a validator
                </button>
              </div>
            </div>
          </div>
          <div className='relative flex touch-pan-x snap-x snap-mandatory snap-center place-items-center gap-5 overflow-x-scroll scroll-smooth scrollbar-hide md:flex-col xl:grid xl:grid-cols-3 xl:space-x-0'>
            <div className='relative flex space-x-4 xl:space-x-0 xl:flex-col xl:space-y-20 xl:w-full'>
              <div className='relative flex space-x-4'>
                <div className='relative h-[300px] w-[250px] rounded-xl'>
                  <Image src={img1} layout='fill' objectFit='cover' className='rounded-xl' />
                  <div className='absolute bottom-0 w-full p-3'>
                    <div className='w-full rounded-md bg-white px-3 py-2'>
                      <h1 className='font-semibold'>Project manager</h1>
                      <p className='text-xs text-gray-500'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, in!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='relative flex justify-end space-x-4'>
                <div className='relative'>
                  <div className='relative h-[300px] w-[250px] rounded-xl'>
                    <Image src={img4} layout='fill' objectFit='cover' className='rounded-xl' />
                    <div className='absolute bottom-0 w-full p-3'>
                      <div className='w-full rounded-md bg-white px-3 py-2'>
                        <h1 className='font-semibold'>Lawyer</h1>
                        <p className='text-xs text-gray-500'>
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, iusto.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className='xl:flex items-center hidden'>
              <div className='mt-20'>
                <div className='text-center text-white'>
                  <h1 className='text-2xl font-bold mb-4'>
                    Register as professional and earn money providing services
                  </h1>
                  <p className='text-gray-200'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laudantium
                    doloribus laboriosam quidem enim quis porro, deleniti voluptas natus veritatis.
                  </p>
                  <button className='text-white bg-teal-800 rounded px-4 py-2 font-semibold mt-5'>
                    Become a validator
                  </button>
                </div>
              </div>
            </div>
            {/*  */}
            <div className='relative flex space-x-4 xl:space-x-0 xl:flex-col xl:space-y-20 xl:w-full'>
              <div className='relative flex space-x-4'>
                <div className='relative h-[300px] w-[250px] rounded-xl'>
                  <Image src={img2} layout='fill' objectFit='cover' className='rounded-xl' />
                  <div className='absolute bottom-0 w-full p-3'>
                    <div className='w-full rounded-md bg-white px-3 py-2'>
                      <h1 className='font-semibold'>Project manager</h1>
                      <p className='text-xs text-gray-500'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, in!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='relative flex justify-end space-x-4'>
                <div className='relative'>
                  <div className='relative h-[300px] w-[250px] rounded-xl'>
                    <Image src={img3} layout='fill' objectFit='cover' className='rounded-xl' />
                    <div className='absolute bottom-0 w-full p-3'>
                      <div className='w-full rounded-md bg-white px-3 py-2'>
                        <h1 className='font-semibold'>Lawyer</h1>
                        <p className='text-xs text-gray-500'>
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, iusto.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-10 px-4 md:px-0'>
        <RecentDonations />
      </section>
    </>
  )
}

export default Home
