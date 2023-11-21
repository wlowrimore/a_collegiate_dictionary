import React from 'react'
import RefreshButton from '../RefreshButton'

const ThesSearchForm = ({
  setQuery,
  queryErrMsg,
  queryEntryMsg,
  query,
  handleSearch,
  handlePageRefresh
}) => {
  return (
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
      {queryErrMsg ? (
        <RefreshButton handlePageRefresh={handlePageRefresh} />
      ) : (
        <button onClick={handleSearch} className='h-[2rem] flex px-2 gap-1 items-center border border-white rounded-lg text-white bg-amber-600/70 font-semibold hover:bg-white hover:text-sky-600 hover:scale-95 transform duration-300 active:outline-none'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          Search
        </button>
      )}
    </section>
  )
}

export default ThesSearchForm