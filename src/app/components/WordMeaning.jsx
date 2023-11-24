'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react';
import AudioPlayer from './AudioPlayer';
import Four0Four from './ui/four0four';
import DictPagePlaceholder from './ui/DictPagePlaceholder';
import DefSearchForm from './ui/search-forms/DefSearchForm';
import MobileHeader from './MobileHeader';

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

        // Extract query (search word) from error message and then extract the first character of that query, as it is needed to render the correct subdirectory for the api endpoint.
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

  const hasEntry = entry?.meta?.id;

  const artCaption = entry?.art?.capt?.replace(/{it}/g, '').replace(/{\/it}/g, '')
  const entryDate = entry?.date?.replace(/{ds\|\|[^}]+\|}/g, '');

  const isQueryNotFound = queryErrMsg || !queryEntryMsg && !query;

  return (
    <div className='flex flex-col overflow-y-auto mb-[4rem]'>
      <div className='hidden md:block'>
        <DefSearchForm
          setQuery={setQuery}
          queryErrMsg={queryErrMsg}
          queryEntryMsg={queryEntryMsg}
          query={query}
          handleSearch={handleSearch}
        />
      </div>
      <div className='md:hidden flex flex-col'>
        <MobileHeader
          setQuery={setQuery}
          queryErrMsg={queryErrMsg}
          queryEntryMsg={queryEntryMsg}
          query={query}
          handleSearch={handleSearch}
        />
      </div>
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
              <div className='flex flex-col items-start mb-6 w-full mx-auto px-4'>
                <h1 className='flex flex-col md:flex-row md:items-end text-4xl text-orange-300 capitalize'>
                  {entry.meta.stems[0]}
                  <span className='md:ml-2 text-lg text-blue-100 tracking-wider lowercase'>({entry.hwi.hw})</span>
                </h1>
                <div className='flex flex-wrap w-full gap-1 mb-4'>
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
                {/* Audio */}
                <AudioPlayer entry={entry} />
                <div className='bg-neutral-300/20 h-[1px] w-full' />
              </div>
              {/* image and definition(s) */}
              <div className='flex flex-col md:grid grid-cols-2 w-full mb-3'>
                {entry?.art && artCaption ? (
                  <div className='w-full flex flex-col xl:flex-row gap-6 px-4'>
                    <div className='w-full flex justify-center'>
                      <Image src={`https://www.merriam-webster.com/assets/mw/static/art/dict/${entry.art.artid}.gif`} alt='' width={400} height={300} className='rounded-lg my-2' />
                    </div>
                    <div className='flex justify-center'>
                      <p className='w-[400px]'>{artCaption}</p>
                    </div>
                  </div>
                ) : (
                  null
                )}
              </div>
              <div className='flex flex-wrap flex-col md:flex-start md:w-full px-4'>
                <h3 className='text-lg text-blue-300 mt-4 mb-2'>Definition(s)</h3>
                {entry.shortdef.map((definition, defIndex) => (
                  <div key={defIndex} className='flex gap-2'>
                    <p className='text-orange-300'>{defIndex + 1}.</p>
                    <p className='text-blue-50 mb-2'>{definition}</p>
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
