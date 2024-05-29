import Image from "next/image";
import Header from "./Header"
import Footer from "./Footer"

export default function Home() {
  return (
    <main>
      <Header></Header>

      <div className="animate-[fade-me-in_.5s_ease-in-out]">
        <div className="flex justify-center w-full p-5 pt-0 px-10">
          <div className="flex flex-row w-full max-w-[1040px] rounded-xl overflow-hidden mt-[130px]">
            <Image src="/cover_group_02.jpg" alt="Group Photo" className="h-[300px] lg:h-full w-full index-0 object-cover bg-cover bg-no-repeat" priority width={1200} height={500}></Image>
          </div>
        </div>

        <div className="flex justify-center w-full p-5 px-10 mt-5 my-5">
          <div className="flex flex-col w-full max-w-[1040px]">
            <h1>Featured Work</h1>
            <br />
            <div className="w-full rounded-2xl min-h-[350px] bg-black">
              WHITE
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full p-5 px-10">
          <div className="flex flex-col w-full max-w-[1040px]">
            <h1>Recent Projects</h1>
            <br />
            <div className="grid lg:grid-rows-1 lg:grid-cols-3 gap-8">
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
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full p-5 px-10 mt-10 py-10">
          <div className="flex flex-col w-full max-w-[1040px]">
            <h1>Client List</h1>
            <div className="relative z-[-1]">
              <Image src="/client-list.png" alt="Client List"
                width={1200} height={500} ></Image>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full py-10 px-10 text-center bg-[#f6f6f6]">
          <div className="flex flex-col w-full max-w-[1040px] py-10 my-5 bg-[#f6f6f6]">
            <div className="font-medium text-xl">
              PPCS is the Leading Company for Building Restoration and Preservation
            </div>
            <br />
            Since 1983, it has been our mission to be the leading source for efficient building restoration and preservation services. When you choose PPC&S&apos;s building preservation services, you are receiving services from our efficient and results driven professionals. We are proud to have an exemplary safety record and a work force of over 100 highly trained and dedicated men and women.
          </div>
        </div>
      </div>

      <Footer></Footer>
    </main>
  );
}
