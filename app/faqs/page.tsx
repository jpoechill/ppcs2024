import Image from "next/image";
import Header from "../Header"
import Footer from "../Footer"
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header></Header>

      <div className="flex justify-center w-full p-5 pt-0 px-10 animate-[fade-me-in_.5s_ease-in-out]">
        <div className="flex flex-col w-full max-w-[1040px] mt-[130px]">
          <div className="text-center">
            <div className="text-sm uppercase font-bold mb-2 text-[#007AFF] tracking-widest">Projects</div>
            <div className="text-3xl font-bold tracking-wide">
              Guidance on Building Restorations
            </div>
          </div><br /><br />
          <div id="testimonials" className="text-center flex px-5 md:px-20 pb-5 justify-center">
            <div id="testimonials-mobile" className="max-w-[500px] lg:max-w-[1200px]">

              <div className="text-left w-full max-w-[900px]">
                <div className="border-b-2 border-[#73BFF0] pt-3 py-[50px]">
                  <div id="question1" className="pb-6 font-serif text-2xl font-bold">
                    What services do you offer?
                  </div>
                  <div id="answer1" className="text-lg">
                    We offer a comprehensive range of building restoration services, including structural repairs, masonry restoration, historical preservation, waterproofing, façade restoration, and more.</div>
                </div>

                <div className="border-b-2 border-[#73BFF0] py-[50px]">
                  <div id="question2" className="pb-6 font-serif text-2xl font-bold">
                    Do you provide free estimates?
                  </div>
                  <div id="answer2" className="text-lg">
                    Yes, we provide free, no-obligation estimates for all our services. Contact us to schedule an appointment.
                  </div>
                </div>

                <div className="border-b-2 border-[#73BFF0] py-[50px]">
                  <div id="question3" className="pb-6 font-serif text-2xl font-bold">
                    Are you licensed and insured?
                  </div>
                  <div id="answer3" className="text-lg">
                    Absolutely. We are fully licensed and insured to perform restoration work. Our team consists of certified professionals with extensive experience in the field.
                  </div>
                </div>

                <div className="border-b-2 border-[#73BFF0] py-[50px]">
                  <div id="question4" className="pb-6 font-serif text-2xl font-bold">
                    How long has your company been in business?
                  </div>
                  <div id="answer4" className="text-lg">
                    Our company has been providing restoration services for over 20 years, earning a reputation for quality and reliability.
                  </div>
                </div>

                <div className="border-b-2 border-[#73BFF0] py-[50px]">
                  <div id="question5" className="pb-6 font-serif text-2xl font-bold">
                    How long does a typical restoration project take?
                  </div>
                  <div id="answer5" className="text-lg">
                    The duration of a restoration project depends on the scope and complexity of the work. We provide a detailed timeline during the planning phase to ensure clear expectations.
                  </div>
                </div>

                <div className="border-b-2 border-[#73BFF0] py-[50px]">
                  <div id="question6" className="pb-6 font-serif text-2xl font-bold">
                    What materials do you use for restoration?
                  </div>
                  <div id="answer6" className="text-lg">
                    We use high-quality, durable materials that match the original construction as closely as possible, ensuring the integrity and appearance of the building are maintained.
                  </div>
                </div>

                <div className="border-b-2 border-[#73BFF0] py-[50px]">
                  <div id="question7" className="pb-6 font-serif text-2xl font-bold">
                    Can you work on historical buildings?
                  </div>
                  <div id="answer7" className="text-lg">
                    Façade restoration involves repairing and renewing the exterior surfaces of a building, including brickwork, stone, and other materials, to preserve its structural integrity and aesthetic appeal.
                  </div>
                </div>

                <div className="border-b-2 border-[#73BFF0] py-[50px]">
                  <div id="question9" className="pb-6 font-serif text-2xl font-bold">
                    What is masonry restoration?
                  </div>
                  <div id="answer9" className="text-lg">
                    Masonry restoration includes repairing, replacing, or cleaning brick, stone, and other masonry materials. This process helps maintain the building&apos;s structural integrity and historical value.
                  </div>
                </div>

                <div className="border-b-2 border-[#73BFF0] py-[50px]">
                  <div id="question10" className="pb-6 font-serif text-2xl font-bold">
                    What are the benefits of waterproofing my building?
                  </div>
                  <div id="answer10" className="text-lg">
                    Waterproofing protects your building from water damage, which can lead to structural issues, mold growth, and other costly repairs. It extends the lifespan of your property and maintains a healthy indoor environment.
                  </div>
                </div>

                <div className="border-b-2 border-[#73BFF0] py-[50px]">
                  <div id="question11" className="pb-6 font-serif text-2xl font-bold">
                    Do you offer financing options?
                  </div>
                  <div id="answer11" className="text-lg">
                    Yes, we offer flexible financing options to help manage the cost of large restoration projects. Please contact us for more details.
                  </div>
                </div>

                <div className="border-b-2 border-[#73BFF0] py-[50px]">
                  <div id="question12" className="pb-6 font-serif text-2xl font-bold">
                    How do you handle unexpected issues during a project?
                  </div>
                  <div id="answer12" className="text-lg">
                    We conduct thorough inspections before starting any project to minimize surprises. If unexpected issues arise, we communicate promptly with you and provide solutions to keep the project on track.
                  </div>
                </div>

                <div className="border-b-2 border-[#73BFF0] py-[50px]">
                  <div id="question13" className="pb-6 font-serif text-2xl font-bold">
                    Can you work on active buildings?
                  </div>
                  <div id="answer13" className="text-lg">
                    Yes, we can perform restoration work on buildings that are in use. We plan our work to minimize disruption to occupants and daily operations.
                  </div>
                </div>

                <div className="border-b-2 border-[#73BFF0] py-[50px]">
                  <div id="question14" className="pb-6 font-serif text-2xl font-bold">
                    How can I contact you?
                  </div>
                  <div id="answer14" className="text-lg">
                    You can reach us via phone at 1-888-772-2448, email at hello@ppc-restore.com, or through our website&apos;s contact form.
                  </div>
                </div>

                <div className="border-b-2 border-[#73BFF0] py-[50px]">
                  <div id="question15" className="pb-6 font-serif text-2xl font-bold">
                    Where are you located?
                  </div>
                  <div id="answer15" className="text-lg">
                    Our main office is located at 1717 Solano Way, Unit 32, Concord, CA 94520, USA. We serve clients throughout the region.
                  </div>
                </div>

                <div className="py-[50px]">
                  <div id="question16" className="pb-6 font-serif text-2xl font-bold">
                    What are your office hours?
                  </div>
                  <div id="answer16" className="text-lg">
                    Our office hours are Monday through Friday, 9 AM to 5 PM. We are closed on weekends and public holidays.
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      <Footer></Footer>
    </main>
  );
}
