import Image from "next/image";
import Header from "../Header"
import Footer from "../Footer"

export default function Home() {
  return (
    <main>
      <Header></Header>

      <div className="flex justify-center w-full p-5 pt-0 px-10">
        <div className="flex flex-col w-full max-w-[1040px] mt-[130px]">
          <h1>About Us</h1><br />
          Welcome to our company, where excellence in building restoration and preservation is our hallmark.
          <br /><br />

          <div className="flex flex-row justify-center gap-x-[40px] mt-4 mb-4 text-xl">
            <div>
              Mission
            </div>
            <div>History</div>
            <div>
              Leadership
            </div>
            <div>
              Safety
            </div>
          </div>

          <hr />

          <br /><br />

          <h1>Our Mission</h1><br />
          Our mission is to deliver high-quality and effective building restoration and preservation services. We understand the critical importance of your property&apos;s appearance and structural integrity, and we are dedicated to achieving the results you desire. Our team of professionals, composed of experienced and highly trained men and women, brings extensive knowledge and expertise to every project.
          <br /><br />

          <h1>Our Expertise</h1><br />
          We pride ourselves on staying at the forefront of industry methods and utilizing state-of-the-art technology to provide superior building preservation solutions. Our team continuously updates their skills and techniques to ensure we offer the most advanced and effective services available. Whether it&apos;s historical preservation, façade restoration, structural repairs, or waterproofing, we tailor our approach to meet the unique needs of each project.
          <br /><br />
          <h1>Commitment to Quality</h1><br />
          Quality and craftsmanship are the cornerstones of our work. We are committed to providing the highest quality service, ensuring that every restoration project not only meets but exceeds client expectations. Our dedication to excellence guarantees that the beauty and integrity of your building are preserved for generations to come.
          <br /><br />
          Thank you for considering us for your building restoration and preservation needs. We look forward to the opportunity to work with you and demonstrate our commitment to quality and exceptional service.
        </div>
      </div>

      <Footer></Footer>
    </main>
  );
}
