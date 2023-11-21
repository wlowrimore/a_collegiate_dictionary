import Image from "next/image"
import Link from "next/link"

const DictPagePlaceholder = () => {
  return (
    <div className='flex w-full gap-8 justify-center pt-24'>
      <div className='bg-gradient-to-b from-blue-600 to-white bg-clip-text text-transparent flex flex-col w-1/3'>
        <h2 className='text-5xl font-bold'>Welcome to the <span className='text-white'>Collegiate Resource Hub</span> Dictionary Page.</h2>
        <p className='text-2xl font-semibold text-justify mt-2'>This collegiate dictionary is a product of the Merriam-Webster Inc Open Source API.</p>
        <p className='mt-2 text-sm'>All of the data rendered is provided by the API. Not all data will include an image, image context, etymology, or audio.</p>
      </div>
      <Link href='https://www.mirram-webster.com' className='flex flex-col'>
        <Image
          src='/Merriam-Webster_logo.svg.png'
          alt='merriam-webster logo'
          width={300}
          height={300}
          className='opacity-70'
        />
      </Link>
    </div>
  )
}

export default DictPagePlaceholder