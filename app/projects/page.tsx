import Image from "next/image";
import Header from "../Header"
import Footer from "../Footer"

export default function Home() {
  return (
    <main>
      <Header></Header>

      <div className="flex justify-center w-full p-5 pt-0 px-10 animate-[fade-me-in_.5s_ease-in-out]">
        <div className="flex flex-col w-full max-w-[1040px] mt-[130px]">
          <div className="text-center">
            <div className="text-sm uppercase font-bold mb-2 text-[#007AFF] tracking-widest">Projects</div>
            <div className="text-3xl font-bold tracking-wide">
              Explore Our Portfolio of Work
            </div>
          </div><br /><br />
          <div className="grid lg:grid-rows-1 lg:grid-cols-3 gap-8">
            <div className="w-full rounded-2xl min-h-[200px] shadow-xl border overflow-hidden">
              <div>
                <Image src="/thumbnails/stanford-knight-01.png" alt="Thumbnail" width={500} height={200}></Image>
              </div>
              <div className="p-5 pb-10">
                <div className="mt-0 mb-3 font-medium text-lg">Stanford Knight Center</div>
                We restored and detailed the exterior windows of the Stanford Knight Center, in Palo Alto, CA.
              </div>
            </div>
            <div className="w-full rounded-2xl min-h-[200px] shadow-xl border overflow-hidden">
              <div>
                <Image src="/thumbnails/600-canal.png" alt="Thumbnail" width={500} height={200}></Image>
              </div>
              <div className="p-5 pb-10">
                <div className="mt-0 mb-3 font-medium text-lg">600 Canal</div>
                We worked on a weather proofing and restoration project for the University of New Orleans.
              </div>
            </div>
            <div className="w-full rounded-2xl min-h-[200px] shadow-xl border overflow-hidden">
              <div>
                <Image src="/thumbnails/millenium.png" alt="Thumbnail" width={500} height={200}></Image>
              </div>
              <div className="p-5 pb-10">
                <div className="mt-0 mb-3 font-medium text-lg">
                  Millenium Tower
                </div>
                We are contracted to clean and fix cracks in the exteriors windows of the renowned Millenium Tower.
              </div>
            </div>
            <div className="w-full rounded-2xl min-h-[200px] shadow-xl border overflow-hidden">
              <div>
                <Image src="/thumbnails/dropbox.png" alt="Thumbnail" width={500} height={200}></Image>
              </div>
              <div className="p-5 pb-10">
                <div className="mt-0 mb-3 font-medium text-lg">Dropbox</div>
                The Exchange building required exterior chemical cleaning due to calcium build-up and efflorescence.
              </div>
            </div>
            <div className="w-full rounded-2xl min-h-[200px] shadow-xl border overflow-hidden">
              <div>
                <Image src="/thumbnails/408-panama-stanford.png" alt="Thumbnail" width={500} height={200}></Image>
              </div>
              <div className="p-5 pb-10">
                <div className="mt-0 mb-3 font-medium text-lg">Panama Mall</div>
                Stanford University required cleaning and repairing of discolored panels.
              </div>
            </div>
            <div className="w-full rounded-2xl min-h-[200px] shadow-xl border overflow-hidden">
              <div>
                <Image src="/thumbnails/hyatt-regency-sculpture.png" alt="Thumbnail" width={500} height={200}></Image>
              </div>
              <div className="p-5 pb-10">
                <div className="mt-0 mb-3 font-medium text-lg">
                  Hyatt Regency
                </div>
                A large sculpture in the atrium of the Hyatt Regency in San Francisco require cleaning and repairs.
              </div>
            </div>
            <div className="w-full rounded-2xl min-h-[200px] shadow-xl border overflow-hidden">
              <div>
                <Image src="/thumbnails/oyster-point-sf.png" alt="Thumbnail" width={500} height={200}></Image>
              </div>
              <div className="p-5 pb-10">
                <div className="mt-0 mb-3 font-medium text-lg">Oyster Point</div>
                We provided exterior GFRC cleaning & sealing services for CBRE in South San Francisco, CA.
              </div>
            </div>
            <div className="w-full rounded-2xl min-h-[200px] shadow-xl border overflow-hidden">
              <div>
                <Image src="/thumbnails/childrens-hospital-ut.png" alt="Thumbnail" width={500} height={200}></Image>
              </div>
              <div className="p-5 pb-10">
                <div className="mt-0 mb-3 font-medium text-lg">Children&apos;s Hospital</div>
                We provided exterior frame-restoration services for the Children&apos;s Hospital in Salt Lake City, UT.
              </div>
            </div>
            <div className="w-full rounded-2xl min-h-[200px] shadow-xl border overflow-hidden">
              <div>
                <Image src="/thumbnails/alcatraz.png" alt="Thumbnail" width={500} height={200}></Image>
              </div>
              <div className="p-5 pb-10">
                <div className="mt-0 mb-3 font-medium text-lg">
                  Alcatraz Island
                </div>
                We installed a bird-netting system for the historical Alcatraz Island, in San Francisco, CA.
              </div>
            </div><div className="w-full rounded-2xl min-h-[200px] shadow-xl border overflow-hidden">
              <div>
                <Image src="/thumbnails/pge-slo-ca.png" alt="Thumbnail" width={500} height={200}></Image>
              </div>
              <div className="p-5 pb-10">
                <div className="mt-0 mb-3 font-medium text-lg">PG&E</div>
                We provided historical building restoration services for the PG&E building in San Luis Obispo, CA.
              </div>
            </div>
            <div className="w-full rounded-2xl min-h-[200px] shadow-xl border overflow-hidden">
              <div>
                <Image src="/thumbnails/mcdills.png" alt="Thumbnail" width={500} height={200}></Image>
              </div>
              <div className="p-5 pb-10">
                <div className="mt-0 mb-3 font-medium text-lg">McDills Air Force Base</div>
                We designed and installed bird netting systems in 7 aircraft hangars.
              </div>
            </div>
            <div className="w-full rounded-2xl min-h-[200px] shadow-xl border overflow-hidden">
              <div>
                <Image src="/thumbnails/stpauls-oakland.png" alt="Thumbnail" width={500} height={200}></Image>
              </div>
              <div className="p-5 pb-10">
                <div className="mt-0 mb-3 font-medium text-lg">
                  St Paul&apos;s Towers
                </div>
                We designed and installed 3/4&quot; bird netting for a community of senior citizens.
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer></Footer>
    </main>
  );
}
