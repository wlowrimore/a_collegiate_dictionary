'use client'

import { useState } from 'react'

const ThesMobileSearchForm = () => {
  return (
    <div className='absolute bottom-[3.5rem] w-full px-4'>
      <div className='w-full z-100 bg-white/90 flex flex-col items-center justify-center rounded-tr-lg rounded-tl-lg'>
        <div className='w-full'>
          <p className='w-fit py-1 px-3 text-start text-lg text-white font-semibold tracking-wide bg-amber-700 rounded-tl-lg rounded-br-lg'>Search Thesaurus</p>
        </div>
        <div className='flex flex-col px-4 py-12 w-full'>
          <input
            type='text'
            placeholder='Search'
            className='text-neutral-950 border-b border-neutral-500 bg-transparent placeholder:text-neutral-500/70 outline-none'
          />
          <div className='flex mt-6 gap-4'>
            <button className='text-lg py-1 px-3 rounded-lg bg-neutral-950'>Search</button>
            <button className='text-lg text-neutral-950'>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default ThesMobileSearchForm