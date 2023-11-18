'use client'

import { useState } from 'react';
import Modal from "../Modal"
const Four0Four = ({ extractedQuery }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReportIssueClick = () => {
    setIsModalOpen(true);
    console.log('clicked')
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  return (

    <div className="w-[30rem] p-8 bg-gradient-to-b from-amber-900 to-neutral-300 bg-clip-text text-transparent">
      <div className="notfound-404">
        <h1 className='text-center text-7xl'>404</h1>
      </div>
      <h2 className='pb-2 text-center text-2xl'>Oops! Nothing was found</h2>
      <p className='pb-4 text-justify'>It seems as though the entry ({extractedQuery}) you are looking for was not found in this dictionary.</p>

      <button onClick={handleReportIssueClick}>Modal</button>

      <p className='text-xs'>
        If you feel this error to be a mistake, please&nbsp;
        <span onClick={handleReportIssueClick} className='cursor-pointer text-blue-300 hover:underline'>
          report the issue
        </span>&nbsp;
        and we will gladly investigate it.
      </p>
      <div className=''>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </div>

  )
}

export default Four0Four