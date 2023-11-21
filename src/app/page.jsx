import Image from "next/image"
import Link from "next/link"
import VidPlayer from "./components/cloudinary/VidPlayer"
export default function Home(width, autoplay, src) {
  return (
    <main className='w-screen h-screen flex flex-col justify-center items-center mx-auto'>
      <section className='mt-32'>
        <div className='w-[36rem] mx-auto'>
          <h1 className='text-5xl'>Welcome to the Collegiate Resource Hub</h1>
          <h2 className='text-2xl'>Your resource for word definitions, etymologies, audio pronunciations and so much more!
          </h2>
          <p className='mt-2 text-white tracking-wider'>This site&apos;s data is made available to you by the Merriam-Webster Inc family of resources.  All data is property of Merriam-Webster Inc and is gathered from the Merriam-Webster Inc API.
          </p>
        </div>
        <div className='bg-neutral-600 flex flex-col z-[-1] relative bottom-72 w-screen'>
          <Image
            src='/backgrounds/landing.gif'
            alt=''
            width={500}
            height={500}
            className='w-100 mx-auto opacity-30'
          />
        </div>
        <div className='w-[36rem] flex gap-6 mx-auto relative z-10 bottom-[42%]'>
          <div className='hover:w-screen hover:text-center'>
            <Link
              href='/dictionary'
              className='transform py-1 px-3 border border-neutral-200 rounded-tr-xl rounded-bl-xl rounded-tl-sm rounded-br-sm bg-blue-500/70 text-2xl w-full flex items-center gap-8 hover:w-[100%] hover:pl-[5.5rem] hover:bg-blue-600/50 hover:border hover:border-white transition-all duration-500'>
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
              className='transform py-1 px-3 border border-neutral-200 rounded-tr-xl rounded-bl-xl rounded-tl-sm rounded-br-sm bg-amber-700/70 text-2xl w-full flex items-center gap-9 hover:w-[125%] hover:pl-[5.5rem] hover:bg-amber-700/50 hover:border hover:border-white transition-all duration-500'>
              Thesaurus
              <span className=''>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
