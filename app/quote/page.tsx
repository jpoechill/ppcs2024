'use client'

import Image from "next/image";
import Header from "../Header"
import Footer from "../Footer"
import { useState, useRef, useEffect } from 'react';
// import emailjs from 'emailjs-com';
import Link from "next/link";

export default function Home() {

  const [showGeneral, setShowGeneral] = useState(true);
  const [showCleaningReqs, setShowCleaningReqs] = useState(true);
  const [showTiming, setShowTiming] = useState(true);

  const [showSpecialReqs, setShowSpecialReqs] = useState(true);
  const [showAdditional, setShowAdditional] = useState(true);


  const [heightRef1, setHeightRef1] = useState(-1)
  const [heightRef2, setHeightRef2] = useState(-1)
  const [heightRef3, setHeightRef3] = useState(-1)
  const [heightRef4, setHeightRef4] = useState(-1)
  const [heightRef5, setHeightRef5] = useState(-1)
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);
  const ref5 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref1.current) {
      setHeightRef1(ref1.current.clientHeight)
    }
    if (ref2.current) {
      setHeightRef2(ref2.current.clientHeight)
    }
    if (ref3.current) {
      setHeightRef3(ref3.current.clientHeight)
    }
    if (ref4.current) {
      setHeightRef4(ref4.current.clientHeight)
    }
    if (ref5.current) {
      setHeightRef5(ref5.current.clientHeight)
    }
  }, [ref1, ref2, ref3, ref4, ref5])


  const form = useRef<HTMLFormElement | null>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      // emailjs.sendForm('service_f6v1078', 'template_du93o8p', form.current, '9_1cvi1qcNyiNlqSo')
      //   .then((result) => {
      //     console.log(result.text);
      //   }, (error) => {
      //     console.log(error.text);
      //   });

      // console.log(form.current);
      // alert('Message sent successfully!')
      // form.current.reset()
      // scrolltoHash('top')
    }
  };
  return (
    <main>
      <Header></Header>

      <div className="flex justify-center w-full p-5 pt-0 px-10 animate-[fade-me-in_.5s_ease-in-out]">
        <div className="flex flex-col w-full max-w-[1040px] mt-[130px]">
          <div className="text-center mb-4">
            <div className="text-sm uppercase font-bold mb-2 text-[#007AFF] tracking-widest">Request a Quote</div>
            <div className="text-3xl font-bold tracking-wide">
              Ready to Start Your Next Project?
            </div>
          </div><br />
          <form ref={form} onSubmit={sendEmail}>
            <div className="text-md font-bold text-left bg-[#FFF] border shadow-lg py-8 rounded-2xl">
              <div ref={ref1} className="font-normal text-md overflow-hidden px-6 transition-all ease-in-out delay-0 duration-500" style={{ "height": !showGeneral ? 0 : heightRef1 }}>
                <div className="uppercase font-medium">General Information </div><br />
                <div className="flex flex-col md:flex-row gap-5 ">
                  <div className="w-full">
                    Name<span className="text-[#C41C94]">*</span> <br />
                    <input type="text" name="user_name" className="border px-4 py-3 font-light rounded-full mt-2 w-full" placeholder="Jane Smith" />
                  </div>
                  <div className="w-full">
                    Email/Phone<span className="text-[#C41C94]">*</span> <br />
                    <input type="text" name="user_phone" className="border px-5 py-3 font-light rounded-full mt-2 w-full" placeholder="email@gmail.com" /> <br /><br />
                  </div>
                </div>

                Can you provide the address (or location) of the property to be cleaned?
                <input type="text" name="user_name" className="border px-4 py-3 font-light rounded-full mt-2 w-full" placeholder="An address to your location or property..." />
                <br /><br />


                <div className="flex flex-col md:flex-row gap-5 mb-5">
                  <div className="w-full">
                    What is the nature of this property?
                    <div className="border mt-2 rounded-full">
                      <select name="discovery" id="" className=" p-3 w-full rounded-full border-r-[15px] border-transparent font-normal px-3">
                        <option value="" selected>Residential</option>
                        <option value="">Office</option>
                        <option value="">Commercial</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full">
                    How often do you require cleaning services?

                    <div className="border mt-2 rounded-full">
                      <select name="discovery" id="" className="p-3 w-full rounded-full border-r-[15px] border-transparent font-normal px-3">
                        <option value="">Weekly</option>
                        <option value="" selected>Bi-weekly</option>
                        <option value="">Monthly</option>
                        <option value="">One-time</option>
                      </select>
                    </div>
                  </div>
                </div>

                Do you require an additional deep cleaning?
                <select name="discovery" id="" className="mt-2 mb-6 p-3 w-full rounded-xl border-r-[15px] border-transparent font-normal px-3">
                  <option value=""></option>
                  <option value="">No</option>
                  <option value="">Yes</option>
                </select>

                <div className="flex flex-col md:flex-row gap-5 mb-6">
                  <div className="w-full">
                    What is the size of the property in square footage? <br />
                    <select name="discovery" id="" className="mt-2 p-3 w-full rounded-xl border-r-[15px] border-transparent font-normal px-3">
                      <option value="">500 sq. ft</option>
                      <option value="">1000 sq. ft</option>
                      <option value="" selected>1500 sq. ft</option>
                      <option value="">2000 sq. ft</option>
                      <option value="">3000 sq. ft</option>
                      <option value="">4000 sq. ft</option>
                      <option value="">5000+ sq. ft</option>
                    </select>
                  </div>
                  <div className="w-full">
                    How many rooms does the property have? <br />
                    <select name="discovery" id="" className="mt-2 p-3 w-full rounded-xl border-r-[15px] border-transparent font-normal px-3">
                      <option value=""></option>
                      <option value="">Studio</option>
                      <option value="">0</option>
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                      <option value="">More than 5</option>
                    </select></div>
                </div>

              </div>



              {/* } */}
              {/* <hr /> */}
            </div>

            <br />
            <div className="text-sm font-normal  text-center w-full">
              The information sent through this online form is NOT secure.
              If you would like to discuss any related matter in private, please contact us directly.
            </div>

            <button className="mt-6 py-3 font-medium text-lg transition-all ease-in-out duration-500 shadow-3xl hover:shadow-xl css-selector bg-[#007AFF] hover:bg-[#007AFF] w-full text-white rounded-full p-2 px-6">
              Request a Quote
            </button>
          </form>

        </div>
      </div >

      <Footer></Footer>
    </main >
  );
}
