import Image from "next/image"

const PagePlaceholder = () => {
  return (
    <div className='flex w-full gap-8 justify-center pt-24'>
      <div className='flex flex-col w-1/3'>
        <h2 className='text-5xl font-bold'>Welcome to the Collegiate Resource Hub Dictionary Page.</h2>
        <p className='text-2xl font-semibold text-justify mt-2'>This collegiate dictionary is a product of the Merriam-Webster Inc Open Source API.</p>
        <p className='mt-2 text-sm'>All of the data rendered is provided by the API. Not all data will include an image, image context, etymology, or audio.</p>
      </div>
      <div className='flex flex-col'>
        <Image
          src='/Merriam-Webster_logo.svg.png'
          alt='merriam-webster logo'
          width={300}
          height={300}
          className='opacity-70'
        />
      </div>
    </div>
  )
}

export default PagePlaceholder