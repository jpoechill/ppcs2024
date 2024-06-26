'use client';

import Image from "next/image";
import Header from "../Header"
import Footer from "../Footer"
import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <main>
      <Header></Header>

      <div className="flex justify-center w-full p-5 pt-0 px-10 animate-[fade-me-in_.5s_ease-in-out]">
        <div className="flex flex-col w-full max-w-[1040px] mt-[130px]">
          <div className="text-center">
            <div className="text-sm uppercase font-bold mb-2 text-[#007AFF] tracking-widest">About</div>
            <div className="text-3xl font-bold tracking-wide">
              Building Restoration and Preservation
            </div>
          </div><br />

          <div className="flex flex-row justify-center gap-x-[40px] mt-4 mb-4 text-lg">
            <div>
              <Link href="/about/mission" className={pathname === '/about/mission' ? 'text-[#007AFF]' : ''}>Mission</Link>
            </div>
            <div>
              <Link href="/about/history" className={pathname === '/about/history' ? 'text-[#007AFF]' : ''}>History</Link></div>
            <div>
              <Link href="/about/leadership" className={pathname === '/about/leadership' ? 'text-[#007AFF]' : ''}>Leadership</Link>
            </div>
            <div>
              <Link href="/about/safety" className={pathname === '/about/safety' ? 'text-[#007AFF]' : ''}>Safety</Link>
            </div>
          </div>

          <hr />

          <br /><br />
          {children}
        </div>
      </div>

      <Footer></Footer>
    </main>
  )
}