import Image from "next/image";

export default function Home() {
  return (
    <main className="animate-[fade-me-in_.5s_ease-in-out]">
      <h1>Leadership</h1><br /><br />

      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-1">
          <Image src="/portraits/pmpopa.jpg" width="200" height="100" className="w-full" alt="David Portrait"></Image>
        </div>

        <div className="col-span-2">
          <div className="text-lg">
            <span className="font-bold">Paul M. Popa</span> | President & CEO
          </div>
          <br />
          A native of Canton Ohio Paul M. Popa has been working in the building restoration and preservation industry since 1965. Following in his Father&apos;s footsteps (John Z. Popa) who found and operated Ace Window Cleaning in Brooklyn NY and where Paul began working at the age of 15. He migrated to the San Francisco area in 1976 and started as a single man operation cleaning high rise windows. Since the early days, he has statically built and diversified the company into a multi-faceted national Building restoration/preservation company with completed/ongoing project is almost every state.
          <br /><br />
          Always an innovator, Paul consistently is a dominant force in developing new and effective restoration materials, means, methods and technologies and is responsible much those used throughout the industry today. Using his years of experience as an experience as a licensed specialty contactor, Mr. Popa created a company where quality and respect are the keys to client satisfaction.
          <br /><br />
          Rooted in the deep belief that if you consistently provide your customers with a superior product, excellent service and absolute reliability you will succeed. Under his leadership PPC&S has been a successful, highly respected specialty contractor for over thirty years which all leads back to Paul M. Popa&apos;s hands-on, client first approach.
          <br /><br />
          Over the past 30 years Mr. Popa has built one of the most respected building restoration and preservation companies in the United States, which continues to grow successfully today. Popa humbly affirms that all of the success of PPC&S is credited to the dedication, loyalty, integrity and hard work from himself and his dedicated staff, which he proudly refers to as his family.
          <br /><br />
          Mr. Popa is President and Chief Executive Officer of the corporation and serves as chairman of its board of directors.
          <br /><br />

        </div>
      </div>

      <br />

      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-1 relative">
          <Image src="/portraits/david_avatar.jpg" width="200" height="100" className="w-full" alt="David Portrait"></Image>
        </div>

        <div className="col-span-2">
          <div className="text-lg">
            <span className="font-bold">David M. Popa</span> | Director of Field Operations
          </div>
          <br />
          As director of field operations, David is responsible for overseeing all field operations. Mr. Popa Joined PPC&S in 2004 and has work his way up the ladder holding several different positions. He is a 3rd generation specialty contactor, following in the footsteps of his father Paul M. Popa and his grandfather John Z. Popa.
          <br /><br />
          David is responsible for directing all field personnel, the scheduling and execution of all PPC&S project. Mr. Popa is responsible for all testing and insures PPC&S always find the most effective solution the problem. His attention to detail and unwavering commitment to excellence is a major reason for the ongoing growth and success of PPC&S.
          <br /><br />
          David is the secretary of the corporation and also serves as a member of its board of directors.
        </div>
      </div>
    </main >
  );
}
