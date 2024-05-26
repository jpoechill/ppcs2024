import Image from "next/image";
import Header from "../Header"
import Footer from "../Footer"

export default function Home() {
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
              Electronic
            </div>
            <div>
              Telephone
            </div>
            <div>
              Offices
            </div>
            <div>
              Careers
            </div>
          </div>

          <hr />
          <br />

          <h1>Telephone</h1><br />
          Please reach us directly by phone at: 1-888-772-2448.
          <br /><br />
          Our hours are 9am-5pm, Monday through Friday.
          <br /><br />
          <h1>Locations</h1><br />
          Quality and craftsmanship are the cornerstones of our work. We are committed to providing the highest quality service, ensuring that every restoration project not only meets but exceeds client expectations. Our dedication to excellence guarantees that the beauty and integrity of your building are preserved for generations to come.
          <br /><br />
          <h1>Careers</h1><br />
          We are always looking for talented and client-focused people!
          <br /><br />
          Please email your cover letter and resume to ppc@ppc-restore.com or send to:
          <br /><br />
          PPC&S, Inc.<br />
          584 Castro Street, Suite 512<br />
          San Francisco, CA 94114<br />
          <br /><br />
        </div>
      </div>

      <Footer></Footer>
    </main>
  );
}
