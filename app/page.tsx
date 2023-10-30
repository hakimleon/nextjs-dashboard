import AcmeLogo from '@/app/ui/acme-logo';
import Image from 'next/image';

import Link from 'next/link';
import { lusitana } from './ui/fonts';
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-2">
      <div className="flex h-20  justify-between items-center rounded-lg bg-blue-500 p-4 md:h-24">
        <AcmeLogo />
        <Link className='text-white font-bold text-lg' href={'/dashboard'}>Dashboard</Link>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-100 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-lg text-gray-800 md:text-xl md:leading-normal ${lusitana.className}`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>  
          <Link
            href="/login"
            className="self-start font-semibold rounded-md bg-blue-500 px-6 py-2 text-sm shadow-xl hover:shadow-md  text-white transition-all hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span>
          </Link>
        </div>
        <div className="flex items-center justify-center p-2 md:w-3/5 md:px-2 md:py-4">
          {/* Add Hero Images Here */}
          <Image src='/hero-desktop.png' width={700} height={320} alt='hero image' className='hidden md:block' />
          <Image src='/hero-mobile.png' width={560} height={620} alt='hero image' className='md:hidden block' />
        </div>
      </div>
    </main> 
  );
}
