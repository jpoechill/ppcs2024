import Image from "next/image";
import Header from "../Header"
import Footer from "../Footer"

export default function Home() {
  return (
    <main>
      <Header></Header>

      <div className="flex justify-center w-full p-5 pt-0 px-10">
        <div className="flex flex-col w-full max-w-[1040px] mt-[130px]">
          <h1>Testimonials</h1><br />
          We provide top-notch building restoration and preservation services, using expert teams and advanced techniques.
          <br /><br />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="grid auto-rows-min gap-6 justify-start">
              <div className="min-w-full bg-[white] border rounded-xl transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,.15)]  text-sm p-7 text-left">
                Working with PPC&S on the restoration of our heritage site was an incredible experience. Their team displayed remarkable expertise and sensitivity to the architectural nuances, ensuring every aspect of the original design was carefully preserved. Their dedication and meticulous work truly brought our building back to its former glory, and their professionalism was evident in every step of the process.
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/female-01.jpeg" alt="" className="rounded-full" width={60} height={60} />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-sm pl-5">
                      Sarah M.
                    </span>
                    <div className="font-sans font-extralight text-xs pl-5">
                      Oakland, CA
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-[white] border border-[#f1f1f1] rounded-xl transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,.15)]  text-sm p-7 text-left">
                I was amazed at how PPC&S transformed our office&apos;s glass façades. Their glass restoration and cleaning service removed years of environmental damage, making the glass look absolutely spotless and scratch-free. Their team worked efficiently and with great care, minimizing disruption to our operations.
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/male-02.jpeg" alt="" className="rounded-full" width={60} height={60} />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-sm pl-5">
                      John D.
                    </span>
                    <div className="font-sans font-extralight text-xs pl-5">
                      Piedmont, CA
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-[white] border border-[#f1f1f1] rounded-xl transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,.15)]  text-sm p-7 text-left">
                The sealants, coatings, and weatherproofing services provided by PPC&S have greatly enhanced the durability of our building. Their use of high-quality materials and advanced techniques is evident in the results.
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/female-03.jpeg" alt="" className="rounded-full" width={60} height={60} />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-sm pl-5">
                      Emily R.
                    </span>
                    <div className="font-sans font-extralight text-xs pl-5">
                      San Francisco, CA
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="grid auto-rows-min gap-6">
              <div className="min-w-full bg-[white] border rounded-xl transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,.15)]  text-sm p-7 text-left">
                The communication was top-notch; they were always available to answer our questions and took the time to explain complex processes in a way that was easy to understand.
                <br /><br />
                The end result was stunning—the theater maintains its historic splendor but now sparkles with updated features that have significantly boosted its appeal and utility. It&apos;s clear that PPC&S doesn&apos;t just restore buildings; they breathe new life into them, ensuring they stand proud for generations to come. The community has fallen in love with the theater all over again, and we truly couldn&apos;t have asked for a better experience or a more dedicated team.
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/male-04.png" alt="" className="rounded-full" width={60} height={60} />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-sm pl-5">
                      José P.
                    </span>
                    <div className="font-sans font-extralight text-xs pl-5">
                      Oakland, CA
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-[white] border border-[#f1f1f1] rounded-xl transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,.15)]  text-sm p-7 text-left">
                Their meticulous attention to detail, coupled with their innovative solutions, revitalized the building&lsquo;s essence while preserving its rich history.
                <br /><br />
                Throughout the process, their team demonstrated unparalleled dedication, ensuring every aspect of the renovation resonated with the community&lsquo;s aspirations.
                <br /><br />
                From structural enhancements to aesthetic refinements, PPC&S orchestrated a seamless transformation that transcended mere renovation—it fostered a renewed sense of pride and belonging within our neighborhood.
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/male-07.png" alt="" className="rounded-full" width={60} height={60} />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-sm pl-5">
                      Arthur O.
                    </span>
                    <div className="font-sans font-extralight text-xs pl-5">
                      Piedmont, CA
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid auto-rows-min gap-6">
              <div className="min-w-full bg-[white] border rounded-xl transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,.15)]  text-sm p-7 text-left">
                Working with PPC&S on our historic theater was like stepping back in time but with all the modern comforts you could want. They nailed the classic look we love and added some cool, new features that really make the place shine. Everyone was super nice and really cared about our vision.
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/male-06.png" alt="" className="rounded-full" width={60} height={60} />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-sm pl-5">
                      Alicia A.
                    </span>
                    <div className="font-sans font-extralight text-xs pl-5">
                      Oakland, CA
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-[white] border border-[#f1f1f1] rounded-xl transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,.15)]  text-sm p-7 text-left">
                PPC&S really knows their stuff when it comes to building projects. They helped us dodge a few bullets with their smart advice and spot-on testing. It&apos;s like they had a sixth sense for what could go wrong and how to avoid it.
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/female-05.png" alt="" className="rounded-full" width={60} height={60} />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-sm pl-5">
                      Jennifer B.
                    </span>
                    <div className="font-sans font-extralight text-xs pl-5">
                      Piedmont, CA
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-[white] border border-[#f1f1f1] rounded-xl transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,.15)]  text-sm p-7 text-left">
                Implementing bird control at our facility was a sensitive issue, as we wanted to ensure any method used was humane. PPC&S provided an environmentally friendly solution that was highly effective, preventing birds from nesting and causing damage without harming them. Their thoughtful approach and successful results have made them our go-to experts.
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/male-08.png" alt="" className="rounded-full" width={60} height={60} />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-sm pl-5">
                      Michael X.
                    </span>
                    <div className="font-sans font-extralight text-xs pl-5">
                      San Francisco, CA
                    </div>
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
