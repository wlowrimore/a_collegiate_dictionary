'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react';
import AudioPlayer from './AudioPlayer';
import Four0Four from './ui/four0four';

const API_KEY = process.env.NEXT_PUBLIC_DICT_API_KEY
const BASE_URL = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json'

const WordMeaning = () => {
  const [query, setQuery] = useState('');
  const [entry, setEntry] = useState('');
  const [queryErrMsg, setQueryErrMsg] = useState('');
  const [queryEntryMsg, setQueryEntryMsg] = useState('');
  const [extractedQuery, setExtractedQuery] = useState('');

  const handleSearch = async () => {
    try {
      const res = await fetch(`${BASE_URL}/${query}?key=${API_KEY}`)
      const data = await res.json();

      if (Array.isArray(data) && data.length > 0) {
        setEntry(data[0]);
        setQueryErrMsg('');
        setQueryEntryMsg('');
      } else {
        const errorMessage = `Sorry...${query} was not found.`
        setEntry('');
        setQueryErrMsg(errorMessage);
        setQueryEntryMsg('');

        // Extract {query} from error message to pass in props to child component

        const extractedQuery = errorMessage.match(/Sorry\.\.\.(.*) was not found\./)?.[1];
        setExtractedQuery(extractedQuery);
      }
    } catch (error) {
      console.error('an error has occured.', error.message)
      setQuery('')
      setQueryErrMsg('Please enter a valid search term.');
      setQueryEntryMsg('');
    }
    setQuery('')
  };

  useEffect(() => {
    setQueryEntryMsg(!query ? 'Please enter your search term.' : '');
  }, [query]);

  console.log(entry);

  const artCaption = entry?.art?.capt?.replace(/{it}/g, '').replace(/{\/it}/g, '')

  const entryDate = entry?.date?.replace(/{ds\|\|[^}]+\|}/g, '');

  return (
    <div className='w-full'>
      <section className='flex mb-12 mx-auto gap-3 justify-center'>
        <div className='flex flex-col'>
          <input
            type='text'
            placeholder='search'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='h-[2rem] border bordeer-green-400 rounded-md outline-none placeholder:text-neutral-400 focus:border-gray-400 px-1 text-gray-950 text-xl tracking-wide'
          />
          {queryErrMsg && (
            <div className='text-rose-300'>{queryErrMsg}</div>
          )}
          {queryEntryMsg && !queryErrMsg && (
            <div>{queryEntryMsg}</div>
          )}

        </div>
        <button onClick={handleSearch} className='h-[2rem] flex px-2 gap-1 items-center border border-white rounded-lg text-white bg-sky-600 font-semibold hover:bg-white hover:text-sky-600 hover:scale-95 transform duration-300 active:outline-none'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          Search
        </button>
      </section>
      <section className='w-full flex mx-auto'>
        {entry?.meta?.id ? (
          <div className='flex flex-col items-center w-full'>
            {/* entry word and etymology */}
            <div className='flex flex-col items-start mb-6 w-full mx-auto'>
              <h1 className='text-4xl text-orange-300'>
                {entry.meta.stems[0]}
                <span className='ml-2 text-lg text-blue-100 tracking-wider'>({entry.hwi.hw})</span>
              </h1>
              <div className='flex w-full gap-1 mb-4'>
                {entry?.uros?.map((uro, urosIndex) => (
                  <p key={urosIndex} className='text-sm'><em>{uro.ure}</em>&nbsp;&nbsp;|</p>
                ))}
              </div>
              <div>
                {entryDate && (
                  <p className='text-teal-200 text-sm mb-4'>First Known Use:&nbsp;{entryDate}</p>
                )}
              </div>
              {entry?.et && (
                <div>
                  <p className='text-blue-200 font-light italic tracking-wide'>Etymology - <span className='text-rose-200'>{entry.et}</span></p>
                </div>
              )}
              <AudioPlayer entry={entry} />
              <div className='bg-neutral-300/20 h-[1px] w-full mt-6' />
            </div>
            {/* image and definition(s) */}
            <div className='grid grid-cols-2 w-full mb-3'>
              {entry?.art && artCaption ? (
                <div className='w-full flex gap-6'>
                  <div className='w-full flex justify-center'>
                    <Image src={`https://www.merriam-webster.com/assets/mw/static/art/dict/${entry.art.artid}.gif`} alt='' width={400} height={300} className='rounded-lg my-2' />
                  </div>
                  <div className='flex justify-center'>
                    <p className='w-[400px] text-justify'>{artCaption}</p>
                  </div>
                </div>
              ) : (
                <div className='flex items-center justify-center w-[400px] h-[300px] bg-neutral-600 border border-neutral-300 rounded-lg text-3xl'>Image not available</div>
              )}
            </div>
            <div className='w-full'>
              {entry.shortdef.map((definition, defIndex) => (
                <div key={defIndex} className='flex gap-2 text-justify'>
                  <p className='text-orange-300'>{defIndex + 1}.</p>
                  <p className='text-blue-50 text-justify'>{definition}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className='flex flex-col w-full items-center my-24'>
            <Four0Four
              extractedQuery={extractedQuery}
            />
          </div>
        )}
      </section>
    </div>
  )
}

export default WordMeaning;
