import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="fixed bg-white flex justify-center w-full top-0 pt-8 p-5 px-10">
      <div className="flex flex-row justify-between w-full max-w-[1040px]">
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-row gap-4 mb-2">
            <Link href="/" className="flex flex-row gap-3 items-center">
              <Image src="/logo-light.svg" alt="Top Logo" width={210} height={40}></Image>
              <Image src="/30-years-light.png" alt="Top Logo" width={60} height={0}></Image>
            </Link>
          </div>

          <div className="flex flex-row items-center gap-5 text-lg">

            <div>
              <Link href="/about">About</Link>
            </div>
            <div>
              <Link href="/services">Services</Link>
            </div>
            <div>
              <Link href="/projects">Projects</Link>
            </div>
            <div>
              <Link href="/testimonials">Testimonials</Link>
            </div>
            <div>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div className="flex flex-row items-center gap-5 text-lg">
            <div>
              <Link href="/quote">
                <div className="bg-[#0062CC] shadow-xl text-lg rounded-full text-white py-2 px-8 ml-1">
                  Request a Quote
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
