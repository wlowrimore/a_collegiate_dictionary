'use client'

import { useState, useEffect } from "react";
import ThesSearchForm from "./ui/search-forms/ThesSearchForm"
import Four0Four from "./ui/four0four";
import ThesPagePlaceholder from "./ui/ThesPagePlaceholder";
import MobileHeader from "./MobileHeader";

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
  const entryDate = entry?.date?.replace(/{ds\|\|[^}]+\|}/g, '');
  const isQueryNotFound = queryErrMsg || !queryEntryMsg && !query;

  const synsArr = entry?.meta?.syns
  const antsArr = entry?.meta?.ants

  return (
    <div className='flex flex-col mx-auto mb-[4rem] max-w-full'>
      <div className='hidden md:block'>
        <ThesSearchForm
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
            <div className='flex flex-col items-center px-4 mx-auto gap-2 w-full'>
              <div className='w-full text-start flex mt-4 mb-4'>
                {entry.meta.stems.length > 1 ? (
                  <ul className='text-sm md:text-lg lg:text-2xl flex flex-wrap text-orange-300'>
                    {entry.meta.stems.map((stem, stemsIndex) => (
                      <li key={stemsIndex} className='flex capitalize'>
                        {stem}&nbsp;{stemsIndex < entry.meta.stems.length - 1 && '|'}&nbsp;
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className='text-lg md:text-2xl flex text-orange-300 capitalize'>
                    {entry.meta.stems[0]}
                  </p>
                )}
              </div>
              <div className='w-full flex flex-col md:flex-row justify-between'>
                <div className='flex flex-col'>
                  {entry.shortdef.map((definition, defIndex) => (
                    <div key={defIndex} className='flex gap-2 text-justify'>
                      <p className='text-orange-300'>{defIndex + 1}.</p>
                      <p className='text-blue-50 text-justify'>{definition}</p>
                    </div>
                  ))}
                </div>
                {entry ? (
                  <h3 className='flex text-md tracking-wider md:text-2xl text-blue-300 font-bold md:tracking-wide capitalize items-center mt-4'>{entry?.fl}</h3>
                ) : null}
              </div>
              <div className='mt-4'>
                <h1 className='text-neutral-800 bg-sky-200 w-full border border-neutral-800 rounded-md px-2 text-3xl font-bold tracking-wide mb-6'>Synonyms</h1>
                {synsArr && synsArr.map((synGroup, groupIndex) => (
                  <div key={groupIndex} className='flex flex-wrap mx-[-3]'>
                    {synGroup.map((synonym, synonymIndex) => (
                      <span key={synonymIndex} className='flex-grow text-lg font-semibold py-1 px-3 bg-neutral-900/60 rounded-md mb-1 mr-1 capitalize'>
                        {synonym}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
              <div className='mt-10'>
                <h1 className='text-neutral-800 bg-orange-300 w-full border border-neutral-800 rounded-md px-2 text-3xl font-bold tracking-wide mb-6'>Antonyms</h1>
                {antsArr && antsArr.map((antGroup, groupIndex) => (
                  <div key={groupIndex} className='flex flex-wrap mx-[-3]'>
                    {antGroup.map((antonym, antonymIndex) => (
                      <span key={antonymIndex} className='flex-grow text-lg font-semibold py-1 px-3 bg-neutral-900/60 rounded-md mb-1 mr-1 capitalize'>
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



