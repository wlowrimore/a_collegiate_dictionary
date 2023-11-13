import Image from 'next/image'
import WordMeaning from './components/FetchData'

export default function Home() {
  return (
    <div className='flex flex-col mx-auto items-center py-12 px-[15rem]'>
      <div className='w-full flex items-center'>
        <div className='w-full bg-neutral-300 h-[1px]' />
        <h1 className='text-4xl w-full text-center my-6'>Collegiate Dictionary</h1>
        <div className='w-full bg-neutral-300 h-[1px]' />
      </div>
      <div className='my-12'><WordMeaning /></div>
    </div>
  )
}
