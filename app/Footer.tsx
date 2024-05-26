import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-center w-full py-10 px-10 mt-10">
      <div className="flex flex-row justify-between w-full max-w-[1040px]">
        <div>
          <Link href="/">
            <Image src="/logo-light.svg" alt="Logo Basic" width={210} height={300}></Image>
          </Link>
          <br />
          Professional Property Consultants & Services, Inc. © 2024 <br />
          CL# 927489 | Classification: C61, D63, D64
        </div>
        <div className="text-right">
          <Image src="/social-facebook.svg" className="inline mr-7" alt="Facebook Logo" width={40} height={30}></Image>
          <Image src="/social-instagram.svg" className="inline" alt="Instagram Logo" width={40} height={30}></Image>
          <br /><br />
          hello@ppc-restore.com<br />
          1-888-772-2448
        </div>
      </div>
    </div>
  );
}
