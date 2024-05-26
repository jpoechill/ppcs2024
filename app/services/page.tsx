import Image from "next/image";
import Header from "../Header"
import Footer from "../Footer"

export default function Home() {
  return (
    <main>
      <Header></Header>

      <div className="flex justify-center w-full p-5 pt-0 px-10">
        <div className="flex flex-col w-full max-w-[1040px] mt-[130px]">
          <h1>Our Services</h1><br />
          We provide top-notch building restoration and preservation services, using expert teams and advanced techniques.
          <br /><br />
          <div className="grid grid-cols-3 gap-8">
            <div className="w-full rounded-2xl min-h-[200px] shadow-xl border overflow-hidden">
              <div>
                <Image src="/thumbnail_01.png" alt="Thumbnail" width={500} height={200}></Image>
              </div>
              <div className="p-5 pb-10">
                <div className="mt-0 mb-3 font-medium text-lg">Historic Restoration</div>
                Preserve and restore the original beauty and integrity of historic buildings, using specialized techniques to maintain their unique character.
              </div>
            </div>
            <div className="w-full rounded-2xl min-h-[200px] shadow-xl border overflow-hidden">
              <div>
                <Image src="/thumbnail_01.png" alt="Thumbnail" width={500} height={200}></Image>
              </div>
              <div className="p-5 pb-10">
                <div className="mt-0 mb-3 font-medium text-lg">Project Consulting and Testing</div>
                Comprehensive expertise and detailed evaluations to ensure your building projects are executed efficiently and to the highest standards.
              </div>
            </div>
            <div className="w-full rounded-2xl min-h-[200px] shadow-xl border overflow-hidden">
              <div>
                <Image src="/thumbnail_01.png" alt="Thumbnail" width={500} height={200}></Image>
              </div>
              <div className="p-5 pb-10">
                <div className="mt-0 mb-3 font-medium text-lg">Building Restoration & Cleaning</div>
                Revitalize your property, ensuring it looks pristine and maintains its structural integrity through expert techniques and thorough cleaning.
              </div>
            </div>
            <div className="w-full rounded-2xl min-h-[200px] shadow-xl border overflow-hidden">
              <div>
                <Image src="/thumbnail_01.png" alt="Thumbnail" width={500} height={200}></Image>
              </div>
              <div className="p-5 pb-10">
                <div className="mt-0 mb-3 font-medium text-lg">Sealants, Coatings & Weatherproofing</div>
                Protect your building from the elements, enhancing durability and longevity with advanced, high-quality materials.
              </div>
            </div>
            <div className="w-full rounded-2xl min-h-[200px] shadow-xl border overflow-hidden">
              <div>
                <Image src="/thumbnail_01.png" alt="Thumbnail" width={500} height={200}></Image>
              </div>
              <div className="p-5 pb-10">
                <div className="mt-0 mb-3 font-medium text-lg">Glass Restoration & Cleaning</div>
                Glass restoration and cleaning services using advanced techniques to remove stains and scratches, ensuring your windows look pristine.
              </div>
            </div>
            <div className="w-full rounded-2xl min-h-[200px] shadow-xl border overflow-hidden">
              <div>
                <Image src="/thumbnail_01.png" alt="Thumbnail" width={500} height={200}></Image>
              </div>
              <div className="p-5 pb-10">
                <div className="mt-0 mb-3 font-medium text-lg">Bird Control Systems</div>
                Effective, humane solutions to protect your property from bird damage using advanced, eco-friendly technologies.
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </main>
  );
}
