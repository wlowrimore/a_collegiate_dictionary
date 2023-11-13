'use client'

import { useState, useEffect } from 'react';

const WordMeaning = () => {
  const [terms, setTerms] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://www.dictionaryapi.com/api/v3/references/collegiate/json/bourgeois?key=98d5b6b8-b545-48e7-8b1f-6b002e720ca3');
      const data = await res.json();
      console.log(data);
      setTerms(data)
    }
    fetchData()
  }, [])

  const termDef = terms?.map((term, index) => {
    return term.shortdef
  })

  const combinedArray = termDef.flatMap((str) => {
    if (typeof str === 'string') {
      return str.split(',');
    } else {
      return [str];
    }
  })

  return (
    <div className=''>
      <form method='post' className='lg:w-1/3 flex justify-center mx-auto mb-12'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-neutral-950 bg-white font-semibold">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <input type='search' placeholder='search' className='h-3rem w-full border-none outline-none placeholder:text-neutral-400 focus:border-gray-400 px-1 text-gray-950 text-xl tracking-wide' />
      </form>
      {terms?.map((term, termsIndex) => (
        <div key={termsIndex} className='flex flex-col justify-center'>
          <div className='flex gap-3'>
            <h1 className='text-3xl text-blue-300'>Entry:</h1>
            <h1 className='text-3xl text-orange-300'>{term.meta.id}<span className='ml-2 text-lg text-blue-100 tracking-wider'>({term.hwi.hw})</span></h1>
          </div>
          <div className='flex flex-col my-4 justify-center space-y-6'>
            {combinedArray?.map((definition, comboIndex) => (
              <div key={comboIndex} className='flex gap-2'>
                <h1 className='text-lg tracking-wide text-neutral-300'>Definition:</h1>
                <h1 className='text-lg tracking-wide text-blue-200'>{definition}</h1>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default WordMeaning;
