import React from 'react'
import WordMeaning from '../components/FetchData'

export default function DictionaryPage() {
  return (
    <div className='flex flex-col'>
      <div className='container flex justify-center mx-auto my-12'>
        <WordMeaning />
      </div>
    </div>
  )
}
