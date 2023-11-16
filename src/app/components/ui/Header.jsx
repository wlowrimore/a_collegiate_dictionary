import Image from 'next/image'

export default function Header() {
  return (
    <div className='flex flex-col mx-auto items-center py-12 px-4 lg:px-[5rem]'>
      <div className=''>
        <div className='w-full bg-neutral-300 h-[1px]' />
        <div className='w-full flex justify-center items-center'>
          <h1 className='text-4xl my-6'>Collegiate Resource Hub</h1>
          <div className='md:hidden flex justify-end w-full px-4 opacity-50'>
            <Image src='/logo.webp' alt='logo' width={96} height={96} />
          </div>
        </div>
        <div className='w-full bg-neutral-300 h-[1px]' />
      </div>
    </div>
  )
}
