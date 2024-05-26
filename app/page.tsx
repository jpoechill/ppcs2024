import Image from "next/image";
import Header from "./Header"
import Footer from "./Footer"

export default function Home() {
  return (
    <main>
      <Header></Header>

      <div className="flex justify-center w-full p-5 pt-0 px-10">
        <div className="flex flex-row w-full max-w-[1040px] mt-[130px]">
          <Image src="/cover_group_02.jpg" alt="Group Photo" className="rounded-2xl shadow-2xl" width={1200} height={300}></Image>
        </div>
      </div>

      <div className="flex justify-center w-full p-5 px-10">
        <div className="flex flex-row w-full max-w-[1040px]">
          <h1>Featured Work</h1>
        </div>
      </div>

      <div className="flex justify-center w-full p-5 px-10">
        <div className="flex flex-row w-full max-w-[1040px]">
          <h1>Recent Projects</h1>
        </div>
      </div>


      <div className="flex justify-center w-full p-5 px-10">
        <div className="flex flex-col w-full max-w-[1040px]">
          <h1>Client List</h1>
          <Image src="/client-list.png" alt="Client List" width={1200} height={10}></Image>
        </div>
      </div>

      <div className="flex justify-center w-full py-10 px-10 text-center bg-[#f6f6f6]">
        <div className="flex flex-col w-full max-w-[1040px] py-10 my-5 bg-[#f6f6f6]">
          <div className="font-medium text-xl">

            PPCS is the Leading Company for Building Restoration and Preservation
          </div>
          <br />
          Since 1983, it has been our mission to be the leading source for efficient building restoration and preservation services. When you choose PPC&S’s building preservation services, you are receiving services from our efficient and results driven professionals. We are proud to have an exemplary safety record and a work force of over 100 highly trained and dedicated men and women.

        </div>
      </div>

      <Footer></Footer>
    </main>
  );
}
