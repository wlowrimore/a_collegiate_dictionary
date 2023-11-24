import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Collegiate Resource Hub',
  description: 'Collegiate dictionary and thesaurus at your fingertips.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-neutral-700 text-neutral-300'>
      <body className={`${inter.className}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
