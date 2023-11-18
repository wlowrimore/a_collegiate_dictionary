import React from 'react'

const RefreshButton = () => {

  const handlePageRefresh = () => {
    window.location.reload();
  }

  return (
    <button onClick={handlePageRefresh} className='h-[2rem] flex px-2 gap-1 items-center border border-white rounded-lg text-white bg-sky-600 font-semibold hover:bg-white hover:text-sky-600 hover:scale-95 transform duration-300 active:outline-none'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 animate-spin">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
      Refresh
    </button>
  )
}

export default RefreshButton