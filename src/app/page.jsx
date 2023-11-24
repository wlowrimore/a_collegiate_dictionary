import Image from "next/image"
import Link from "next/link"
import VidPlayer from "./components/cloudinary/VidPlayer"
export default function Home(width, autoplay, src) {
  return (
    <main className='w-screen h-screen flex flex-col md:justify-center items-center mx-auto'>
      <section className='pt-[6rem] md:mt-32 flex flex-col items-center'>
        <div className='w-[17rem] md:w-[36rem] md:mx-auto'>
          <h1 className='text-4xl text-sky-200 md:text-neutral-300 lg:text-5xl leading-tight md:leading-normal mb-2 md:mb-0'>Welcome to the Collegiate Resource Hub</h1>
          <h2 className='text-lg leading-tight md:leading-normal md:text-2xl'>Your resource for word definitions, etymologies, audio pronunciations and so much more!
          </h2>
          <p className='mt-2 text-sm md:text-md text-white tracking-wider'>This site&apos;s data is made available to you by the Merriam-Webster Inc family of resources.  All data is property of Merriam-Webster Inc and is gathered from the Merriam-Webster Inc API.
          </p>
        </div>
        <div className='bg-neutral-600 hidden md:flex z-[-1] relative bottom-72 w-screen'>
          <Image
            src='/backgrounds/landing.gif'
            alt=''
            width={500}
            height={500}
            className='w-100 mx-auto opacity-30'
          />
        </div>
        {/* buttons */}
        <div className='hidden w-[36rem] md:flex gap-6 mx-auto relative z-10 bottom-[30%] md:bottom-[42%]'>
          <div className='flex-1 hover:w-screen hover:text-center mb-4 md:mb-0'>
            <Link
              href='/dictionary'
              className='transform py-1 px-12 md:px-3 border border-neutral-200 rounded-tr-xl rounded-bl-xl rounded-tl-sm rounded-br-sm bg-blue-500/70 text-2xl w-[18rem] mx-auto md:w-full flex items-center gap-8 hover:w-[100%] hover:pl-[5.5rem] hover:bg-blue-600/50 hover:border hover:border-white transition-all duration-500'>
              Dictionary
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </span>
            </Link>
          </div>
          <div className=''>
            <Link
              href='/thesaurus'
              className='transform py-1 px-12 md:px-3 border border-neutral-200 rounded-tr-xl rounded-bl-xl rounded-tl-sm rounded-br-sm bg-amber-700/70 text-2xl w-[18rem] mx-auto md:w-full flex items-center gap-7 hover:w-[100%] hover:pl-[5.5rem] hover:pr-[5.5rem] hover:bg-amber-700/50 hover:border hover:border-white transition-all duration-500'>
              Thesaurus
              <span className='text-sm'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
        {/* mobile buttons */}
        <div className='md:hidden flex flex-col gap-4 text-sm mt-6 w-full flex-start px-6'>
          <Link href='/dictionary' className='flex gap-2 py-1 px-3 border-none text-lg font-semibold text-neutral-800 bg-blue-400 rounded-md w-full justify-center'>
            Dictionary
          </Link>
          <Link href='/thesaurus' className='flex gap-2 py-1 px-3 border-none text-lg font-semibold text-neutral-300 bg-amber-700 rounded-md w-full justify-center'>
            Thesaurus
          </Link>
        </div>
        {/* merriam-webster attribute */}
        <div className='md:hidden mx-6 mt-20 flex justify-center items-center gap-3 px-4 py-3 bg-neutral-800/30 rounded-lg'>
          <div>
            <Image src='/Merriam-Webster_logo.svg.png' alt='merriam-webster' width={125} height={125} />
          </div>
          <div className='text-lg leading-tight'>
            <p>Data provided by the Merriam-Webster Inc API</p>
          </div>
        </div>
      </section>
    </main>
  )
}
