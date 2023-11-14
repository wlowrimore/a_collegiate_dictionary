'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';
const API_KEY = process.env.NEXT_PUBLIC_DICT_API_KEY

const WordMeaning = () => {
  const [terms, setTerms] = useState([])
  const [query, setQuery] = useState('')



  // useEffect(() => {
  //   const handleSearch = async (query) => {
  //     const res = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${query}?key=${API_KEY}`);
  //     const data = await res.json();
  //     setTerms(data)
  //   }
  //   handleSearch()
  // }, [])

  const handleSearch = async () => {
    try {
      const res = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${query}?key=${API_KEY}`)

      const data = await res.json();
      console.log(data);
      setTerms(data)

      setQuery('')
    } catch (error) {
      console.log('An error has occurred:', error.message)
      setTerms(['Error retrieving the definition'])
    }
  }


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
      <section className='lg:w-2/3 flex justify-center mx-auto mb-12 gap-3'>

        <input
          type='text'
          placeholder='search'
          onChange={(e) => setQuery(e.target.value)}
          className='h-3rem w-full border bordeer-green-400 rounded-md outline-none placeholder:text-neutral-400 focus:border-gray-400 px-1 text-gray-950 text-xl tracking-wide'
        />
        <button onClick={handleSearch}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 border border-white rounded-lg text-white bg-sky-600 font-semibold hover:bg-white hover:text-sky-600 hover:scale-95 transform duration-300 active:outline-none">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>

      </section>
      {terms?.map((term, termsIndex) => (
        <div key={termsIndex} className='flex flex-col justify-center'>

          {term.meta &&
            <>
              <div className='flex gap-3'>
                <h1 className='text-3xl text-blue-300'>Entry:</h1>
                <h1 className='text-3xl text-orange-300'>{term.meta.id}<span className='ml-2 text-lg text-blue-100 tracking-wider'>({term.hwi.hw})</span></h1>

              </div>
              {term.et &&
                <div className='mt-2 mb-4 text-rose-300/70 gap-2 w-full flex italic'>
                  <p className=''>etymology:</p>
                  <p className='text-sm tracking-wide mt-1'>{term.et}</p>
                </div>
              }
              <Image src='https://www.merriam-webster.com/assets/mw/static/art/dict/bird.gif' alt='' width={400} height={300} className='rounded-lg my-2' />
              <div className='flex flex-col my-4 justify-center space-y-6'>
                {combinedArray?.map((definition, comboIndex) => (
                  <div key={comboIndex} className='flex gap-2'>
                    <h1 className='text-lg tracking-wide text-neutral-300'>Definition:</h1>
                    <h1 className='text-lg tracking-wide text-blue-200'>{definition}</h1>
                  </div>
                ))}
              </div>
            </>
          }
        </div>
      ))}
      <div className='h-[32rem] flex justify-center items-center text-6xl text-red-400 animate-pulse'>

        <h1>word not found in dictionary</h1>

      </div>
    </div>
  )
}

export default WordMeaning;
