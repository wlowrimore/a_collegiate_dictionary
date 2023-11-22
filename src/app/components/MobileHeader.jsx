'use client'

import Link from "next/link"
import { useState } from "react";
import MobileSearchForm from "./ui/search-forms/DictMobileSearchForm";
import DictMobileSearchForm from "./ui/search-forms/DictMobileSearchForm";
import { usePathname } from "next/navigation";
import ThesMobileSearchForm from "./ui/search-forms/ThesMobileSearchForm";

const MobileHeader = () => {
  const [isSearchVisible, setSearchVisibility] = useState(false);

  const pathname = usePathname();

  const handleSearchVisibility = () => {
    setSearchVisibility((isSearchVisible) => !isSearchVisible);
  }

  const handleSearchClick = () => {
    setSearchVisible(true);
  }

  // const handleSearchClose = () => {
  //   setSearchVisible(false);
  // }

  // const handleSearch = () => {
  //   console.log('Searching...');
  // }

  return (
    <>
      <div className='md:hidden absolute bottom-0 w-full bg-neutral-800 flex mx-auto py-2 px-4 justify-center'>
        <div className='w-full flex justify-between mt-auto'>
          <Link href='/dictionary' className='bg-neutral-200 text-neutral-950 font-semibold border-2 border-neutral-950 rounded-full flex justify-center items-center px-[0.82rem]'>
            D
          </Link>
          <Link href='/' className='font-semibold p-2 bg-neutral-200 text-neutral-950 border-2 border-neutral-950 rounded-full'>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>

            </span>
          </Link>

          <Link href='/thesaurus' className='bg-neutral-200 text-neutral-950 font-semibold border-2 border-neutral-950 rounded-full flex justify-center items-center px-[0.82rem]'>
            T
          </Link>

          {/* search button */}
          <button onClick={handleSearchVisibility} className='font-semibold p-2 bg-neutral-200 text-neutral-950 border-2 border-neutral-950 rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </div>
        {isSearchVisible && pathname === '/dictionary' && (
          <DictMobileSearchForm />
        )}
        {isSearchVisible && pathname === '/thesaurus' && (
          <ThesMobileSearchForm />
        )}
      </div>
    </>
  )
}

export default MobileHeader