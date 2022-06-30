import React from 'react'
import Campaign from '../components/donations/Campaign'
import data from '../utils/campaigns.json'

const discover = () => {
  return (
    <>
      <section className='bg-gray-50 py-10'>
        <div className='mx-auto max-w-screen-xl px-4'>
          <div>
            <h1 className='text-3xl font-semibold'>Browse Categories</h1>
          </div>
        </div>
      </section>
      <section className='mx-auto max-w-screen-xl px-4'>
        <div className='py-10'>
          <h1 className='text-3xl font-semibold mb-10'>Charity</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
            {data.slice(0, 8).map((campaign) => (
              <Campaign data={campaign} width='100%' key={campaign.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default discover
