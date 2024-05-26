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
          <div className="grid grid-cols-3 gap-8">
            <div className="w-full rounded-2xl min-h-[200px] shadow-xl border overflow-hidden">
              <div>
                <Image src="/thumbnail_01.png" alt="Thumbnail" width={500} height={200}></Image>
              </div>
              <div className="p-5 pb-10">
                <div className="mt-0 mb-3 font-medium text-lg">Stanford Knight Center</div>
                We restored and detailed the exterior windows of the Stanford Knight Center, in Palo Alto, CA.
              </div>
            </div>
            <div className="w-full rounded-2xl min-h-[200px] shadow-xl border overflow-hidden">
              <div>
                <Image src="/thumbnail_01.png" alt="Thumbnail" width={500} height={200}></Image>
              </div>
              <div className="p-5 pb-10">
                <div className="mt-0 mb-3 font-medium text-lg">600 Canal</div>
                We worked on a weather proofing and restoration project for the University of New Orleans.
              </div>
            </div>
            <div className="w-full rounded-2xl min-h-[200px] shadow-xl border overflow-hidden">
              <div>
                <Image src="/thumbnail_01.png" alt="Thumbnail" width={500} height={200}></Image>
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
                <Image src="/thumbnail_01.png" alt="Thumbnail" width={500} height={200}></Image>
              </div>
              <div className="p-5 pb-10">
                <div className="mt-0 mb-3 font-medium text-lg">
                  Dropbox
                </div>
                We are contracted to clean and fix cracks in the exteriors windows of the renowned Millenium Tower.
              </div>
            </div>
            <div className="w-full rounded-2xl min-h-[200px] shadow-xl border overflow-hidden">
              <div>
                <Image src="/thumbnail_01.png" alt="Thumbnail" width={500} height={200}></Image>
              </div>
              <div className="p-5 pb-10">
                <div className="mt-0 mb-3 font-medium text-lg">
                  Hyatt Regency
                </div>
                We are contracted to clean and fix cracks in the exteriors windows of the renowned Millenium Tower.
              </div>
            </div>
            <div className="w-full rounded-2xl min-h-[200px] shadow-xl border overflow-hidden">
              <div>
                <Image src="/thumbnail_01.png" alt="Thumbnail" width={500} height={200}></Image>
              </div>
              <div className="p-5 pb-10">
                <div className="mt-0 mb-3 font-medium text-lg">
                  Samsung
                </div>
                We are contracted to clean and fix cracks in the exteriors windows of the renowned Millenium Tower.
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer></Footer>
    </main>
  );
}
