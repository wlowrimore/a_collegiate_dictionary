'use client'

import { useState } from 'react'

const DictMobileSearchForm = () => {
  return (
    <div className='absolute bottom-[3.5rem] w-96 z-100 bg-white/90 flex flex-col items-center justify-center rounded-tr-lg rounded-tl-lg'>
      <div className='w-full'>
        <p className='w-fit py-1 px-3 text-start text-lg text-white font-semibold tracking-wide bg-blue-500 rounded-tl-lg rounded-br-lg'>Search Dictionary</p>
      </div>
      <form className='flex flex-col px-4 py-12 w-full'>
        <input
          type='text'
          placeholder='Search'
          className='text-neutral-950 border-b border-neutral-500 bg-transparent placeholder:text-neutral-500/70 outline-none'
        />
        <div className='flex mt-6 gap-4'>
          <button className='text-lg py-1 px-3 rounded-lg bg-neutral-950'>Search</button>
          <button className='text-lg text-neutral-950'>Cancel</button>
        </div>
      </form>
      {/* className='h-[2rem] border bordeer-green-400 rounded-md outline-none placeholder:text-neutral-400 focus:border-gray-400 px-1 text-gray-950 text-xl tracking-wide' */}
    </div>
  )
}


export default DictMobileSearchForm