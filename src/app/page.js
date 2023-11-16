import Link from "next/link"

export default function Home() {
  return (
    <main className='flex flex-col justify-center text-justify mx-[32rem] my-12'>
      {/* <articl className='mb-16'>
         Sapien et ligula ullamcorper malesuada. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Nisi scelerisque eu ultrices vitae auctor eu augue. Dui id ornare arcu odio ut sem. Aliquam ultrices sagittis orci a scelerisque. Urna id volutpat lacus laoreet. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Quis auctor elit sed vulputate mi sit amet mauris commodo. Nisl vel pretium lectus quam id.
      </articl> */}
      <div className='flex justify-end gap-10'>
        <div className='relative w-[24rem] h-[32rem] border-2 border-white rounded-lg'>
          <div
            className='w-fit py-1 px-2 border border-white bg-blue-800 text-white text-lg rounded-tl-sm'>
            Dictionary
          </div>
          <div className='px-5 py-8'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus mattis molestie a iaculis. Dolor purus non enim praesent elementum facilisis leo vel fringilla. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Malesuada bibendum arcu vitae elementum curabitur. Ullamcorper velit sed ullamcorper morbi. Vel pharetra vel turpis nunc. Diam vulputate ut pharetra sit amet aliquam id diam.
            </p>
          </div>
          <Link href='/dictionary' className='cursor-pointer absolute bottom-4 right-4 hover:text-blue-400 hover:scale-125 transform transiion-all duration-300'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        <div className='relative w-[24rem] h-[32rem] border-2 border-white rounded-lg'>
          <div
            className='w-fit py-1 px-2 border border-white bg-amber-700 text-white text-lg rounded-tl-sm'>
            Thesaurus
          </div>
          <div className='px-5 py-8'>
            <p>
              Sapien et ligula ullamcorper malesuada. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Nisi scelerisque eu ultrices vitae auctor eu augue. Dui id ornare arcu odio ut sem. Aliquam ultrices sagittis orci a scelerisque. Urna id volutpat lacus laoreet. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Quis auctor elit sed vulputate mi sit amet mauris commodo. Nisl vel pretium lectus quam id.
            </p>
          </div>
          <Link href='#' className='cursor-pointer absolute bottom-4 right-4 hover:text-amber-700 hover:scale-125 transform transiion-all duration-300'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  )
}
