'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === '/';

  return (
    !isHomePage && (
      <div className='flex flex-col mx-auto items-center py-12 px-4 lg:px-[5rem]'>
        <div className=''>
          <div className='w-full bg-neutral-300 h-[1px]' />
          <div className='w-full flex justify-center items-center space-y-2'>
            <h1 className='text-4xl mt-2'>Collegiate Resource Hub</h1>
          </div>
          <div className='flex justify-between px-12'>
            <Link href='/dictionary' className='hover:text-blue-400 transition ease-in duration-200 p-2 tracking-wider'>Dictionary</Link>
            <Link href='/' className='hover:text-rose-300 transition ease-in duration-200 p-2 tracking-wider'>Home</Link>
            <Link href='/thesaurus' className='hover:text-amber-500 transition ease-in duration-200 p-2 tracking-wider'>Thesaurus</Link>
          </div>
          <div className='w-full bg-neutral-300 h-[1px]' />
        </div>
      </div>
    )
  )
}
