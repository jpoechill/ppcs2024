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
          <div className="text-center animate-[fade-me-in_s_ease-in-out]">
            <div className="text-sm uppercase font-bold mb-2 text-[#007AFF] tracking-widest">Contact</div>
            <div className="text-3xl font-bold tracking-wide">
              Our Team is Here to Help
            </div>
          </div><br />

          <div className="flex flex-row justify-center gap-x-[40px] mt-4 mb-4 text-lg">
            <div>
              <Link href="/contact/electronic" className={pathname === '/about/electronic' ? 'text-[#007AFF]' : ''}>Electronic</Link>
            </div>
            <div>
              <Link href="/contact/telephone" className={pathname === '/about/telephone' ? 'text-[#007AFF]' : ''}>Telephone</Link></div>
            <div>
              <Link href="/contact/offices" className={pathname === '/about/offices' ? 'text-[#007AFF]' : ''}>Offices</Link>
            </div>
            <div>
              <Link href="/contact/careers" className={pathname === '/about/careers' ? 'text-[#007AFF]' : ''}>Careers</Link>
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