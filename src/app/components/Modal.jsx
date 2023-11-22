'use client'

import { useState } from 'react'

const Modal = ({ isOpen, onClose }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
  };

  return (
    <>
      {isOpen && (
        <div className='w-screen h-screen absolute top-0 left-0 flex flex-col items-center justify-center bg-neutral-800/90'>
          <form className='relative bg-neutral-800 border-2 border-neutral-500 rounded-lg p-10'>
            <h3 className='text-2xl mt-2 mb-16 text-neutral-300'>Describe your issue.</h3>
            <div className='flex flex-col space-y-8'>
              <div className='flex gap-4'>
                <input type='text' name='first-name' placeholder='first name' className='w-full bg-transparent text-white border-b border-neutral-300 placeholder:opacity-40 focus:outline-none px-1' />
                <input type='text' name='last-name' placeholder='last name' className='w-full bg-transparent text-white border-b border-neutral-300 placeholder:opacity-40 focus:outline-none px-1' />
              </div>
              <input type='email' name='email' placeholder='example@user.com' className='w-full bg-transparent text-white border-b border-neutral-300 placeholder:opacity-40 focus:outline-none px-1' />
              <input type='text' name='subject' placeholder='subject' className='w-full bg-transparent text-white border-b border-neutral-300 placeholder:opacity-40 focus:outline-none px-1' />
              <textarea
                placeholder='type your message'
                style={{ overflow: 'hidden' }}
                rows='1'
                value={text}
                onChange={handleChange}
                className='w-full resize-none h-auto bg-transparent text-white border-b border-neutral-300 placeholder:opacity-40 focus:outline-none px-1' />
            </div>
            <div className='flex gap-4 pt-12'>
              <button type='submit'
                className='bg-teal-400/70 text-neutral-950 text-xl font-bold py-1 px-3 border border-neutral-300 rounded-md hover:opacity-60 transform ease duration-300'>
                Send
              </button>
              <button type='submit' onClick={onClose} className='bg-red-400/60 text-neutral-950 text-xl font-bold py-1 px-3 border border-neutral-300 rounded-md hover:opacity-70 transform ease duration-300'>
                Cancel
              </button>
            </div>
            <button onClick={onClose} className='absolute top-2 right-4 text-2xl text-neutral-300 hover:scale-110 hover:text-red-400 transform ease-in duration-300'>X</button>
          </form>
        </div>
      )}
    </>
  )
}

export default Modal