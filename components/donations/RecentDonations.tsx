import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import data from '../../utils/campaigns.json'
import Campaign from './Campaign'

const RecentDonations = () => {
  const maxScrollWidth = useRef(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1)
    }
  }

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1)
    }
  }

  const isDisabled = (direction: string) => {
    if (direction === 'prev') {
      return currentIndex <= 0
    }

    if (direction === 'next' && carousel.current !== null) {
      return carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
    }

    return false
  }

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex
    }
  }, [currentIndex])

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0
  }, [])
  return (
    <div>
      <div className='flex justify-between items-center mx-auto max-w-screen-xl mb-10 px-4 xl:px-0'>
        <h1 className='text-2xl font-semibold'>New Campaigns</h1>
        <div className='flex space-x-2'>
          <button
            className='border border-gray-200 text-gray-600 hover:bg-gray-100 transition duration-150 ease-in-out h-10 w-10 text-2xl flex justify-center items-center rounded disabled:hidden'
            onClick={movePrev}
            disabled={isDisabled('prev')}
          >
            <BsArrowLeftShort />
          </button>
          <button
            className='border border-gray-200 text-gray-600 hover:bg-gray-100 transition duration-150 ease-in-out h-10 w-10 text-2xl flex justify-center items-center rounded disabled:hidden'
            onClick={moveNext}
            disabled={isDisabled('next')}
          >
            <BsArrowRightShort />
          </button>
        </div>
      </div>
      <div
        className='relative mx-auto mt-5 2xl:px-0 flex max-w-screen-xl touch-pan-x snap-x snap-mandatory snap-center md:space-x-5 overflow-x-scroll scroll-smooth xl:overflow-hidden space-x-2 xl:space-x-0'
        ref={carousel}
      >
        {data.map((campaign) => (
          <Campaign data={campaign} key={campaign.id} />
        ))}
      </div>
      <div className='flex justify-center mt-10'>
        <button className='bg-teal-50 text-teal-500 rounded px-4 py-2 mt-4 font-semibold hover:bg-teal-500 hover:text-white transition duration-150 ease-in-out'>
          More campaigns
        </button>
      </div>
    </div>
  )
}

export default RecentDonations
