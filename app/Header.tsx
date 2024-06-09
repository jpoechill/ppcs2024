'use client';

import Image from "next/image";
import Link from "next/link";

import { useState, useRef } from 'react';

export default function Header() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <div className="fixed bg-white flex justify-center w-full z-[10] top-0 border-b py-4 lg:pt-4 lg:p-3 px-10 ">
        <div className="flex flex-row justify-between w-full max-w-[1040px]">
          <div className="flex flex-row w-full justify-between lg:items-center">
            <div className="flex flex-row gap-4 mt-2 mb-2">
              <Link href="/" className="flex flex-row gap-3 items-center">
                <Image src="/logo-light.svg" alt="Top Logo" width={180} height={40}></Image>
                <Image src="/30-years-light.png" alt="Top Logo" width={60} height={0}></Image>
              </Link>
              {/* <Link href="/" className="lg:hidden flex-row pt-2 gap-3 items-center">
                <Image src="/logo_mobile.svg" alt="Top Logo" width={40} height={40}></Image>
              </Link> */}
            </div>

            <div className="hidden lg:flex flex-row items-center gap-5 text-lg">
              <div>
                <Link href="/about/mission">About</Link>
              </div>
              <div>
                <Link href="/services">Services</Link>
              </div>
              <div>
                <Link href="/projects">Projects</Link>
              </div>
              <div>
                <Link href="/faqs">FAQs</Link>
              </div>
              <div>
                <Link href="/testimonials">Testimonials</Link>
              </div>
              <div>
                <Link href="/contact/electronic">Contact</Link>
              </div>
            </div>
            <div className="hidden lg:flex flex-row lg:items-center gap-5 text-lg">
              <div>
                <Link href="/quote">
                  <div className="bg-[#0062CC] shadow-xl text-lg rounded-full text-white py-1 px-6 ml-1">
                    Request a Quote
                  </div>
                </Link>
              </div>
            </div>
            <div className="cursor-pointer lg:hidden pt-6 pr-0" onClick={() => { setShowMenu(!showMenu) }}>
              {
                showMenu ?
                  <Image src="/cross_icon.svg" alt="logo" className="fill-[#FFFFFF]" width={23} height={23}></Image>
                  :
                  <Image src="/hamburger_icon.svg" className="fill-[#FFFFFF]" alt="logo" width={30} height={30}></Image>
              }
            </div>

          </div>


        </div>

      </div>
      {
        showMenu &&
        <div className="fixed pt-[125px] z-[0] w-full px-10 pb-5 shadow-xl bg-[#fbfefe]">
          <div className="flex flex-col w-full gap-5 text-left text-lg">
            <div>
              <Link href="/about/mission">About</Link>
            </div>
            <hr />
            <div>
              <Link href="/services">Services</Link>
            </div>
            <hr />
            <div>
              <Link href="/projects">Projects</Link>
            </div>
            <hr />
            <div>
              <Link href="/testimonials">Testimonials</Link>
            </div>
            <hr />
            <div>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <Link href="/quote" className="flex mt-5">
              <div className="bg-[#0062CC] shadow-xl text-lg rounded-full w-full text-center text-white py-2 px-8 ml-1">
                Request a Quote
              </div>
            </Link>
          </div>
        </div>
      }
    </div>


  );
}
