import Image from 'next/image'
import WordMeaning from './components/FetchData'

export default function Home() {
  return (
    <div className='flex flex-col mx-auto items-center py-12 px-4 lg:px-[5rem]'>
      <div className=''>
        <div className='w-full bg-neutral-300 h-[1px]' />
        <div className='w-full flex justify-center items-center'>
          <h1 className='text-4xl my-6'>Collegiate Dictionary</h1>
          <div className='md:hidden flex justify-end w-full px-4 opacity-50'>
            <Image src='/logo.webp' alt='logo' width={96} height={96} />
          </div>
        </div>
        <div className='w-full bg-neutral-300 h-[1px]' />
      </div>
      <div className='container flex justify-center mx-auto my-12'><WordMeaning /></div>
    </div>
  )
}
