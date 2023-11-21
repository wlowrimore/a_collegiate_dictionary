'use client'

import { useState, useEffect } from "react";
import ThesSearchForm from "./ui/search-forms/ThesSearchForm"
import Four0Four from "./ui/four0four";
import ThesPagePlaceholder from "./ui/ThesPagePlaceholder";

const API_KEY = process.env.NEXT_PUBLIC_THES_API_KEY
const BASE_URL = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/'

const WordSyn = () => {
  const [query, setQuery] = useState('');
  const [entry, setEntry] = useState('');
  const [queryErrMsg, setQueryErrMsg] = useState('');
  const [queryEntryMsg, setQueryEntryMsg] = useState('');
  const [extractedQuery, setExtractedQuery] = useState('');

  const handleSearch = async () => {
    try {
      const res = await fetch(`${BASE_URL}/${query}?key=${API_KEY}`)
      const data = await res.json();

      console.log(data);

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

  // const artCaption = entry?.art?.capt?.replace(/{it}/g, '').replace(/{\/it}/g, '')
  const entryDate = entry?.date?.replace(/{ds\|\|[^}]+\|}/g, '');

  const isQueryNotFound = queryErrMsg || !queryEntryMsg && !query;

  const synsArr = entry?.meta?.syns
  const antsArr = entry?.meta?.ants

  const noAnts = 'No Antonyms Found'
  const noSyns = 'No Synonyms Found'


  return (
    <div className='flex flex-col mx-auto '>
      <ThesSearchForm
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
            <div className='flex flex-col items-center mx-auto gap-2 w-full'>
              <div className='flex mt-4 mb-8'>
                {entry.meta.stems.map((stem, stemsIndex) => (
                  <ul key={stemsIndex} className='text-2xl flex text-orange-300'>
                    <li>{stem}&nbsp;|&nbsp;</li>
                  </ul>
                ))}
              </div>
              <div className='w-full'>
                {entry.shortdef.map((definition, defIndex) => (
                  <div key={defIndex} className='flex gap-2 text-justify'>
                    <p className='text-orange-300'>{defIndex + 1}.</p>
                    <p className='text-blue-50 text-justify'>{definition}</p>
                  </div>
                ))}
              </div>
              <div className='mt-4'>
                <h1 className='text-neutral-800 bg-sky-300 w-full border border-neutral-800 rounded-md px-2 text-3xl font-bold tracking-wide mb-6 uppercase'>Synonyms</h1>
                {synsArr && synsArr.map((synGroup, groupIndex) => (
                  <div key={groupIndex} className='grid grid-cols-5 gap-3'>
                    {synGroup.map((synonym, synonymIndex) => (
                      <span key={synonymIndex} className='text-lg font-semibold py-1 px-3 bg-neutral-900/60 rounded-md'>
                        {synonym}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
              <div className='mt-10'>
                <h1 className='text-neutral-800 bg-amber-700 w-full border border-neutral-800 rounded-md px-2 text-3xl font-bold tracking-wide mb-6 uppercase'>Antonyms</h1>
                {antsArr && antsArr.map((antGroup, groupIndex) => (
                  <div key={groupIndex} className='grid grid-cols-5 gap-3'>
                    {antGroup.map((antonym, antonymIndex) => (
                      <span key={antonymIndex} className='text-lg font-semibold py-1 px-3 bg-neutral-900/60 rounded-md'>
                        {antonym}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <ThesPagePlaceholder />
          )
        )}
      </section>
    </div>
  )
}

export default WordSyn