import Image from "next/image";

export default function Home() {
  return (
    <main className="animate-[fade-me-in_.5s_ease-in-out]">
      <h1>Locations</h1><br /><br />

      <div className="grid grid-cols-2 gap-y-10">
        <div>
          <div className="text-xl font-medium mb-2">San Francisco</div>
          584 Castro Street, Suite 512 <br />
          San Francisco, CA 94114 <br /> <br />

          Phone: 415-487-6323
        </div>
        <div>
          <div className="text-xl font-medium mb-2">Concord</div>
          1717 Solano Way, Unit 32 <br />
          Concord, CA 94520 <br /> <br />

          Phone: 925-247-0334 <br />
          Fax: 925-247-0286
        </div>
        <div>
          <div className="text-xl font-medium mb-2">Reno</div>
          2621 Northgate Lane, Suite 6 <br />
          Carson City, NV 89706 <br /> <br />

          Phone: 775-888-1332 <br />
          Fax: 775-883-2384 <br />

        </div>
        <div>
          <div className="text-xl font-medium mb-2">Nevada</div>
          9120 Double Diamond Parkway <br />
          Reno, NV 89521 <br /> <br />

          Phone: 775-525-2892 <br />
          Fax: 775-525-2898 <br />
        </div>
      </div>



    </main >
  );
}
