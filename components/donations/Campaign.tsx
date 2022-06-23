import Image from 'next/image'

const Campaign = ({ data }: any) => {
  const { cover_image, title, bio, amount } = data
  return (
    <div className='border border-gray-200 group w-full md:w-[300px] flex flex-col flex-shrink-0 flex-grow-0 rounded p-4 relative'>
      <div className='h-[210px] w-full relative rounded overflow-hidden'>
        <Image
          src={cover_image}
          layout='fill'
          objectFit='cover'
          className='rounded group-hover:scale-110 duration-200 ease-in-out transition'
        />
      </div>
      <div className='mt-3 relative h-auto flex-1'>
        <h1 className='font-semibold mb-3'>{title}</h1>
        <p className='text-gray-500 text-sm mb-8'>{bio}</p>
        <div className='flex justify-between text-sm mt-2 absolute bottom-0 w-full'>
          <span className='font-semibold'>
            ${amount} <span>raised</span>
          </span>
          <span className='font-semibold'>
            129 <span>donations</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Campaign
