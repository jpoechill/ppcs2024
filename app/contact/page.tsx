import Image from "next/image";
import Header from "../Header"
import Footer from "../Footer"

export default function Home() {
  return (
    <main>
      <Header></Header>

      <div className="flex justify-center w-full p-5 pt-0 px-10">
        <div className="flex flex-col w-full max-w-[1040px] mt-[130px]">
          <h1>Contact Us</h1><br />
          Whether you have questions about our services, need a consultation, or are ready to start your next project, our team is here to help.
          <br /><br />
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
