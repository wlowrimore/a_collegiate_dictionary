'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react';
import AudioPlayer from './AudioPlayer';
import Four0Four from './ui/four0four';
import DictPagePlaceholder from './ui/DictPagePlaceholder';
import DefSearchForm from './ui/search-forms/DefSearchForm';

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

      console.log('API Response:', data);

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

  // console.log(entry);

  const hasEntry = entry?.meta?.id;

  const artCaption = entry?.art?.capt?.replace(/{it}/g, '').replace(/{\/it}/g, '')
  const entryDate = entry?.date?.replace(/{ds\|\|[^}]+\|}/g, '');

  const isQueryNotFound = queryErrMsg || !queryEntryMsg && !query;

  return (
    <div className='w-full'>
      <DefSearchForm
        setQuery={setQuery}
        queryErrMsg={queryErrMsg}
        queryEntryMsg={queryEntryMsg}
        query={query}
        handleSearch={handleSearch}
      />
      <section className='w-full flex mx-auto'>
        {isQueryNotFound ? (
          <div className='flex flex-col w-full items-center my-12'>
            <Four0Four
              extractedQuery={extractedQuery}
            />
          </div>
        ) : (
          entry?.meta?.id ? (
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
            <DictPagePlaceholder />
          )
        )}
      </section>
    </div>
  )
}

export default WordMeaning;  
